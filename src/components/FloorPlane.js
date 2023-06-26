
import { useFrame } from '@react-three/fiber'
import { useRef, useState } from 'react'
import {  meshBasicMaterial, Mesh, planeGeomerty, shaderMaterial } from 'three'

const vertexShader = `
void main() {
  vec4 modelPosition = modelMatrix * vec4(position, 1.0);
  modelPosition.y += sin(modelPosition.x * 4.0) * 0.2;

  vec4 viewPosition = viewMatrix * modelPosition;
  vec4 projectedPosition = projectionMatrix * viewPosition;

  gl_Position = projectedPosition;
}
`



export default function FloorPlane(props) {
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
      rotation={[-Math.PI / 2, 0, 0]} 
      scale={1.5}>
      <planeGeometry args={[1,1,32,32]} wireframe/>
      <shaderMaterial
      vertexShader={vertexShader}
      wireframe/>


    </mesh>
  )
}

