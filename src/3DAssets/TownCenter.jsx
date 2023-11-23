import { Edges, MeshTransmissionMaterial } from "@react-three/drei"
import { useControls } from "leva"
import { animated, useSpring, config } from "@react-spring/three"
import { useEffect } from "react"
import useClosestObject from "../stores/useClosestObject"

export default function TownCenter() {
    const {townX, townY, townZ} = useControls({
        townX: {value: 0, min: -100, max: 100 },
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
                if (closestObject === "Town Center"){
                    api.start({bloom: 2})
                } else {
                    api.start({bloom: 0})
                }
            }

        )
        return () => {
            unsubscribeClosestObject()
        }
    }, [])


    return(
        <animated.mesh {...spring} material-emissiveIntensity={spring.bloom} name="Town Center" scale={[7, 7, 10]} position={[-41, 0, -54]}>
            <MeshTransmissionMaterial toneMapped={false} emissive={'orange'} color={'orange'} roughness={0.5} thickness={0.5} transmission={1} metalness={0.5} resolution={256} samples={32}/>
            <Edges></Edges>
            <boxGeometry></boxGeometry>
        </animated.mesh>
    )
}