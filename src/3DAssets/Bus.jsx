import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

// Component for the imported blue bus
export default function Bus(props) {
  const { nodes, materials } = useGLTF("/busv2.glb");
  const group = useRef();
  
  // Animate the Bus z position, reset its z position after a certain threshold
  useFrame((state, delta) =>{
    group.current.position.z += delta*3
    if (group.current.position.z > 100){
      group.current.position.z = -50
    }

  })

  return (
    <group ref={group} {...props} dispose={null} scale={0.5} position={[25, -.2, -5]}>
      <group
        position={[-2.005, -0.612, 0.865]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials["Material.001"]}
          
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials["Material.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_2.geometry}
          material={materials["Material.003"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/busv2.glb");