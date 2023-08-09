import { useGLTF } from "@react-three/drei";
import { useSpring, animated } from "@react-spring/three"
import useActions from "./stores/useActions";
import { useEffect } from "react";
export default function Plot(){
    // const { materials } = useGLTF("/largeblockv4.glb");
    const [spring, api] = useSpring(() => ({
        opacity: 1,
        config: {mass: 1, tension: 210, friction: 20, precision: 0.0001},
      }))
      useEffect(() => {
        const unsubscribeOpacity = useActions.subscribe(
            (state) => [state.basement, state.attic, state.detatched, state.attached],
            (([basement, attic, detatched, attached]) => {
                if (basement == true){
                    api.start({opacity: 0})
                } else {
                  api.start({opacity: 1})
                }
            })
        )
        
        return () => {
            unsubscribeOpacity()
        }
      }, [])
    return(
        <mesh 
        position={[3, -.8, -2]} 
        scale={[13, 0.1, 6]} 
        > 
            <animated.meshStandardMaterial color={'#C7D6C4'} transparent={true} opacity={spring.opacity}/>
            <boxGeometry />

        </mesh>
    )
}