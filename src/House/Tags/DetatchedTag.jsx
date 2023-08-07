import { Html } from "@react-three/drei";
import useActions from "../../stores/useActions";
import { useState, useEffect } from "react";
import useInterface from "../../stores/useInterface";
import "./TagStyles/TagStyles.css"
import { useSpring, animated } from "@react-spring/web"

export default function DetatchedTag() {
    const [visible, setVisible] = useState(false)
    const [opacity, setOpacity] = useState(1)
    const [hover, setHover] = useState(false)
    const [active, setActive] = useState(false)
    const selectDetatched = useActions((state) => state.selectDetatched)

    useEffect(() => {
        const unsubscribeVisible = useInterface.subscribe(
            (state) => state.visible,
            ((visible) => {
                setVisible(visible)
            })
        )
        const unsubscribeOpacity = useActions.subscribe(
            (state) => [state.basement, state.attic, state.detatched, state.attatched],
            ([basement, attic, detatched, attatched]) => {
                if (!detatched && attic){
                    setOpacity(0.5)
                    setHover(false)
                    setActive(false)
                } 
                if (!detatched && basement) {
                    setOpacity(0.5)
                    setHover(false)
                    setActive(false)
                }
                if (!detatched && attatched) {
                    setOpacity(0.5)
                    setHover(false)
                    setActive(false)
                }
                if (!basement && !attatched && !attic && !detatched) {
                    setOpacity(1)
                    setHover(true)
                    setActive(true)
                }
                if (detatched) {
                    setOpacity(1)
                    setHover(true)
                    setActive(true)
                }
            
            }
        )
        
        return () => {
            unsubscribeVisible()
            unsubscribeOpacity()
        }
    }, [])

    const springProps = useSpring({
        width: hover? '150px' : '40px',
        config: { tension: 210, friction: 20, duration: 1},

    });


    const toggleEnter = () =>{
        setHover(true)
        setOpacity(1)
    }

    const toggleLeave = () =>{
        if (!active){
            setHover(false)
            setOpacity(0.5)
        }
    }

    return(
        visible && <Html wrapperClass="tag-layout" position={[0, 1, 0]} style={{opacity: opacity}}> 
            <animated.button 
            onPointerEnter={() => toggleEnter()} 
            onPointerLeave={() => toggleLeave()}
            style={springProps}
            className="tag-button" onClick={() => {selectDetatched()}}>Detatched ADU</animated.button>
        </Html>
    )
}