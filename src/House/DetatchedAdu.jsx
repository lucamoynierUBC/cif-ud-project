import { useSpring, animated } from "@react-spring/three"
import { useEffect } from "react"
import DetatchedTag from "./Tags/DetatchedTag"
import useTag from "../stores/useTag"

// Component for the Detatched ADU model 
export default function DetatchedAdu() {
    // Using the useSpring library for animations, setting some default css values here and other
    // animation configurations. 
    const [spring, api] = useSpring(() => ({
        visible: true,
        color: "white",
        opacity: .2,
        config: {mass: 1, tension: 210, friction: 20, precision: 0.0001},
    }))

    // Subscribing to changes in the useTag store. When certain conditions are met, animations are triggered.
    // Inside the callback function it checks for the value of detatched. 
    useEffect(() => {
        const unsubscribeOpacity = useTag.subscribe(
            (state) => [state.basement, state.attic, state.detatched, state.attached],
            (([basement, attic, detatched, attached]) => {
                if (detatched == true){
                    api.start({opacity: 1, color: "#d96b27"})
                }
                if (detatched == false) {
                    api.start({opacity: 0.2, color: "white"})
                }
            })
        )

        // The returned cleanup function unsubscribes from the state changes when the component unmounts. 
        // Dependency array '[]' is empty so the effect only runs once after the initial render, this is b/c
        // the effect does not dpend on any state or props changes. 
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