import { Html } from "@react-three/drei";
import useTag from "../../stores/useTag";
import { useEffect, useState } from "react";
import useInterface from "../../stores/useInterface";
import "./Styles/TagStyles.css"
import { useSpring, animated } from "@react-spring/web"

// Read commments for the Attatched tag component, this is a redundant component.
export default function BasementTag() {
    const [visible, setVisible] = useState(false)
    const [opacity, setOpacity] = useState(1)
    const [hover, setHover] = useState(false)
    const [active, setActive] = useState(false)
    const selectBasement = useTag((state) => state.selectBasement)
    const isMobile = window.innerWidth <= 600;

    useEffect(() => {
        const unsubscribeVisible = useInterface.subscribe(
            (state) => state.visible,
            ((visible) => {
                setVisible(visible)
            })
        )

        const unsubscribeOpacity = useTag.subscribe(
            (state) => [state.basement, state.attic, state.detatched, state.attatched],
            ([basement, attic, detatched, attatched]) => {
                if (!basement && attic){
                    setOpacity(0.5)
                    setHover(false)
                    setActive(false)
                } 
                if (!basement && detatched) {
                    setOpacity(0.5)
                    setHover(false)
                    setActive(false)
                }
                if (!basement && attatched) {
                    setOpacity(0.5)
                    setHover(false)
                    setActive(false)
                }
                if (!basement && !attatched && !attic && !detatched) {
                    setOpacity(1)
                    setHover(true)
                    setActive(true)
                }
                if (basement){
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
        width: hover? (isMobile ? '70px' : '140px') : '40px',
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
        visible && <Html wrapperClass="tag-layout" position={[-80, 70, -35]} style={{opacity: opacity}} > 
            <animated.button 
            onPointerEnter={() => toggleEnter()} 
            onPointerLeave={() => toggleLeave()} 
            style={springProps} 
            className="tag-button" 
            onClick={() => {selectBasement()}}>Basement</animated.button>
        </Html>
    )
}