import React, { useRef, useState, useEffect } from "react";
import { Html, useGLTF } from "@react-three/drei";
import HousingInterface from "./HouseInterface";
import useApp from "./stores/useApp";
import { Select } from "@react-three/postprocessing";
import useInterface from "./stores/useInterface";


export default function House(props) {
  const { nodes, materials } = useGLTF("./housev3.glb");
  const [interfaceVisible, setInterfaceVisible] = useState(false);
  const [ idVisible, setIdVisible] = useState(false)
  const hideNumber = useApp((state) => state.hideNumber)
  const hideAdu = useApp((state) => state.hideAdu)
  const resetClick = useInterface((state) => state.resetClick)
  
  //outline effect 
  const atticRef = useRef()
  const [atticHovered, atticHover] = useState(null)
  
  console.log(atticHovered)
  


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

        const unsubscribeHighlight = useInterface.subscribe(
          (state) => state.selection,
          (selection) => {
            if (selection === 1){
              atticHover(true)
            } else {
              atticHover(false)
            }
          }
        )
        // cleaning subscriptions
        return () => {
            unsubscribeID()
            unsubscribeHighlight()
        }
   }, [])



  return (
    // <group {...props} dispose={null} scale={0.09} position={[0, .25, 0]} onPointerOver={(event) => event.stopPropagation()}>
     
    //   <mesh
    //     onClick={() => {handleHouseClick(), hideNumber(), hideAdu(), resetClick()}}
    //     castShadow
    //     receiveShadow
    //     geometry={nodes.house.geometry}
    //     material={materials["Material.002"]}
    //     position={[0, -4.892, 22.168]}
    //     rotation={[Math.PI / 2, 0, 0]}
      
    //   />
    
      
    //   {/* create seperate component for attic, to allow outline selection, split the meshes into two components */}
    //   <Select enabled={atticHovered}>
    //     <mesh
    //       ref={atticRef}
    //       onPointerOver={() => atticHover(true)}
    //       onPointerOut={() => atticHover(false)}
    //       onClick={() => {handleHouseClick(), hideNumber(), hideAdu(), resetClick()}}
    //       castShadow
    //       receiveShadow
    //       geometry={nodes.attic.geometry}
    //       material={materials["Material.001"]}
    //       position={[0.559, 9.369, 0]}
    //       rotation={[Math.PI / 2, 0, 0]}> 
    //         {idVisible && <Html wrapperClass="idLabel">1</Html>}
    
    //     </mesh>

    //   </Select>
      
    //   {interfaceVisible && <HousingInterface />}
    // </group>
    // );

    <group {...props} dispose={null} position={[0, 0, 0]} scale={0.4}>
      <group position={[0.042, -23.125, 0]} scale={0.305} onPointerOver={(event) => event.stopPropagation()}>
        <mesh
          onClick={() => {handleHouseClick(), hideNumber(), hideAdu(), resetClick()}}
          castShadow
          receiveShadow
          geometry={nodes.main_house.geometry}
          material={materials.Material_2}
        />
        <mesh
          onClick={() => {handleHouseClick(), hideNumber(), hideAdu(), resetClick()}}
          castShadow
          receiveShadow
          geometry={nodes.main_house_1.geometry}
          material={materials.Plaster}
        />
      </group>
      <group position={[0.042, -23.125, 0]} scale={0.305}>
        <Select enabled={atticHovered}>
          <mesh
            ref={atticRef}
            onClick={() => {handleHouseClick(), hideNumber(), hideAdu(), resetClick()}}
            onPointerOver={() => atticHover(true)}
            onPointerOut={() => atticHover(false)}
            castShadow
            receiveShadow
            geometry={nodes.attic.geometry}
            material={materials.Material_2}
            
          />
          {idVisible && <Html wrapperClass="idLabel">1</Html>}
        </Select>
        <mesh
          onClick={() => {handleHouseClick(), hideNumber(), hideAdu(), resetClick()}}
          castShadow
          receiveShadow
          geometry={nodes.attic_1.geometry}
          material={materials.Plaster}
        />
      </group>
      <mesh
        onClick={() => {handleHouseClick(), hideNumber(), hideAdu(), resetClick()}}
        castShadow
        receiveShadow
        geometry={nodes.housev2.geometry}
        material={materials.Material_2}
        position={[0.042, -23.125, 0]}
        scale={0.305}
      />
      {interfaceVisible && <HousingInterface />}
    </group>
  );


  }

useGLTF.preload("/housev3.glb");
