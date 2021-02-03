import * as THREE from "https://donghakang.github.io/node_modules/three/build/three.module.js";

function main() {
    // scene
    const canvas = document.querySelector("#c");
    const renderer = new THREE.WebGLRenderer({ canvas });

    const fov = 75;
    const aspect = 2; // the canvas default
    const near = 0.1;
    const far = 100;
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.z = 20;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color("white");
    const pickingScene = new THREE.Scene();
    pickingScene.background = new THREE.Color(0);

    scene.add(camera);
    {
        const color = 0xffffff;
        const intensity = 1;
        const light = new THREE.DirectionalLight(color, intensity);
        light.position.set(-1, 2, 4);
        camera.add(light);
    }

    // obj
    const boxWidth = 1;
    const boxHeight = 1;
    const boxDepth = 1;
    const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);

    function rand(min, max) {
        if (max === undefined) {
            max = min;
            min = 0;
        }
        return min + (max - min) * Math.random();
    }

    function randomColor() {
        return `hsl(${rand(360) | 0}, ${rand(50, 100) | 0}%, 50%)`;
    }

    const loader = new THREE.TextureLoader();
    const texture = loader.load(
        "https://threejsfundamentals.org/threejs/resources/images/frame.png"
    );

    const idToObject = {};
    const numObjects = 6;
    for (let i = 0; i < numObjects; ++i) {
        const id = i + 1;
        const material = new THREE.MeshPhongMaterial({
            color: randomColor(),
            map: texture,
            transparent: true,
            side: THREE.DoubleSide,
            alphaTest: 0.5,
        });

        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);
        idToObject[id] = cube;
        cube.position.set(0, i * 3 - 9, 0);
        cube.rotation.set(rand(Math.PI), rand(Math.PI), 0);
        cube.scale.set(1, 1, 1);

        // 표시된 material
        const pickingMaterial = new THREE.MeshPhongMaterial({
            emissive: new THREE.Color(id),
            color: new THREE.Color(0, 0, 0),
            specular: new THREE.Color(0, 0, 0),
            map: texture,
            transparent: false,
            side: THREE.DoubleSide,
            alphaTest: 0.5,
            blending: THREE.NoBlending,
        });
        const pickingCube = new THREE.Mesh(geometry, pickingMaterial);
        pickingScene.add(pickingCube);
        pickingCube.position.copy(cube.position);
        pickingCube.rotation.copy(cube.rotation);
        pickingCube.scale.copy(cube.scale);
    }

    function resizeRendererToDisplaySize(renderer) {
        const canvas = renderer.domElement;
        const width = canvas.clientWidth;
        const height = canvas.clientHeight;
        const needResize = canvas.width !== width || canvas.height !== height;
        if (needResize) {
            renderer.setSize(width, height, false);
        }
        return needResize;
    }

    class GPUPickHelper {
        constructor() {
            // create a 1x1 pixel render target
            this.pickingObjectId = -1;
            this.pickingTexture = new THREE.WebGLRenderTarget(1, 1);
            this.pixelBuffer = new Uint8Array(4);
            this.pickedObject = null;
            this.pickedObjectSavedColor = 0;
        }
        pick(cssPosition, scene, camera, time) {
            const { pickingTexture, pixelBuffer } = this;

            // restore the color if there is a picked object
            if (this.pickedObject) {
                this.pickedObject.material.emissive.setHex(
                    this.pickedObjectSavedColor
                );
                this.pickedObject = undefined;
            }

            // set the view offset to represent just a single pixel under the mouse
            const pixelRatio = renderer.getPixelRatio();
            camera.setViewOffset(
                renderer.getContext().drawingBufferWidth, // full width
                renderer.getContext().drawingBufferHeight, // full top
                (cssPosition.x * pixelRatio) | 0, // rect x
                (cssPosition.y * pixelRatio) | 0, // rect y
                1, // rect width
                1 // rect height
            );
            // render the scene
            renderer.setRenderTarget(pickingTexture);
            renderer.render(scene, camera);
            renderer.setRenderTarget(null);
            // clear the view offset so rendering returns to normal
            camera.clearViewOffset();
            //read the pixel
            renderer.readRenderTargetPixels(
                pickingTexture,
                0, // x
                0, // y
                1, // width
                1, // height
                pixelBuffer
            );

            const id =
                (pixelBuffer[0] << 16) | (pixelBuffer[1] << 8) | pixelBuffer[2];

            const intersectedObject = idToObject[id];
            if (intersectedObject) {
                picked = true;

                this.pickingObjectId = id;
                // pick the first object. It's the closest one
                this.pickedObject = intersectedObject;
                // save its color
                this.pickedObjectSavedColor = this.pickedObject.material.emissive.getHex();
                // set its emissive color to flashing red/yellow
                this.pickedObject.material.emissive.setHex(0x00ff00);
            } else {
                picked = false;
                this.pickingObjectId = -1;
                this.pickedObject = null;
            }
        }
    }

    const pickPosition = { x: 0, y: 0 };
    const pickHelper = new GPUPickHelper();
    let picked = false;
    clearPickPosition();

    function render(time) {
        time *= 0.001; // convert to seconds;

        if (resizeRendererToDisplaySize(renderer)) {
            const canvas = renderer.domElement;
            camera.aspect = canvas.clientWidth / canvas.clientHeight;
            camera.updateProjectionMatrix();
        }

        pickHelper.pick(pickPosition, pickingScene, camera, time);

        renderer.render(scene, camera);

        requestAnimationFrame(render);
    }
    requestAnimationFrame(render);

    function getCanvasRelativePosition(event) {
        const rect = canvas.getBoundingClientRect();
        return {
            x: ((event.clientX - rect.left) * canvas.width) / rect.width,
            y: ((event.clientY - rect.top) * canvas.height) / rect.height,
        };
    }

    function setPickPosition(event) {
        const pos = getCanvasRelativePosition(event);
        pickPosition.x = pos.x;
        pickPosition.y = pos.y;
    }

    function printPickPosition(event) {
        const pos = getCanvasRelativePosition(event);
        if (picked) {
            console.log(pos.x, pos.y);
            console.log(pickHelper.pickingObjectId);
            switch (pickHelper.pickingObjectId) {
                case 6:
                    window.location.href = "https://www.github.com/donghakang";
                    break;
                case 5:
                    window.location.href = "https://www.naver.com";
                    break;
                case 4:
                    window.location.href = "https://www.google.com";
                    break;
                case 3:
                    window.location.href = "https://www.instagram.com/donghakang";
                    break;
                case 2:
                    window.location.href = "https://www.youtube.com";
                    break;
                case 1:
                    window.location.href = "https://www.apple.co.kr";
                    break;
                default:
                    break;
            }
            //
        }
    }

    function clearPickPosition() {
        // unlike the mouse which always has a position
        // if the user stops touching the screen we want
        // to stop picking. For now we just pick a value
        // unlikely to pick something
        pickPosition.x = -100000;
        pickPosition.y = -100000;
    }

    window.addEventListener("mousemove", setPickPosition);
    window.addEventListener("mouseout", clearPickPosition);
    window.addEventListener("mouseleave", clearPickPosition);
    window.addEventListener("click", printPickPosition);

    window.addEventListener(
        "touchstart",
        (event) => {
            // prevent the window from scrolling
            event.preventDefault();
            setPickPosition(event.touches[0]);
        },
        { passive: false }
    );

    window.addEventListener("touchmove", (event) => {
        setPickPosition(event.touches[0]);
    });

    window.addEventListener("touchend", clearPickPosition);
}

main();
