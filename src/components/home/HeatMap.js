import * as THREE from "three";
import React, { useRef, Suspense } from "react";

import { shaderMaterial } from "@react-three/drei";
import { Canvas, useFrame, extend } from "@react-three/fiber";
import glsl from "babel-plugin-glsl/macro";

const WaveShaderMaterial = shaderMaterial(
  // Uniform
  {
    uTime: 0,
    uTexture: new THREE.Texture(),
  },
  // Vertex Shader
  glsl`
    precision mediump float;    
    varying vec2 vUv;
    uniform float uTime;

    void main() {
      vUv = uv;
  
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  // Fragment shader
  glsl`
  precision mediump float;   
  uniform float uTime;
  varying vec2 vUv;
  vec3 colors [5];
  float points [5];
  
  void initia(){
      colors[0]=vec3(0.,0.,0.6);
      colors[1]=vec3(0.,1.,1.);
      colors[2]=vec3(0.0,1.0,0.);
      colors[3]=vec3(1.0,1.0,0.);
      colors[4]=vec3(1.0,0.0,0.);
      points[0]=0.;
      points[1]=0.15;
      points[2]=0.5;
      points[3]=0.65;
      points[4]=1.0;
  }
  vec3 gradian(vec3 c1,vec3 c2,float a){
      return vec3(c1.x+a*(c2.x-c1.x),
                  c1.y+a*(c2.y-c1.y),
                  c1.z+a*(c2.z-c1.z));
  }
  
  vec3 heat4(float weight){
      if(weight<=points[0]){
          return colors[0];
      }
      if(weight>=points[4]){
          return colors[4];
      }
      for(int i=1;i<5;i++){
          if(weight<points[i]){
             float a=(weight-points[i-1])/(points[i]-points[i-1]);
              return gradian(colors[i-1],colors[i],a);
          }
      }
  }
  
  
  float d(vec2 a, vec2 b) {
     return  pow(max(0.0, 1.0 - distance(a, b) / (0.6)), 2.0);
  }
  
  void main(  ) {
    initia();
      
      float totalWeight = 0.0;
      for (float i = 0.0; i < 112.0; ++i) {
        totalWeight += 0.5*d(vUv, vec2(
              sin(1.0*uTime * 0.02 + float(i))*2. + 2.*sin(i * i), 
              cos(1.0*uTime * 0.03 + float(i *1.5))*2.
          ));
      }
      
    
	gl_FragColor = vec4(heat4(totalWeight), 1.0);
}
  `
);

extend({ WaveShaderMaterial });

const Wave = () => {
  const ref = useRef();
  useFrame(({ clock }) => {
    ref.current.uTime = clock.getElapsedTime();
  });

  return (
    <mesh>
      <planeBufferGeometry args={[16, 16, 16, 16]} />
      <waveShaderMaterial ref={ref} />
    </mesh>
  );
};

const HeatMap = (props) => {
  const { style } = props;
  return (
    <Canvas style={style}>
      <pointLight position={[10, 10, 10]} />
      <Suspense fallback={null}>
        <Wave />
      </Suspense>
    </Canvas>
  );
};

export default HeatMap;
