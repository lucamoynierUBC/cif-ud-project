import React, { useRef, useState, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import useApp from "../stores/useApp";
import useCamera from "../stores/useCamera";
import { Select } from "@react-three/postprocessing";
import useInterface from "../stores/useInterface";
import { animated, useSpring } from "@react-spring/three";
import useModal from "../stores/useModal";
import { useGesture } from "react-use-gesture";
import useTag from "../stores/useTag";
import PopUp from "../UserInterface/Components/PopUp";
import { Edges } from "@react-three/drei";
import Reference from "./Reference";
import useClosestObject from "../stores/useClosestObject";


// House component that represents a 3D model with interactive elements
export default function House(props) {
  // Importing the model with the useGLTF library
  const { nodes, materials } = useGLTF("/housev5.glb");
  // State to track whether the mainInterface is visible, initially set to false
  const [interfaceVisible, setInterfaceVisible] = useState(false);
  const hideNumber = useApp((state) => state.hideNumber)
  const hideAdu = useApp((state) => state.hideAdu)
  const resetClick = useInterface((state) => state.resetClick)
  const zoomIn = useCamera((state) => state.zoomClose)
  const toggleInterface = useInterface((state) => state.toggleVisible)
  const [atticHovered, atticHover] = useState(null)
  const [hoverEffect, setHoverEffect] = useState(true)
  const unselectAllAdu = useTag((state) => state.unselectAll)
  const setZoom = useCamera((state) => state.setZoom);
  // const [bloom, setBloom] = useState(0)

  const defaultColor = '#e55c30'
  const altColor = '#f6d746'

  
  // Default configurations when animating the house such as color and opacity
  const [spring, api] = useSpring(() => ({
    atticColor: defaultColor,
    houseColor: defaultColor,
    basementColor: defaultColor,
    trail: 950,
    atticOpacity: 1,
    houseOpacity: 1,
    basementOpacity: 1,
    config: {mass: 1, tension: 210, friction: 20, precision: 0.0001},
    bloom: 0
  }))

  // Gesture handling for when the house is hovered over, animate color when hovered over.
  // Only animate when hoverEffect is set to true meaning only animate when the the main Interface is not visible
  const bind = useGesture({
    onHover({ hovering }) {
      if (hoverEffect) {
        console.log(hovering)
        api.start({atticColor: hovering ? altColor : defaultColor})
        api.start({houseColor: hovering ? altColor : defaultColor})
        api.start({basementColor: hovering ? altColor : defaultColor})
      }
    }
  })

  // Handle clicking on the house,
  const handleHouseClick = () => {
    console.log("clicked")
    setInterfaceVisible(!interfaceVisible) // Toggle the visibility
    // TODO: if interface is not visible hide adu ID
  };

  // useEffect for managing subscriptions and cleanup
  useEffect(() =>
    {
        // When Interface is turned off reset house opacity and enable house to be hoverable 
        const unsubscribeHighlight = useCamera.subscribe(
          (state) => state.zoom,
          (zoom) => {
            if (zoom == "Adu") {
              setHoverEffect(false)
            } else {
              setHoverEffect(true)
            }
           
          }
        )
        

        // Animate house color when Intro pop up modal is closed
        // const unsubscribeColor = useModal.subscribe(
        //   (state) => state.modalPhase,
        //   (modalPhase) => {
        //     if (!modalPhase){
        //       api.start({atticColor: defaultColor, houseColor: defaultColor, basementColor: defaultColor })
        //       atticHover(true)
        //     }
        //   }
        // )

        // Subscribing to changes in the useTag Store
        const unsubscribeOpacity = useTag.subscribe(
          (state) => [state.basement, state.attic, state.detatched, state.attatched, state.active],
          ([basement, attic, detatched, attatched]) => {
            // If basement is set to true, lower the opacity of all other elements of the house except the basement
    
            if (basement == true) {
              api.start({atticOpacity: .2, houseOpacity: .2, basementOpacity: 1})
              api.start({houseColor: defaultColor, atticColor: defaultColor, basementColor: altColor})
            }
            // If Attic is set to true, lower the opacity of all other elements of the house except the attic
            if (attic == true) {
              api.start({houseOpacity: .2, basementOpacity: .2, atticOpacity: 1})
              api.start({houseColor: defaultColor, basementColor: defaultColor, atticColor: altColor})
            }
            // Lower all elements of the house
            if (detatched == true) {
              api.start({houseOpacity: .2, basementOpacity: .2, atticOpacity: .2})
              api.start({houseColor: defaultColor, basementColor: defaultColor, atticColor: defaultColor})
            }
            // Lower all elements of the house
            if (attatched == true) {
              api.start({houseOpacity: .2, basementOpacity: .2, atticOpacity: .2})
              api.start({houseColor: defaultColor, basementColor: defaultColor, atticColor: defaultColor})
            }
            // If nothing is selected increase the opacity of all the elements and set to default color
            if (!basement && !attic && !detatched && !attatched) {
              api.start({houseOpacity: 1, basementOpacity: 1, atticOpacity: 1})
              api.start({houseColor: defaultColor, basementColor: defaultColor, atticColor: defaultColor})
              
            }
          }
        )

        const unsubscribeClosestObject = useClosestObject.subscribe(
          (state) => state.closestObject,
                (closestObject) => {
                    if (closestObject === "ADU"){
                      api.start({bloom: 2})
                    } else {
                      api.start({bloom: 0})
                    }

                }
          
        )

        // cleaning subscriptions
        return () => {
            unsubscribeOpacity()
            unsubscribeHighlight()
            // unsubscribeColor()
            unsubscribeClosestObject()
        }
   }, [])

  // Component for the imported model. Generated using https://gltf.pmnd.rs/ each object in the 3D scene gets its own component
  return (
  <group name="ADU" {...props} dispose={null} position={[12, -0.3, 3.5]} scale={0.4} >
    <Select multiple box enabled={atticHovered}>
      <animated.mesh
        // Spread the properties from the Spring object and bind function to the component
        {...spring}
        {...bind()}
        castShadow
        receiveShadow
        // When house is clicked changes various states and changes states in some of the stores
        onClick={(event) => {event.stopPropagation(), handleHouseClick(), hideNumber(), hideAdu(), resetClick(), toggleInterface(), setZoom("Adu")}}
        geometry={nodes.main.geometry}
        material={materials.mainMat}
        material-color={spring.houseColor}
        material-toneMapped={false}
        material-emissiveIntensity={spring.bloom}
        material-emissive={'orange'}
        material-transparent={true}
        material-opacity={spring.houseOpacity}
        position={[0.042, -23.125, 0]}
        scale={0.305}
      >
        <Edges/>
      </animated.mesh>
      {/* <Popup position={[-25, 4, -10]}/> */}
      <PopUp position={[-23, 4, -10]}></PopUp>
      <animated.mesh
        {...spring}
        {...bind()}
        castShadow
        receiveShadow
        // When Attic is clicked changes various states and changes states in some of the stores
        onClick={(event) => {event.stopPropagation(), handleHouseClick(), hideNumber(), hideAdu(), resetClick(), toggleInterface(), unselectAllAdu(), setZoom("Adu")}}
        geometry={nodes.attic.geometry}
        material={materials.atticMat}
        material-color={spring.atticColor}
        material-toneMapped={false}
        material-emissiveIntensity={spring.bloom}
        material-emissive={'orange'}
        material-transparent={true}
        material-opacity={spring.atticOpacity}
        position={[0.042, -23.125, 0]}
        scale={0.305}
        opacity={0.5}
        transparent={true}
      >
        <Edges/>
        <Reference></Reference>
        {/* attatch Attic html tag to attic geometry*/}
        {/* <AtticTag></AtticTag> */}
      </animated.mesh>
      <animated.mesh
        {...spring}
        {...bind()}
        castShadow
        receiveShadow
        // When basement is clicked changes various states and changes states in some of the stores
        onClick={(event) => {event.stopPropagation(), handleHouseClick(), hideNumber(), hideAdu(), resetClick(), toggleInterface(), setZoom("Adu")}}
        geometry={nodes.basement.geometry}
        material={materials.basementMat}
        material-color={spring.basementColor}
        material-toneMapped={false}
        material-emissiveIntensity={spring.bloom}
        material-emissive={'orange'}
        material-transparent={true}
        material-opacity={spring.basementOpacity}
        position={[0.042, -23.125, 0]}
        scale={0.305}
      >
        {/* Attatch Basement html tags to basement geometry */}
        {/* <BasementTag></BasementTag> */}
        <PopUp position={[-100,70,-30]}></PopUp>
        <Edges/>
      </animated.mesh>
    </Select>
</group>
);}
useGLTF.preload("/housev5.glb");
