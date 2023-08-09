import React, { useRef, useState, useEffect } from "react";
import { Html, useGLTF } from "@react-three/drei";
import HousingInterface from "../HouseInterface";
import useApp from "../stores/useApp";
import useCamera from "../stores/useCamera";
import { Select } from "@react-three/postprocessing";
import useInterface from "../stores/useInterface";
import { animated, useSpring } from "@react-spring/three";
import useGUI from "../stores/useGUI";
import useFlow from "../stores/useFlow";
import { useGesture } from "react-use-gesture";
import AtticTag from "./Tags/AtticTag";
import BasementTag from "./Tags/BasementTag";
import useActions from "../stores/useActions";
import Shed from "./Shed";





export default function House(props) {
  const { nodes, materials } = useGLTF("/housev5.glb");
  const [interfaceVisible, setInterfaceVisible] = useState(false);
  const [ idVisible, setIdVisible] = useState(false)
  //state changes
  const hideNumber = useApp((state) => state.hideNumber)
  const hideAdu = useApp((state) => state.hideAdu)
  const resetClick = useInterface((state) => state.resetClick)
  const zoomIn = useCamera((state) => state.zoomClose)
  const resetCamera = useCamera((state) => state.resetCamera)
  const toggleInterface = useInterface((state) => state.toggleVisible)
  //outline effect 
  const atticRef = useRef()
  const [atticHovered, atticHover] = useState(null)
  const [hoverEffect, setHoverEffect] = useState(true)
  //useActions
  const unselectAllAdu = useActions((state) => state.unselectAll)
  


  

  //animatecolor
  const [spring, api] = useSpring(() => ({
    atticColor: 'white',
    houseColor:'white',
    basementColor: 'white',
    trail: 950,
    atticOpacity: 1,
    houseOpacity: 1,
    basementOpacity: 1,
    config: {mass: 1, tension: 210, friction: 20, precision: 0.0001},
  }))

  const bind = useGesture({
    onHover({ hovering }) {
      console.log('hover effect', hoverEffect)
      if (hoverEffect) {
        api.start({atticColor: hovering ? '#ae561f' : '#d96b27'})
        api.start({houseColor: hovering ? '#ae561f' : '#d96b27'})
        api.start({basementColor: hovering ? '#ae561f' : '#d96b27'})
      }
    }
  })
  
  


  const handleHouseClick = () => {
    console.log("clicked")
    setInterfaceVisible(!interfaceVisible) // Toggle the visibility
    // TODO: if interface is not visible hide adu ID
  };

  
  useEffect(() =>
    {
        
        const unsubscribeHighlight = useInterface.subscribe(
          (state) => [state.selection, state.visible],
          ([selection , visible]) => {
            setHoverEffect(!visible)
            if (!visible){
              api.start({houseOpacity: 1, basementOpacity: 1, atticOpacity: 1})
              api.start({houseColor: '#d96b27', basementColor: '#d96b27', atticColor: '#d96b27'})
            }
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
              api.start({atticColor: '#d96b27', houseColor: '#d96b27', basementColor: '#d96b27' })
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

        const unsubscribeOpacity = useActions.subscribe(
          (state) => [state.basement, state.attic, state.detatched, state.attatched],
          ([basement, attic, detatched, attatched]) => {
            if (basement == true) {
              api.start({atticOpacity: .2, houseOpacity: .2, basementOpacity: 1})
              api.start({houseColor: 'white', atticColor: 'white', basementColor: '#d96b27'})
            }
            if (attic == true) {
              api.start({houseOpacity: .2, basementOpacity: .2, atticOpacity: 1})
              api.start({houseColor: 'white', basementColor: 'white', atticColor: '#d96b27'})
            }
            if (detatched == true) {
              api.start({houseOpacity: .2, basementOpacity: .2, atticOpacity: .2})
              api.start({houseColor: 'white', basementColor: 'white', atticColor: 'white'})
            }
            if (attatched == true) {
              api.start({houseOpacity: .2, basementOpacity: .2, atticOpacity: .2})
              api.start({houseColor: 'white', basementColor: 'white', atticColor: 'white'})
            }
            else if (!basement && !attic && !detatched && !attatched) {
              api.start({houseOpacity: 1, basementOpacity: 1, atticOpacity: 1})
              api.start({houseColor: '#d96b27', basementColor: '#d96b27', atticColor: '#d96b27'})
            }
          }
        )
        
        // cleaning subscriptions
        return () => {
            // unsubscribeID()
            unsubscribeOpacity()
            unsubscribeHighlight()
            unsubscribeColor()
            unsubscribeDefaultColor()
        }
   }, [])


 
   // TODO: stop event propogration
  return (
  <group {...props} dispose={null} position={[12, -0.3, 3.5]} scale={0.4} >
    <Select enabled={atticHovered}>
      <animated.mesh
        {...spring}
        {...bind()}
        castShadow
        receiveShadow
        onClick={() => {handleHouseClick(), hideNumber(), hideAdu(), resetClick(), zoomIn()}}
        geometry={nodes.main.geometry}
        material={materials.mainMat}
        material-color={spring.houseColor}
        material-transparent={true}
        material-opacity={spring.houseOpacity}
        position={[0.042, -23.125, 0]}
        scale={0.305}
        
      />
      <animated.mesh
        {...spring}
        {...bind()}
        castShadow
        receiveShadow
        onClick={() => {handleHouseClick(), hideNumber(), hideAdu(), resetClick(), zoomIn(), toggleInterface(), unselectAllAdu()}}
        geometry={nodes.attic.geometry}
        material={materials.atticMat}
        material-color={spring.atticColor}
        material-transparent={true}
        material-opacity={spring.atticOpacity}
        position={[0.042, -23.125, 0]}
        scale={0.305}
        opacity={0.5}
        transparent={true}
        
      >
        <AtticTag></AtticTag>
      </animated.mesh>
      <animated.mesh
        {...spring}
        {...bind()}
        castShadow
        receiveShadow
        onClick={() => {handleHouseClick(), hideNumber(), hideAdu(), resetClick(), zoomIn()}}
        geometry={nodes.basement.geometry}
        material={materials.basementMat}
        material-color={spring.basementColor}
        material-transparent={true}
        material-opacity={spring.basementOpacity}
        position={[0.042, -23.125, 0]}
        scale={0.305}
  
      >
        <BasementTag></BasementTag>
      </animated.mesh>

    </Select>
</group>
);

}

useGLTF.preload("/housev5.glb");
