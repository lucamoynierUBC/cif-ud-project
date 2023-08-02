import { Html } from "@react-three/drei";
import useActions from "../../stores/useActions";
import { useEffect, useState } from "react";
import useInterface from "../../stores/useInterface";

export default function AtticTag() {
    const [visible, setVisible] = useState(false)
    const selectAttic = useActions((state) => state.selectAttic)

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
        visible && <Html wrapperClass="idLabel" position={[-80, 100, -45]}> 
            <button onClick={() => {selectAttic()}}>Attic</button>
        </Html>
    )
}