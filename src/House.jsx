import React, { useRef, useState, useEffect } from "react";
import { Html, useGLTF } from "@react-three/drei";
import HousingInterface from "./HouseInterface";
import useApp from "./stores/useApp";
import useCamera from "./stores/useCamera";
import { Select } from "@react-three/postprocessing";
import useInterface from "./stores/useInterface";
import { animated, useSpring } from "@react-spring/three";
import useGUI from "./stores/useGUI";
import useFlow from "./stores/useFlow";
import { useGesture } from "react-use-gesture";



export default function House(props) {
  const { nodes, materials } = useGLTF("/housev5.glb");
  const [interfaceVisible, setInterfaceVisible] = useState(false);
  const [ idVisible, setIdVisible] = useState(false)
  //state changes
  const hideNumber = useApp((state) => state.hideNumber)
  const hideAdu = useApp((state) => state.hideAdu)
  const resetClick = useInterface((state) => state.resetClick)
  const zoomIn = useCamera((state) => state.zoomClose)
  const toggleInterface = useInterface((state) => state.toggleVisible)
  //outline effect 
  const atticRef = useRef()
  const [atticHovered, atticHover] = useState(null)

  //toggle new interface
  


  

  //animatecolor
  const [spring, api] = useSpring(() => ({
    color: 'white',
    trail: 950,
    opacity: 1,
    config: {mass: 1, tension: 210, friction: 20, precision: 0.0001},
  }))

  const bind = useGesture({
    onHover({ hovering }) {
      api.start({color: hovering ? '#ae561f' : '#d96b27'})
    }
  })
  
  


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
              api.start({color: '#d96b27'})
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
      <animated.mesh
        {...spring}
        {...bind()}
        castShadow
        receiveShadow
        onClick={() => {handleHouseClick(), hideNumber(), hideAdu(), resetClick(), zoomIn(), toggleInterface()}}
        geometry={nodes.main.geometry}
        material={materials.mainMat}
        material-color={spring.color}
        material-transparent={true}
        material-opacity={spring.opacity}
        position={[0.042, -23.125, 0]}
        scale={0.305}
        
      />
      <animated.mesh
        {...spring}
        {...bind()}
        castShadow
        receiveShadow
        onClick={() => {handleHouseClick(), hideNumber(), hideAdu(), resetClick(), zoomIn(), toggleInterface()}}
        geometry={nodes.attic.geometry}
        material={materials.atticMat}
        material-color={spring.color}
        material-transparent={true}
        material-opacity={spring.opacity}
        position={[0.042, -23.125, 0]}
        scale={0.305}
        opacity={0.5}
        transparent={true}
        
      />
      <animated.mesh
        {...spring}
        {...bind()}
        castShadow
        receiveShadow
        onClick={() => {handleHouseClick(), hideNumber(), hideAdu(), resetClick(), zoomIn(), toggleInterface()}}
        geometry={nodes.basement.geometry}
        material={materials.basementMat}
        material-color={spring.color}
        material-transparent={true}
        material-opacity={spring.opacity}
        position={[0.042, -23.125, 0]}
        scale={0.305}
  
      />

    </Select>
    
</group>
);

}

useGLTF.preload("/housev5.glb");
