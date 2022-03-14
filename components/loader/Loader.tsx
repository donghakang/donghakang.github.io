import { css } from "@emotion/react";
import { Physics } from "@react-three/cannon";
import { OrthographicCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import { MacbookParallax } from "../about/object";
import { Macbook, Keyboard, Headphone } from "../object";
import theme from "../../assets/theme/theme";

const Loader = () => {
  const lightRef1 = useRef();
  const lightRef2 = useRef();
  const macbookRef = useRef();
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((rotation) => (rotation += 1));
    }, 10);
    return () => clearInterval(interval);
  }, []);

  const quote = useMemo(() => {
    const loadingQuotes = [
      "creating...🎨",
      "brainstorming...⚡️",
      "thinking...🧠",
      "cooking...👨🏻‍🍳",
      "meditating...🧘🏻",
      "dreaming...🛌",
      "processing...",
      "printing...📝",
    ];
    return loadingQuotes[Math.floor(Math.random() * loadingQuotes.length)];
  }, []);

  return (
    <div
      css={css`
        position: relative;
      `}
    >
      <Canvas style={{ width: "100vw", height: "100vh" }}>
        <OrthographicCamera
          makeDefault
          position={[0, 1, 0]}
          rotation={[0, rotation / 100, 0]}
          zoom={40}
          near={-100}
          far={100}
        />
        <Physics>
          <Macbook
            ref={macbookRef}
            {...{
              position: [2, 2, 2],
              rotation: [0.4, rotation / 100, 0.4],
              castShadow: true,
              color: theme.colors.blue_1,
            }}
          />
          <Keyboard
            ref={macbookRef}
            {...{
              position: [-2, 0, 0],
              rotation: [rotation / 100, 0.3, 0],
              castShadow: true,
              color: theme.colors.main_blue,
            }}
          />
          <Headphone
            ref={macbookRef}
            {...{
              position: [2, 0, -1],
              rotation: [rotation / 100, 0.3, 0.9],
              castShadow: true,
              color: theme.colors.alternate_blue_1,
            }}
          />
        </Physics>
        <group>
          <ambientLight intensity={0.4} ref={lightRef1} />
          <directionalLight
            castShadow
            ref={lightRef2}
            position={[2.5, 8, 5]}
            intensity={1.5}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-camera-far={50}
            shadow-camera-left={-10}
            shadow-camera-right={10}
            shadow-camera-top={10}
            shadow-camera-bottom={-10}
          />
        </group>
      </Canvas>
      <h1
        css={css`
          position: absolute;
          top: 50%;
          left: 50%;
          font-size: 2rem;
          color: ${theme.colors.main_orange};
          transform: translate(-50%, -50%);
        `}
      >
        {quote}
      </h1>
    </div>
  );
};

export default Loader;
