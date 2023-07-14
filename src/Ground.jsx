
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Ground(props) {
    const { nodes, materials } = useGLTF("/blockfinalcolor.glb");
    return (
        <group {...props} dispose={null} scale={0.3} position={[1.5, -1, 0]} rotation={[0, Math.PI/2, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.plot_1.geometry}
            material={materials["Material.001"]}
            position={[-30.267, -19.75, -4.084]}
            scale={0.305}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.plot_10.geometry}
            material={materials.Material}
            position={[-30.267, -19.75, -4.084]}
            scale={0.305}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.plot_11.geometry}
            material={materials["Material.001"]}
            position={[-30.267, -19.75, -4.084]}
            scale={0.305}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.plot_12.geometry}
            material={materials.Material}
            position={[-30.267, -19.75, -4.084]}
            scale={0.305}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.plot_13.geometry}
            material={materials["Material.001"]}
            position={[-30.267, -19.75, -4.084]}
            scale={0.305}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.plot_14.geometry}
            material={materials.Material}
            position={[-30.267, -19.75, -4.084]}
            scale={0.305}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.plot_15.geometry}
            material={materials["Material.001"]}
            position={[-30.267, -19.75, -4.084]}
            scale={0.305}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.plot_16.geometry}
            material={materials.Material}
            position={[-30.267, -19.75, -4.084]}
            scale={0.305}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.plot_17.geometry}
            material={materials["Material.001"]}
            position={[-30.267, -19.75, -4.084]}
            scale={0.305}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.plot_18.geometry}
            material={materials.Material}
            position={[-30.267, -19.75, -4.084]}
            scale={0.305}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.plot_19.geometry}
            material={materials["Material.001"]}
            position={[-30.267, -19.75, -4.084]}
            scale={0.305}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.plot_2.geometry}
            material={materials.Material}
            position={[-30.267, -19.75, -4.084]}
            scale={0.305}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.plot_20.geometry}
            material={materials.Material}
            position={[-30.267, -19.75, -4.084]}
            scale={0.305}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.plot_21.geometry}
            material={materials["Material.001"]}
            position={[-30.267, -19.75, -4.084]}
            scale={0.305}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.plot_23.geometry}
            material={materials["Material.001"]}
            position={[-30.267, -19.75, -4.084]}
            scale={0.305}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.plot_24.geometry}
            material={materials.Material}
            position={[-30.267, -19.75, -4.084]}
            scale={0.305}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.plot_25.geometry}
            material={materials["Material.001"]}
            position={[-30.267, -19.75, -4.084]}
            scale={0.305}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.plot_26.geometry}
            material={materials.Material}
            position={[-30.267, -19.75, -4.084]}
            scale={0.305}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.plot_27.geometry}
            material={materials["Material.001"]}
            position={[-30.267, -19.75, -4.084]}
            scale={0.305}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.plot_28.geometry}
            material={materials.Material}
            position={[-30.267, -19.75, -4.084]}
            scale={0.305}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.plot_29.geometry}
            material={materials["Material.001"]}
            position={[-30.267, -19.75, -4.084]}
            scale={0.305}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.plot_3.geometry}
            material={materials["Material.001"]}
            position={[-30.267, -19.75, -4.084]}
            scale={0.305}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.plot_30.geometry}
            material={materials.Material}
            position={[-30.267, -19.75, -4.084]}
            scale={0.305}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.plot_4.geometry}
            material={materials.Material}
            position={[-30.267, -19.75, -4.084]}
            scale={0.305}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.plot_5.geometry}
            material={materials["Material.001"]}
            position={[-30.267, -19.75, -4.084]}
            scale={0.305}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.plot_6.geometry}
            material={materials.Material}
            position={[-30.267, -19.75, -4.084]}
            scale={0.305}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.plot_7.geometry}
            material={materials["Material.001"]}
            position={[-30.267, -19.75, -4.084]}
            scale={0.305}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.plot_8.geometry}
            material={materials.Material}
            position={[-30.267, -19.75, -4.084]}
            scale={0.305}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.plot_9.geometry}
            material={materials["Material.001"]}
            position={[-30.267, -19.75, -4.084]}
            scale={0.305}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.sidewalk.geometry}
            material={materials.sidewalk}
            position={[-30.267, -19.75, -4.084]}
            scale={0.305}
          />
        </group>
      );
}

useGLTF.preload("/blockfinalcolor.glb");
