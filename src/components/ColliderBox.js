
import { useFrame } from '@react-three/fiber'
import { useRef, useState } from 'react'
import {  meshBasicMaterial, Mesh } from 'three'
import {useBox} from '@react-three/cannon'
export default function ColliderBox ({position, scale}) {


  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)

 
  useBox(()=> ({
    args:scale,
    position,
    type:'Static'
  }));

  return (
    <mesh position={position}
    onClick={(event) => click(!clicked)}
    onPointerOver={(event) => hover(true)}
    onPointerOut={(event) => hover(false)}>
      <boxGeometry args={scale}/>
      <meshBasicMaterial color={hovered? 'hotpink' : 'blue'} transparent={true} opacity={0.25}/>
      </mesh>
        )
}




//Old way, no collider
// const ref = useRef()

// const [hovered, hover] = useState(false)
// const [clicked, click] = useState(false)

// useFrame((state, delta) => {
  
//   if(!ref.current)return;

  
//   //ref.current.rotation.x += delta;
// })

// return (
//   <mesh
//     {...props}
//     ref={ref}
//     scale={clicked ? 1.5 : 1}
//     onClick={(event) => click(!clicked)}
//     onPointerOver={(event) => hover(true)}
//     onPointerOut={(event) => hover(false)}>
//     <boxGeometry args={[1, 1, 1]}/>
//     <meshBasicMaterial color={hovered? 'hotpink' : 'blue'}/>


//   </mesh>
// )