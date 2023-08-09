import { useSpring, animated } from "@react-spring/three"
import { useEffect } from "react"
import DetatchedTag from "./Tags/DetatchedTag"
import useActions from "../stores/useActions"

export default function DetatchedAdu() {

    const [spring, api] = useSpring(() => ({
        visible: true,
        color: 'white',
        opacity: .2,
        config: {mass: 1, tension: 210, friction: 20, precision: 0.0001},
    }))

    useEffect(() => {
        const unsubscribeOpacity = useActions.subscribe(
            (state) => [state.basement, state.attic, state.detatched, state.attached],
            (([basement, attic, detatched, attached]) => {
                if (detatched == true){
                    api.start({opacity: 1, color: '#d96b27'})
                }
                if (detatched == false) {
                    api.start({opacity: 0.2, color: 'white'})
                }
            })
        )
        
        return () => {
            unsubscribeOpacity()
        }
    }, [])

    return (
        <animated.mesh {...spring} position={[7.5, 0, -2]} scale={[1.5, 1.5, 3]} visible={spring.visible}>
            <boxGeometry />
            <animated.meshStandardMaterial color={spring.color} transparent={true} opacity={spring.opacity}/>
            <DetatchedTag></DetatchedTag>
        </animated.mesh>
    )
}