import { useSpring, animated } from "@react-spring/three"
import { useEffect } from "react"
import useActions from "../stores/useActions"
import AttatchedTag from "./Tags/AttatchedTag"


export default function Shed() {

    const [spring, api] = useSpring(() => ({
        visible: true,
        color: 'white',
        opacity: 0.2,
        config: {mass: 1, tension: 210, friction: 20, precision: 0.0001},
    }))

    useEffect(() => {
        const unsubscribeOpacity = useActions.subscribe(
            (state) => [state.basement, state.attic, state.detatched, state.attatched],
            (([basement, attic, detatched, attatched]) => {
                if (attatched == true){
                    api.start({opacity: 1, color: '#d96b27'})
                }
                if (attatched == false){
                    api.start({opacity: 0.2, color: 'white'})
                }
            })
        )
        
        return () => {
            unsubscribeOpacity()
        }
    }, [])

    return (
        <animated.mesh {...spring} position={[-6.4, 0, -0.5]} scale={[1.5, 1.5, 3]} visible={spring.visible}>
            <boxGeometry />
            <animated.meshStandardMaterial color={spring.color} transparent={true} opacity={spring.opacity}/>
            <AttatchedTag></AttatchedTag>
        </animated.mesh>
    )
}