import { Edges, Html, MeshTransmissionMaterial } from "@react-three/drei"
import { useControls } from "leva"
import { animated, useSpring, config } from "@react-spring/three"
import { useEffect, useState } from "react"
import useClosestObject from "../stores/useClosestObject"
import { Popover, Tooltip } from "antd"

export default function TownCenter() {
    const [open, setOpen] = useState(false)
    const [spring, api] = useSpring(() => ({
        bloom: 0,
        config: config.stiff
    }))

    useEffect(()=> {
        const unsubscribeClosestObject = useClosestObject.subscribe(
            (state) => state.closestObject,
            (closestObject) => {
                if (closestObject === "Town Center"){
                    api.start({bloom: 2})
                    setOpen(true)
                } else {
                    api.start({bloom: 0})
                    setOpen(false)
                }
            }

        )
        return () => {
            unsubscribeClosestObject()
        }
    }, [])


    return(
        <animated.mesh {...spring} material-emissiveIntensity={spring.bloom} name="Town Center" scale={[7, 7, 10]} position={[-41, 2.5, -54]}>
            <MeshTransmissionMaterial toneMapped={false} emissive={'orange'} color={'orange'} roughness={0.5} thickness={0.5} transmission={1} metalness={0.5} resolution={256} samples={32}/>
            <Edges></Edges>
            <boxGeometry></boxGeometry>
            <Html>
                <Tooltip open={open} title="Universal Affordability Preference "></Tooltip>
            </Html>
        </animated.mesh>
    )
}