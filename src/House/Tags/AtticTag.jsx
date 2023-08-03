import { Html } from "@react-three/drei";
import useActions from "../../stores/useActions";
import { useEffect, useState } from "react";
import useInterface from "../../stores/useInterface";

export default function AtticTag() {
    const [visible, setVisible] = useState(false)
    const [opacity, setOpacity] = useState(1)
    const selectAttic = useActions((state) => state.selectAttic)

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
                if (!attic && basement){
                    setOpacity(0.5)
                } 
                if (!attic && detatched) {
                    setOpacity(0.5)
                }
                if (!attic && attatched) {
                    setOpacity(0.5)
                }
                if (!basement && !attatched && !attic && !detatched) {
                    setOpacity(1)
                }
                if (attic){
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
        visible && <Html wrapperClass="idLabel" position={[-80, 100, -45]} style={{opacity: opacity}}> 
            <button onClick={() => {selectAttic()}}>Attic</button>
        </Html>
    )
}