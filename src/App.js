import './App.css';
import { Canvas } from '@react-three/fiber'
import ColliderBox from './components/ColliderBox';
import FloorPlane from './components/FloorPlane'
import BCam from './components/Bcam'
import { Physics } from "@react-three/cannon";
import Ground from './components/Ground'
import {OrbitControls, PointerLockControls, Sky} from '@react-three/drei'
import {Bike} from './components/Bike'
import { Suspense } from "react";
import Wakeup  from './components/Wakeup'
import Texting from './components/Texting'
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber'

export function ZoomOut() {
  const vec = new THREE.Vector3(10, 5, 0)
   return useFrame(({ camera }) => {camera.position.lerp(vec, .001)},[])

}

export  function ZoomIn() {
  const vec = new THREE.Vector3(0, 2, 4)

  return useFrame(({camera})=>{ camera.position.lerp(vec, .01)})
}


export const App = () => {
  

  return (

    <Canvas shadows  camera={{ position: [-0.7, 3, 2 ]}}>
      <OrbitControls/>
      <Sky sunPosition={[100,20,100]}/>
       <hemisphereLight color="white" groundColor="blue" intensity={0.75} />
       <spotLight position={[50, 50, 10]} angle={0.15} penumbra={1} />
      <Physics>
      {//<BCam/>}
}

        <color attach="background" args={["white"]} />
      <pointLight position={[-20, 10, 25]} />
      <ColliderBox position={[0, .5, 1]} scale={[0.33, 1, 0.33]} />
      <Ground/>
      <Suspense fallback = {null}>
        <ZoomOut/>
        <Wakeup  position={[0, 0, 1]} scale={[0.65, .65, 0.65]} rotation-y={Math.PI *15} />
      </Suspense>
      <Suspense fallback = {null}>
        <ZoomIn/>
          <Texting/>
      </Suspense>
      </Physics>

    </Canvas>
  );
}

//      <FloorPlane position={[-2.0, .7, -1]}/>
