import { Html } from "@react-three/drei";
import useActions from "../../stores/useActions";
import { useState, useEffect } from "react";
import useInterface from "../../stores/useInterface";

export default function AttatchedTag() {
    const selectAttatched = useActions((state) => state.selectAttatched)
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const unsubscribeVisible = useInterface.subscribe(
            (state) => state.visible,
            ((visible) => {
                setVisible(visible)
            })
        )
        
        return () => {
            unsubscribeVisible()
        }
    }, [])

    return(
        visible && <Html wrapperClass="idLabel" position={[0, .5, -1.5]}> 
            <button onClick={() => {selectAttatched()}}>Attatched ADU</button>
        </Html>
    )
}