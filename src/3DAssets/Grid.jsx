import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
// imported model for the city blocks/floor
export function Grid(props) {
  const { nodes, materials } = useGLTF("/grid.glb");
  return (
    <group  {...props} position={[-120, -1, 13]} scale={3} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.grid1.geometry}
        material={materials.Clay}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.038}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.grid2.geometry}
        material={materials["Clay.002"]}
        position={[37.854, 0, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.038}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.grid3.geometry}
        material={materials["Clay.003"]}
        position={[75.688, 0, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.038}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.grid4.geometry}
        material={materials["Clay.004"]}
        position={[113.484, 0, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.038}
      />
    </group>
  );
}

useGLTF.preload("/grid.glb");