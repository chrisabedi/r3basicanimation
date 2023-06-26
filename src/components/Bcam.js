

import { useControls } from './useControls'
import { Sky } from '@react-three/drei';
import { useSphere } from '@react-three/cannon';
import { useFrame, useThree } from '@react-three/fiber';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

// export default function Bcam() {
//   const SPEED = 6;
//   const ref = useRef()
//   const {camera} = useThree()


//   const [mesh, api] = useBox(() => ({
//     mass: 10,
//     position: [0, 1, 0],
//     type: 'Dynamic',
// }))

// const velocity = useRef([0, 0, 0]);
// const { moveForward, moveBackward, moveLeft, moveRight } =
// useControls(api);

//   useEffect(() =>{
//     api.velocity.subscribe((v) => (velocity.current = v));
//   }, [api.velocity]);
  
//   useFrame(() => {
//     camera.position.copy(ref.current.position);
//     const direction = new Vector3();

//     const frontVector = new Vector3(
//         0,
//         0,
//         Number(moveBackward) - Number(moveForward)
//     );
//     const sideVector = new Vector3(
//         Number(moveLeft) - Number(moveRight),
//         0,
//         0
//     );
//     direction
//         .subVectors(frontVector, sideVector)
//         .normalize()
//         .multiplyScalar(SPEED)
//         .applyEuler(camera.rotation);

//     api.velocity.set(direction.x, velocity.current[1], direction.z);
//   });

//   return (
//   <mesh ref ={ref}>

//   </mesh>
//   )
// }







const BaseCharacter = (props) => {
  const direction = new THREE.Vector3();
  const frontVector = new THREE.Vector3();
  const sideVector = new THREE.Vector3();
  const speed = new THREE.Vector3();
  const SPEED = 5;

  const { camera } = useThree();

  const [ref, api] = useSphere((index) => ({
    mass: 1,
    type: 'Dynamic',
    direction:-9,
    position: [0, 2, 9],
    ...props,
  }));

  const { forward, backward, left, right, jump } = useControls();
  const velocity = useRef([0, 0, 0]);
  useEffect(() => api.velocity.subscribe((v) => (velocity.current = v)), []);

  useFrame((state) => {
    ref.current.getWorldPosition(camera.position);
    frontVector.set(0, 0, Number(backward) - Number(forward));
    sideVector.set(Number(left) - Number(right), 0, 0);
    direction.subVectors(frontVector, sideVector).normalize().multiplyScalar(SPEED).applyEuler(camera.rotation);
    speed.fromArray(velocity.current);

    api.velocity.set(direction.x, velocity.current[1], direction.z);
    if (jump && Math.abs(velocity.current[1].toFixed(2)) < 0.05) api.velocity.set(velocity.current[0], 5, velocity.current[2]);
  });

  return (
    <group>
      <mesh castShadow position={props.position} ref={ref}>
        <sphereGeometry args={props.args} />
        <meshStandardMaterial color="#FFFF00" />
      </mesh>
    </group>
  );
};

export default BaseCharacter;