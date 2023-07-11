import React, { useRef, useState, useEffect } from "react";
import { Html, useGLTF } from "@react-three/drei";
import HousingInterface from "./HouseInterface";
import useApp from "./stores/useApp";


export default function House(props) {
  const { nodes, materials } = useGLTF("./Housev2.glb");
  const [interfaceVisible, setInterfaceVisible] = useState(false);
  const [ idVisible, setIdVisible] = useState(false)
  const hideNumber = useApp((state) => state.hideNumber)
  const hideAdu = useApp((state) => state.hideAdu)


  const handleHouseClick = () => {
    setInterfaceVisible(!interfaceVisible) // Toggle the visibility
    // TODO: if interface is not visible hide adu ID
  };

  const makeVisible = () => {
    setIdVisible(true)
  }

  useEffect(() =>
    {
        const unsubscribeID = useApp.subscribe(
            (state) => state.numberIdentification,
            (numberIdentification) =>
            {
                console.log('atticID changes to :', numberIdentification)
                if (numberIdentification == 'display') {
                  makeVisible()
                }
                if (numberIdentification == 'hide') {
                  setIdVisible(false)
                } 
            }
        )
        // cleaning subscriptions
        return () => {
            unsubscribeID()
        }
   }, [])



  return (
    <group {...props} dispose={null} scale={0.09}>
      <mesh
        onClick={() => {handleHouseClick(), hideNumber(), hideAdu()}}
        castShadow
        receiveShadow
        geometry={nodes.house.geometry}
        material={materials["Material.002"]}
        position={[0, -4.892, 22.168]}
        rotation={[Math.PI / 2, 0, 0]}
      
      />
      {/* create seperate component for attic, to allow outline selection, split the meshes into two components */}
      <mesh
        onClick={() => {handleHouseClick(), hideNumber(), hideAdu()}}
        castShadow
        receiveShadow
        geometry={nodes.attic.geometry}
        material={materials["Material.001"]}
        position={[0.559, 9.369, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        
      > 
        {idVisible && <Html wrapperClass="idLabel">1</Html>}
      
      </mesh>
      {interfaceVisible && <HousingInterface />}
    </group>
    );
  }

useGLTF.preload("/Housev2.glb");
