
import { useFrame } from '@react-three/fiber'
import { useRef, useState } from 'react'
import {  meshBasicMaterial, Mesh } from 'three'

export default function PbBox(props) {
  const ref = useRef()

  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)

  useFrame((state, delta) => {
    
    if(!ref.current)return;

    
    //ref.current.rotation.x += delta;
  })

  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}>
      <boxGeometry args={[1, 1, 1]}/>
      <meshBasicMaterial color={hovered? 'hotpink' : 'blue'}/>


    </mesh>
  )
}

