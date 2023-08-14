import { Html } from "@react-three/drei";
import useActions from "../../stores/useActions";
import { useState, useEffect } from "react";
import useInterface from "../../stores/useInterface";
import "./Styles/TagStyles.css"
import { useSpring, animated } from "@react-spring/web"

export default function AttatchedTag() {
    const selectAttatched = useActions((state) => state.selectAttatched)
    const [opacity, setOpacity] = useState(1)
    const [visible, setVisible] = useState(false)
    const [hover, setHover] = useState(false)
    const [active, setActive] = useState(false)
    const isMobile = window.innerWidth <= 600;

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
                if (!attatched && attic){
                    setOpacity(0.5)
                    setHover(false)
                    setActive(false)
                } 
                if (!attatched && detatched) {
                    setOpacity(0.5)
                    setHover(false)
                    setActive(false)
                }
                if (!attatched && basement) {
                    setOpacity(0.5)
                    setHover(false)
                    setActive(false)
                }
                if (!basement && !attatched && !attic && !detatched) {
                    setOpacity(1)
                    setHover(true)
                    setActive(true)
                }
                if (attatched){
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
        width: hover ? (isMobile ? '110px' : '150px') : '40px',
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
        visible && <Html 
        wrapperClass="tag-layout" 
        position={[0, .5, (isMobile ? .4 : .75)]} 
        style={{opacity: opacity}} 
        > 
            <animated.button 
            onPointerEnter={() => toggleEnter()} 
            onPointerLeave={() => toggleLeave()}
            style={springProps}
            className="tag-button" 
            onClick={() => {selectAttatched()}} 
             >Attatched ADU</animated.button>
        </Html>
    )
}