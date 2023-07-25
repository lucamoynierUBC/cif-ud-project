import React, { useRef, useState, useEffect } from "react";
import { Html, useGLTF } from "@react-three/drei";
import HousingInterface from "./HouseInterface";
import useApp from "./stores/useApp";
import { Select } from "@react-three/postprocessing";
import useInterface from "./stores/useInterface";
import { animated, useSpring } from "@react-spring/three";
import useGUI from "./stores/useGUI";
import useFlow from "./stores/useFlow";



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

  //toggle new interface
  


  

  //animatecolor
  const [spring, api] = useSpring(() => ({
    color: 'white',
    trail: 950,
    config: {mass: 1, tension: 210, friction: 20, precision: 0.0001},
  }))
  
  


  const handleHouseClick = () => {
    setInterfaceVisible(!interfaceVisible) // Toggle the visibility
    // TODO: if interface is not visible hide adu ID
  };

  
  
  useEffect(() =>
    {
        
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
        const unsubscribeColor = useGUI.subscribe(
          (state) => state.guiIntroPhase,
          (guiIntroPhase) => {
            if (guiIntroPhase === 'off'){
              api.start({color: 'orange'})
              atticHover(true)
              // handleHouseClick()
            }
          }
        )

        const unsubscribeDefaultColor = useFlow.subscribe(
          (state) => state.phase,
          (phase) => {
            if (phase === 'interaction4'){
              api.start({color: 'white'})
              atticHover(false)
              
            }
          }
        )
        
        // cleaning subscriptions
        return () => {
            // unsubscribeID()
            unsubscribeHighlight()
            unsubscribeColor()
            unsubscribeDefaultColor()
        }
   }, [])



  return (
    <group {...props} dispose={null} position={[0, 0, 5]} scale={0.4}>
      <Select enabled={atticHovered}>
      <group position={[0.042, -23.125, 0]} scale={0.305} onPointerOver={(event) => event.stopPropagation()}>
        <animated.mesh
          {...spring}
          onClick={() => {handleHouseClick(), hideNumber(), hideAdu(), resetClick()}}
          castShadow
          receiveShadow
          geometry={nodes.main_house.geometry}
          material={materials.Material_2}
          material-color={spring.color}
          material-opacity ={0.5}
        />
        <animated.mesh
          {...spring}
          onClick={() => {handleHouseClick(), hideNumber(), hideAdu(), resetClick()}}
          castShadow
          receiveShadow
          geometry={nodes.main_house_1.geometry}
          material={materials.Plaster}
          material-color={spring.color}
        />
      </group>
      <group position={[0.042, -23.125, 0]} scale={0.305}>
        {/* <Select enabled={atticHovered}> */}
          <mesh
            ref={atticRef}
            onClick={() => {handleHouseClick(), hideNumber(), hideAdu(), resetClick()}}
            // onPointerOver={() => atticHover(true)}
            // onPointerOut={() => atticHover(false)}
            castShadow
            receiveShadow
            geometry={nodes.attic.geometry}
            material={materials.Material_2}
            
          />
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
      </Select>
    </group>
  );


  }

useGLTF.preload("/housev3.glb");
