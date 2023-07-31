import { useSpring, animated } from "@react-spring/three"
import { useEffect } from "react"
import useInterface from "./stores/useInterface"

export default function Shed() {

    const [spring, api] = useSpring(() => ({
        visible: false,
        color: 'white',
        config: {mass: 1, tension: 210, friction: 20, precision: 0.0001},
    }))

    useEffect(() => {
        const unsubscribeColor = useInterface.subscribe(
            (state) => state.aduVisible,
            (aduVisible) => {
                if (aduVisible === 'shed'){
                    api.start({color: 'orange'})
                    api.start({visible: true})
                } else {
                    api.start({visible: false})
                }
            }
        )
        return () => {
            unsubscribeColor()
        }
    })

    return (
        <animated.mesh {...spring} position={[-6.4, 0, -0.5]} scale={[1.5, 1.5, 3]} visible={spring.visible}>
            <boxGeometry />
            <animated.meshStandardMaterial color={spring.color}/>
        </animated.mesh>
    )
}