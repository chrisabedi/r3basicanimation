
import { useFrame } from '@react-three/fiber'
import { useRef, useState } from 'react'
import {  meshBasicMaterial, Mesh } from 'three'
import {useBox} from '@react-three/cannon'

export default function Ball ({position, scale}) {



  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)

 
  useBSphere(()=> ({
    args:[0.5],
    position,
    type:'Kinematic'
  }));

  return (
    <mesh ref={ref}>
      <sphereBufferGeometry args={[0.5, 64, 64]} />
      <meshNormalMaterial />
    </mesh>
  )
}

