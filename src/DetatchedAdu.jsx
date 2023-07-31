import { useSpring, animated } from "@react-spring/three"
import { useEffect } from "react"
import useInterface from "./stores/useInterface"

export default function DetatchedAdu() {

    const [spring, api] = useSpring(() => ({
        visible: true,
        color: 'white',
        config: {mass: 1, tension: 210, friction: 20, precision: 0.0001},
    }))

    useEffect(() => {
        const unsubscribeColor = useInterface.subscribe(
            (state) => state.aduVisible,
            (aduVisible) => {
                if (aduVisible === 'detatched'){
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
        <animated.mesh {...spring} position={[-4.5, 0, -0.5]} scale={[1.5, 1.5, 3]} visible={spring.visible}>
            <boxGeometry />
            <animated.meshStandardMaterial color={spring.color}/>
        </animated.mesh>
    )
}