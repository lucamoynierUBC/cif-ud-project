import { Html } from "@react-three/drei";
import useActions from "../../stores/useActions";
import { useEffect, useState } from "react";
import useInterface from "../../stores/useInterface";
import "./TagStyles.css"

export default function BasementTag() {
    const [visible, setVisible] = useState(false)
    const [opacity, setOpacity] = useState(1)
    const selectBasement = useActions((state) => state.selectBasement)

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
                if (!basement && attic){
                    setOpacity(0.5)
                } 
                if (!basement && detatched) {
                    setOpacity(0.5)
                }
                if (!basement && attatched) {
                    setOpacity(0.5)
                }
                if (!basement && !attatched && !attic && !detatched) {
                    setOpacity(1)
                }
                if (basement){
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
        visible && <Html wrapperClass="tag-layout" position={[-80, 70, -35]} style={{opacity: opacity}} > 
            <button className="tag-button" onClick={() => {selectBasement()}}  >Basement</button>
        </Html>
    )
}