import { Html } from "@react-three/drei";
import useActions from "../../stores/useActions";
import { useEffect, useState } from "react";
import useInterface from "../../stores/useInterface";

export default function BasementTag() {
    const [visible, setVisible] = useState(false)
    const selectBasement = useActions((state) => state.selectBasement)

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
        visible && <Html wrapperClass="idLabel" position={[-80, 70, -35]}> 
            <button onClick={() => {selectBasement()}}>Basement</button>
        </Html>
    )
}