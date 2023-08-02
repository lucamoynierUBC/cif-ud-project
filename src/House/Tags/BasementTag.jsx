import { Html } from "@react-three/drei";
import useActions from "../../stores/useActions";

export default function BasementTag() {
    const selectBasement = useActions((state) => state.selectBasement)

    return(
        <Html wrapperClass="idLabel" position={[-80, 70, -35]}> 
            <button onClick={() => {selectBasement()}}>Basement</button>
        </Html>
    )
}