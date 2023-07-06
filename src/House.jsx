import React, { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import HousingInterface from "./HouseInterface";

export default function House(props) {
  const { nodes, materials } = useGLTF("./house.glb");
  const [interfaceVisible, setInterfaceVisible] = useState(false);

  const handleHouseClick = () => {
    setInterfaceVisible(!interfaceVisible) // Toggle the visibility
  };

  return (
    <group {...props} dispose={null}>
      <mesh
        onClick={handleHouseClick}
        castShadow
        receiveShadow
        geometry={nodes["4149592"].geometry}
        material={materials["diffuse_0.001"]}
        scale={0.1}
        position-y={0.2}
        rotation={[Math.PI / 2, 0, 0]}
      > 
        {interfaceVisible && <HousingInterface />}
      
      </mesh>
    </group>
  );
}

useGLTF.preload("/house.glb");
