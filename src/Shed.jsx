import { useSpring, animated } from "@react-spring/three"
import { useEffect } from "react"
import useFlow from "./stores/useFlow"

export default function Shed() {

    const [spring, api] = useSpring(() => ({
        color: 'white',
        config: {mass: 1, tension: 210, friction: 20, precision: 0.0001},
    }))

    useEffect(() => {
        const unsubscribeColor = useFlow.subscribe(
            (state) => state.phase,
            (phase) => {
                if (phase === 'interaction4'){
                    api.start({color: 'orange'})
                }
            }
        )
        return () => {
            unsubscribeColor()
        }
    })

    return (
        <animated.mesh {...spring} position={[-6.4, 0.25, -0.5]} scale={[1.5, 1.5, 3]}>
            <boxGeometry />
            <animated.meshStandardMaterial color={spring.color}/>
        </animated.mesh>
    )
}