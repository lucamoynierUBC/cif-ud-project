import React, { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import HousingInterface from "./HouseInterface";

export default function House(props) {
  const { nodes, materials } = useGLTF("./Housev2.glb");
  const [interfaceVisible, setInterfaceVisible] = useState(false);

  const handleHouseClick = () => {
    setInterfaceVisible(!interfaceVisible) // Toggle the visibility
  };

  return (
    <group {...props} dispose={null} scale={0.1}>
      <mesh
        onClick={handleHouseClick}
        castShadow
        receiveShadow
        geometry={nodes.house.geometry}
        material={materials["Material.002"]}
        position={[0, -4.892, 22.168]}
        rotation={[Math.PI / 2, 0, 0]}
      
      />
      <mesh
        onClick={handleHouseClick}
        castShadow
        receiveShadow
        geometry={nodes.attic.geometry}
        material={materials["Material.001"]}
        position={[0.559, 9.369, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        
      />
      {interfaceVisible && <HousingInterface />}
    </group>
    );
  }

useGLTF.preload("/Housev2.glb");
