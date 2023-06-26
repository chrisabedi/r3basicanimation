import * as THREE from 'three';
import { useFrame } from '@react-three/fiber'

export default function ZoomIn() {
  const vec = new THREE.Vector3(0, 15, 30)
  return useFrame(({ camera }) => camera.position.lerp(vec, 0.1))
}
