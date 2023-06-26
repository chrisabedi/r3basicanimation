import './App.css';
import { Canvas } from '@react-three/fiber'
import ColliderBox from './components/ColliderBox';
import { Physics } from "@react-three/cannon";
import Ground from './components/Ground'
import { OrbitControls,PointerLockControls, Sky } from '@react-three/drei'
import { Bike } from './components/Bike'
import { Suspense, useState, useMemo, useRef, useEffect } from "react";
import Wakeup from './components/Wakeup'
import Texting from './components/Texting'
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber'
import { CameraControls } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import Basic from './components/Basic'

function CameraHelper(){
  const camera = new THREE.PerspectiveCamera(60,1,1,3);
  return <group position={[0,1,1]}>
    <cameraHelper args={[camera]}/>
  </group>
}


export const App = () => {
const cameraControlRef = useRef()

const [action, setAction] = useState("Idle.001")
  const [zoom, setZoom] = useState(false)

  return (
  <>
      <Canvas shadows camera={{ position: [-0.7, 3, 2],fov:70 }}>
        <CameraControls ref={cameraControlRef}/>

        <Sky sunPosition={[100, 20, 100]} />
        <hemisphereLight color="white" groundColor="blue" intensity={0.75} />
        <spotLight position={[50, 50, 10]} angle={0.15} penumbra={1} />
        <Physics>
          <color attach="background" args={["white"]} />
          <pointLight position={[-20, 10, 25]} />
          <ColliderBox position={[0, .5, 1]} scale={[0.33, 1, 0.33]} />
          <Ground />
          <Suspense fallback={null}>
            <Basic action={action} position={[0,0,1]}/>
          </Suspense>
          <CameraHelper/>

        </Physics>

      </Canvas>
      <div style={{ position: 'absolute', top: '0' }}>
      <button
        type="button"
        onClick={() => {
          cameraControlRef.current?.rotate(Math.PI/4, 0, true);
        }}
      >rotate</button>
      	<button
					type="button"
					onClick={() => {
						cameraControlRef.current?.reset(true);
					}}
				>
					reset
				</button>
        <button
        type="button"
        onClick={()=> {
          cameraControlRef.current?.position()
        }}
        >zoomin</button>
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

//      <FloorPlane position={[-2.0, .7, -1]}/>
