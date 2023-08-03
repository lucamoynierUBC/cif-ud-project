import { Html } from "@react-three/drei";
import useActions from "../../stores/useActions";
import { useState, useEffect } from "react";
import useInterface from "../../stores/useInterface";

export default function DetatchedTag() {
    const [visible, setVisible] = useState(false)
    const [opacity, setOpacity] = useState(1)
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
                } 
                if (!detatched && basement) {
                    setOpacity(0.5)
                }
                if (!detatched && attatched) {
                    setOpacity(0.5)
                }
                if (!basement && !attatched && !attic && !detatched) {
                    setOpacity(1)
                }
                if (detatched) {
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
        visible && <Html wrapperClass="idLabel" position={[0, 1, 0]} style={{opacity: opacity}}> 
            <button onClick={() => {selectDetatched()}}>Detatched ADU</button>
        </Html>
    )
}