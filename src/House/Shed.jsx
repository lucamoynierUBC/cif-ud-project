import { useSpring, animated } from "@react-spring/three"
import { useEffect } from "react"
import useActions from "../stores/useTag"
import AttatchedTag from "./Tags/AttatchedTag"

// Component for the Attatched ADU model 
export default function Shed() {
    // Using the useSpring library for animations, setting some default css values here and other
    // animation configurations. 
    const [spring, api] = useSpring(() => ({
        visible: true,
        color: "white",
        opacity: .2,
        config: {mass: 1, tension: 210, friction: 20, precision: 0.0001},
    }))

    // Subscribing to changes in the useAction store. When certain conditions are met, animations are triggered.
    // Inside the callback function it checks for the value of detatched. 
    useEffect(() => {
        const unsubscribeOpacity = useActions.subscribe(
            (state) => [state.basement, state.attic, state.detatched, state.attatched],
            (([basement, attic, detatched, attatched]) => {
                if (attatched == true){
                    api.start({opacity: 1, color: "#d96b27"})
                }
                if (attatched == false){
                    api.start({opacity: 0.2, color: "white"})
                }
            })
        )

        // The returned cleanup function unsubscribes from the state changes when the component unmounts. 
        // Dependency array "[]" is empty so the effect only runs once after the initial render, this is b/c
        // the effect does not dpend on any state or props changes. 
        return () => {
            unsubscribeOpacity()
        }
    }, [])

    return (
        <animated.mesh {...spring} position={[5.6, 0, -2]} scale={[1.5, 1.5, 3]} visible={spring.visible}>
            <boxGeometry />
            <animated.meshStandardMaterial color={spring.color} transparent={true} opacity={spring.opacity}/>
            {/* <AttatchedTag></AttatchedTag> */}
        </animated.mesh>
    )
}