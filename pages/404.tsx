import { css, useTheme } from "@emotion/react"
import { Physics } from "@react-three/cannon"
import { OrthographicCamera } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import Link from "next/link"
import { useRef } from "react"
import { HeadphoneComponent } from "../components/environment"
import { Plane } from "../components/object"

const ErrorPage = () => {
  const lightRef1 = useRef()
  const lightRef2 = useRef()
  const theme = useTheme()

  return (
    <div
      css={css`
        position: relative;
      `}
    >
      <Canvas style={{ width: "100vw", height: "100vh" }}>
        <OrthographicCamera
          makeDefault
          position={[-1, 1, 1]}
          rotation={[-Math.PI / 4.0, -Math.PI / 8.0, -Math.PI / 8.0]}
          zoom={40}
          near={-100}
          far={100}
        />
        <Physics gravity={[0, -10, 0]}>
          <Plane
            position={[0, -3, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            color={"#ffffff"}
          />
          <Plane
            position={[0, -3, 10]}
            rotation={[0, Math.PI, 0]}
            color={"#ffffff"}
          />
          <Plane
            position={[0, -3, -10]}
            rotation={[0, 0, 0]}
            color={"#ffffff"}
          />
          <Plane
            position={[-10, -3, 0]}
            rotation={[0, Math.PI / 2.0, 0]}
            color={"#ffffff"}
          />
          <Plane
            position={[10, -3, 0]}
            rotation={[0, -Math.PI / 2.0, 0]}
            color={"#ffffff"}
          />
          <HeadphoneComponent
            rotation={[Math.random() * 3, 1.5, Math.random() * 3]}
            position={[0, 5, 0]}
            color={"#67a6ff"}
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
      <Link href="/" passHref>
        <h1
          css={css`
            position: absolute;
            top: 50%;
            left: 50%;
            font-size: 2rem;
            color: ${theme.colors.main_orange};
            transform: translate(-50%, -50%);

            &:hover {
              animation: all 0.5s;
              color: orange;
              transform: translate(-50%, -50%) scale(1, 0.8);
            }
          `}
        >
          Redirect...
        </h1>
      </Link>
    </div>
  )
}

export default ErrorPage
