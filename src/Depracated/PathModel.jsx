import React, { useRef, useEffect, useState } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import * as THREE from "three";
import useFlow from "../stores/useFlow";

export default function PathModel(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/walkway.glb");
  const { actions, names } = useAnimations(animations, group);
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const unsubscribeAnimate = useFlow.subscribe(
        (state) => state.phase,
        (phase) => {
            if (phase === 'interaction11'){
                setVisible(true)
            }
        }
    )
    if (visible){
        actions[names[0]].setLoop(THREE.LoopOnce).play()
        actions[names[0]].clampWhenFinished = true
        actions[names[1]].setLoop(THREE.LoopOnce).play()
        actions[names[1]].clampWhenFinished = true
        actions[names[2]].reset().setLoop(THREE.LoopOnce).play()
        actions[names[2]].clampWhenFinished = true
        actions[names[3]].reset().setLoop(THREE.LoopOnce).play()
        actions[names[3]].clampWhenFinished = true
        actions[names[4]].reset().setLoop(THREE.LoopOnce).play()
        actions[names[4]].clampWhenFinished = true
        actions[names[5]].reset().setLoop(THREE.LoopOnce).play()
        actions[names[5]].clampWhenFinished = true
        actions[names[6]].reset().setLoop(THREE.LoopOnce).play()
        actions[names[6]].clampWhenFinished = true
        actions[names[7]].reset().setLoop(THREE.LoopOnce).play()
        actions[names[7]].clampWhenFinished = true

    }
    return () => {
        unsubscribeAnimate()
    }
    
  }, [visible, actions, names])

  return visible && (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene" position={[-12, 0, 1.7]} scale={0.2} rotation={[0, 3*(Math.PI/2) , 0]}>
        <mesh
          name="Cube"
          castShadow
          receiveShadow
          geometry={nodes.Cube.geometry}
          material={materials.Material}
          position={[0, 5.795, 0]}
          scale={[1.016, 0.062, 1.016]}
        />
        <mesh
          name="Cube001"
          castShadow
          receiveShadow
          geometry={nodes.Cube001.geometry}
          material={materials["Material.001"]}
          position={[0, 5.795, -3.087]}
          scale={[1.016, 0.062, 1.016]}
        />
        <mesh
          name="Cube002"
          castShadow
          receiveShadow
          geometry={nodes.Cube002.geometry}
          material={materials["Material.002"]}
          position={[0, 5.795, -9.162]}
          scale={[1.016, 0.062, 1.016]}
        />
        <mesh
          name="Cube003"
          castShadow
          receiveShadow
          geometry={nodes.Cube003.geometry}
          material={materials["Material.003"]}
          position={[0, 5.795, -6.076]}
          scale={[1.016, 0.062, 1.016]}
        />
        <mesh
          name="Cube004"
          castShadow
          receiveShadow
          geometry={nodes.Cube004.geometry}
          material={materials["Material.004"]}
          position={[0, 5.795, -18.171]}
          scale={[1.016, 0.062, 1.016]}
        />
        <mesh
          name="Cube005"
          castShadow
          receiveShadow
          geometry={nodes.Cube005.geometry}
          material={materials["Material.005"]}
          position={[0, 5.795, -21.257]}
          scale={[1.016, 0.062, 1.016]}
        />
        <mesh
          name="Cube006"
          castShadow
          receiveShadow
          geometry={nodes.Cube006.geometry}
          material={materials["Material.006"]}
          position={[0, 5.795, -15.182]}
          scale={[1.016, 0.062, 1.016]}
        />
        <mesh
          name="Cube007"
          castShadow
          receiveShadow
          geometry={nodes.Cube007.geometry}
          material={materials["Material.007"]}
          position={[0, 5.795, -12.095]}
          scale={[1.016, 0.062, 1.016]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/walkway.glb");

