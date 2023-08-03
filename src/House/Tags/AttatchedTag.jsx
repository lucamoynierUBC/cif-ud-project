import { Html } from "@react-three/drei";
import useActions from "../../stores/useActions";
import { useState, useEffect } from "react";
import useInterface from "../../stores/useInterface";

export default function AttatchedTag() {
    const selectAttatched = useActions((state) => state.selectAttatched)
    const [opacity, setOpacity] = useState(1)
    const [visible, setVisible] = useState(false)

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
                } 
                if (!attatched && detatched) {
                    setOpacity(0.5)
                }
                if (!attatched && basement) {
                    setOpacity(0.5)
                }
                if (!basement && !attatched && !attic && !detatched) {
                    setOpacity(1)
                }
                if (attatched){
                    setOpacity(1)
                }
            
            }
        )
        
        return () => {
            unsubscribeVisible()
            unsubscribeOpacity()
        }
    }, [])

    return(
        visible && <Html wrapperClass="idLabel" position={[0, .5, -1.5]} style={{opacity: opacity}}> 
            <button onClick={() => {selectAttatched()}}>Attatched ADU</button>
        </Html>
    )
}