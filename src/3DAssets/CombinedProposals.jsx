import React, { useRef } from "react";
import { Edges, Html, useGLTF } from "@react-three/drei";

export function CombindedProposals(props) {
  const { nodes, materials } = useGLTF("/CombinedProposals.glb");
  return (
    <group {...props} position={[-45, -.5, 55.5]} rotation={[0, Math.PI/2, 0]} scale={0.39} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.School.geometry}
        material={materials["Material.002"]}
        material-color={'#ae561f'}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.254}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.residential1.geometry}
        material={materials["Material.001"]}
        material-color={'#ae561f'}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.254}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.residential2.geometry}
        material={materials["Material.003"]}
        material-color={'#ae561f'}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.254}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.church.geometry}
        material={materials["Material.010"]}
        material-color={'#ae561f'}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.254}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.background1.geometry}
        material={materials["Material.009"]}
        material-color={'grey'}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.254}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.background2.geometry}
        material={materials["Material.008"]}
        material-color={'grey'}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.254}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.background3.geometry}
        material={materials["Material.007"]}
        material-color={'grey'}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.254}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.background5.geometry}
        material={materials["Material.005"]}
        material-color={'grey'}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.254}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.background4.geometry}
        material={materials["Material.006"]}
        material-color={'grey'}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.254}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.adminbuilding.geometry}
        material={materials["Material.004"]}
        material-color={'#ae561f'}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.254}
      />
      <Html>
      HEllo
      </Html>
    </group>
  );
}

useGLTF.preload("/CombinedProposals.glb");

