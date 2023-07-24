/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function Person(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/Person.glb");
  const { actions, names } = useAnimations(animations, group);
  
  useEffect(() => {
    actions[names[0]].reset().fadeIn(0.5).play()
  })
  var up = true
  useFrame((state, delta) =>{
    if (up){
      group.current.position.z += delta
      if (group.current.position.z >= 5){
        up = false
      }
    } else {
      group.current.rotation.y = Math.PI
      group.current.position.z -= delta
      if (group.current.position.z <= -1){
        group.current.rotation.y = Math.PI * 2
        up = true
      }
    }
   
    



  })

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <skinnedMesh
            name="Cube001"
            geometry={nodes.Cube001.geometry}
            material={materials["Material.001"]}
            skeleton={nodes.Cube001.skeleton}
            material-color={'black'}
          />
          <primitive object={nodes.mixamorigHips} />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/Person.glb");



