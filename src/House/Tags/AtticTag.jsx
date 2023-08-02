import { Html } from "@react-three/drei";
import useActions from "../../stores/useActions";

export default function AtticTag() {
    const selectAttic = useActions((state) => state.selectAttic)
    return(
        <Html wrapperClass="idLabel" position={[-80, 100, -45]}> 
            <button onClick={() => {selectAttic()}}>Attic</button>
        </Html>
    )
}