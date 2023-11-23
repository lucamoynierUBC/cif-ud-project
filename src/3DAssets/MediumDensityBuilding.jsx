import { useState, useEffect } from "react";
import useCamera from "../stores/useCamera";
import useConfigurator from "../stores/useConfigurator";
import { Edges, MeshTransmissionMaterial } from "@react-three/drei";
import { useControls } from "leva";
import PopUpUAP from "../UserInterface/Components/PopUpUAP";
import useClosestObject from "../stores/useClosestObject";
import { animated, useSpring, config } from "@react-spring/three";
import { useGesture } from "react-use-gesture";

export default function MediumDensityBuilding() {
    const setZoom = useCamera((state) => state.setZoom)
    const [scale, setScale] = useState([4, 5, 10])
    const [color, setColor] = useState("orange")
    // const [bloom, setBloom] = useState(0)
    const [selected, setSelected] = useState(0)

    const store = {
        color: { value: 'hotpink' },
        roughness: { value: 0.5, min: 0, max: 1 },
        thickness: { value: 1, min: -10, max: 10 },
        envMapIntensity: { value: 1, min: 0, max: 10 },
        transmission: { value: 1, min: 0, max: 1 },
        metalness: { value: 1, min: 0, max: 1 }}
    
   

    const [spring, api] = useSpring(() => ({
        bloom: 0,
        config: config.stiff,

      }))

    
      

    useEffect(() => {
            const unsubscribeConfigurator = useConfigurator.subscribe(
                (state) => state.toggle,
                (toggle) => {
                    if (toggle == "Medium Density") {
                        setScale([4, 10, 10])
                        setColor('hotpink')
                        

                    } else {
                        setScale([4, 5, 10])
                        setColor('orange')
                    }
                    console.log("COLOR IS ", spring.mainColor)
                }
            )
            const unsubscribeClosestObject = useClosestObject.subscribe(
                (state) => state.closestObject,
                (closestObject) => {

                    if (closestObject === "UAP"){
                        api.start({bloom: 2})
                    } else {
                        api.start({bloom: 0})
                    }

                }
            )

            return () => {
                unsubscribeConfigurator()
                unsubscribeClosestObject()
            }
        }, [])

    return (
        <animated.mesh {...spring} name="UAP" material-emissiveIntensity={spring.bloom} castShadow receiveShadow position={[55, 3, 44]} scale={scale} onClick={() => setZoom("Medium Density")}>
            {/* <meshPhongMaterial /> */}
            
            <MeshTransmissionMaterial toneMapped={false} emissive={color} color={color} roughness={0.5} thickness={0.5} transmission={1} metalness={0.5} resolution={256} samples={32}/>
            <Edges/>
            <PopUpUAP position={[0,0,0]}></PopUpUAP>
           
            <boxGeometry></boxGeometry>
        </animated.mesh>
    )
}