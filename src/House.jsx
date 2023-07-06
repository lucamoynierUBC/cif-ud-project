import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function House(props) {
  const { nodes, materials } = useGLTF("./house.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["4149592"].geometry}
        material={materials["diffuse_0.001"]}
        scale={0.1}
        position-y={0.2}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/house.glb");
