import { Edges, Html, MeshTransmissionMaterial } from "@react-three/drei"
import { useControls } from "leva"
import { animated, useSpring, config } from "@react-spring/three"
import { useEffect, useState } from "react"
import useClosestObject from "../stores/useClosestObject"
import { Button, Popover, Tooltip } from "antd"

export default function TransitDevelopment() {
    const [open, setOpen] = useState(false)
    const {townX, townY, townZ} = useControls({
        townX: {value: 0, min: -100, max: 200 },
        townY: {value: 0, min: -100, max: 100 },
        townZ: {value: 0, min: -100, max: 100 }
    })

    const [spring, api] = useSpring(() => ({
        bloom: 0,
        config: config.stiff
    }))

    useEffect(()=> {
        const unsubscribeClosestObject = useClosestObject.subscribe(
            (state) => state.closestObject,
            (closestObject) => {
                if (closestObject === "Transit Development"){
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
        <animated.mesh {...spring} material-emissiveIntensity={spring.bloom} name="Transit Development" scale={[10, 8, 12]} position={[116, 3, 22]}>
            <MeshTransmissionMaterial toneMapped={false} emissive={'orange'} color={'orange'} roughness={0.5} thickness={0.5} transmission={1} metalness={0.5} resolution={256} samples={32}/>
            <Edges></Edges>
            <boxGeometry></boxGeometry>
            <Html>
                <Tooltip open={open} title="Transit Oriented Development"></Tooltip>
            </Html>
        </animated.mesh>
    )
}