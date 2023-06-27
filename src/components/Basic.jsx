/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.4 basic.glb
*/

import React, { useRef, useEffect} from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

import * as THREE from 'three'
const delay = ms => new Promise(res => setTimeout(res, ms));

export default function Model({action}) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/basic.glb')
  let mixer = new THREE.AnimationMixer(nodes);
  let previousAction = usePrevious(action)
  const { actions } = useAnimations(animations, group)
  const arm = useRef()


  useEffect( () => {
    if (previousAction){
      actions[previousAction].fadeOut(.2)
     actions[previousAction].stop()

    }

    console.log(actions)
    actions[action].play()
    actions[action].fadeIn(.2)



  },[action, actions])



// TODO: Actually Implement movement
  async function rotateGrp(action) {
    delay(1000)
    if (action === 'Left90')
    arm.current.rotation.z-=1.5;
    if (action === 'Right90')
    arm.current.rotation.z+=1.5;
  }


  return (
    <group ref={group} dispose={null}>
      <group name="Scene">
        <group name="Armature" ref={arm} rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <primitive object={nodes.mixamorigHips} />
          <skinnedMesh name="Alpha_Joints" geometry={nodes.Alpha_Joints.geometry} material={materials.Alpha_Joints_MAT} skeleton={nodes.Alpha_Joints.skeleton} />
          <skinnedMesh name="Alpha_Surface" geometry={nodes.Alpha_Surface.geometry} material={materials.Alpha_Body_MAT} skeleton={nodes.Alpha_Surface.skeleton} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/basic.glb')


function usePrevious(value){
  const ref = useRef()

  useEffect(()=>{
    ref.current=value;
  },[value])

  return ref.current
}