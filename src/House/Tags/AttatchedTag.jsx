import { Html } from "@react-three/drei";
import useTag from "../../stores/useTag";
import { useState, useEffect } from "react";
import useInterface from "../../stores/useInterface";
import "./Styles/TagStyles.css"
import { useSpring, animated } from "@react-spring/web"

export default function AttatchedTag() {
    const selectAttatched = useTag((state) => state.selectAttatched)
    const [opacity, setOpacity] = useState(1)
    const [visible, setVisible] = useState(false)
    const [hover, setHover] = useState(false)
    //  Set Active to true if it is the tag that is clicked on. Ensures that the tags animation is not triggered.
    const [active, setActive] = useState(false)
    const isMobile = window.innerWidth <= 600;

    useEffect(() => {
        // Subscribing to changes in the useInterface store. 
        // When the Interface is visible set the visibility of THIS component to the visibiility of the Interface
        // In other words, if the Interface is visible render this component. If the Interface is not visible, do not render this component
        const unsubscribeVisible = useInterface.subscribe(
            (state) => state.visible,
            ((visible) => {
                setVisible(visible)
            })
        )

        // Subscribing to changes in the useTag store. 
        const unsubscribeOpacity = useTag.subscribe(
            (state) => [state.basement, state.attic, state.detatched, state.attatched],
            ([basement, attic, detatched, attatched]) => {
                // when attatch tag is not selected and a different tag is selected set its opacity to  0.5,
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
                // If no tags are selected set opacity to true
                if (!basement && !attatched && !attic && !detatched) {
                    setOpacity(1)
                    setHover(true)
                    setActive(true)
                }
                // I selected ensure that tags is visible and is animateable
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

    // Spring objects to configure default animation values
    const springProps = useSpring({
        width: hover ? (isMobile ? '110px' : '150px') : '40px',
        config: { tension: 210, friction: 20, duration: 1},

    });

    // On pointer enter toggle animation and set opacity
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
            onClick={() => {selectAttatched()}}> Attatched ADU </animated.button>
        </Html>
    )
}