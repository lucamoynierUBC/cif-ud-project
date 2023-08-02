import { Html } from "@react-three/drei";
import useActions from "../../stores/useActions";

export default function AttatchedTag() {
    const selectAttatched = useActions((state) => state.selectAttatched)

    return(
        <Html wrapperClass="idLabel" position={[0, .5, -1.5]}> 
            <button onClick={() => {selectAttatched()}}>Attatched ADU</button>
        </Html>
    )
}