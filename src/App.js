import logo from './logo.svg';
import './App.css';
import { Canvas, useFrame, Vector3 } from '@react-three/fiber'
import { useRef, useState, useEffect } from 'react'
import PbBox from './components/Boxa';
import FloorPlane from './components/FloorPlane'
import { OrbitControls, KeyboardControls } from '@react-three/drei'
import { gridHelper } from '@react-three/fiber'
import { useControls } from './components/useControls';

export const App = () => {
  
    useControls()

  return (

    <Canvas camera={{fov:45}}>
        <color attach="background" args={["#06092c"]} />
      <pointLight position={[-20, 10, 25]} />
      <PbBox position={[1.6, .8, -1]} />
      <FloorPlane position={[-2.0, .7, -1]}/>
      <gridHelper
              args={[100, 20, "#4D089A", "#4D089A"]}

      />

      <OrbitControls />
    </Canvas>
  );
}

