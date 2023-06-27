import './App.css';
import { Canvas } from '@react-three/fiber'
import ColliderBox from './components/ColliderBox';
import { Physics } from "@react-three/cannon";
import Ground from './components/Ground'
import {  Sky } from '@react-three/drei'
import { Suspense, useState, useMemo, useRef, useEffect } from "react";
import * as THREE from 'three';
import { CameraControls } from '@react-three/drei';
import Basic from './components/Basic'
import {Stats} from '@react-three/drei'

const delay = ms => new Promise(res => setTimeout(res, ms));


export const App = () => {
const cameraControlRef = useRef()
const [action, setAction] = useState('Idle.001')

  return (
  <>
      <Canvas shadows camera={{ position: [-0.7, 3, 2],fov:70 }}>
        <CameraControls ref={cameraControlRef} setTarget={[-.07,2,1]}/>

        <Sky sunPosition={[100, 20, 100]} />
        <hemisphereLight color="white" groundColor="blue" intensity={0.75} />
        <spotLight position={[50, 50, 10]} angle={0.15} penumbra={1} />
        <Physics>
          <color attach="background" args={["black"]} />
          <pointLight position={[-20, 10, 25]} />
          <ColliderBox position={[0, .5, 1]} scale={[0.33, 1, 0.33]} />
          <Ground />
          <Suspense fallback={null}>
            <Basic action={action} position={[0,0,1]}/>
          </Suspense>
        </Physics>
        <Stats style={{ width: '160px', height: '96px', position: 'absolute', bottom: '0' }}/>

      </Canvas>
      <div style={{ position: 'absolute', bottom: '0', right:'0'}}>
        <button
        type="button"
        onClick={() => {
          setAction('Idle.001')
        }}
      >idle</button>
      <button
        type="button"
        onClick={() => {
          setAction('Left90')
        }}
      >Left 90</button>
      <button
        type="button"
        onClick={() => {
          setAction('Right90')
        }}
      >Right 90</button>
      <button
        type="button"
        onClick={() => {
          setAction('TPose')
        }}
      >Tpose</button>
      <button
      type="button"
      onClick={() => {
        setAction('jump')
      }}
    >jump</button>
    <button
        type="button"
        onClick={() => {
          setAction('walk')
        }}
      >walk</button>
      </div>
      </>
      
      );
}

