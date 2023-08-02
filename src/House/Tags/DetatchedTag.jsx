import { Html } from "@react-three/drei";
import useActions from "../../stores/useActions";
import { useState, useEffect } from "react";
import useInterface from "../../stores/useInterface";

export default function DetatchedTag() {
    const [visible, setVisible] = useState(false)
    const selectDetatched = useActions((state) => state.selectDetatched)

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
        visible && <Html wrapperClass="idLabel" position={[0, 1, 0]}> 
            <button onClick={() => {selectDetatched()}}>Detatched ADU</button>
        </Html>
    )
}