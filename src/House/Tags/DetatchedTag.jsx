import { Html } from "@react-three/drei";
import useActions from "../../stores/useActions";

export default function DetatchedTag() {
    const selectDetatched = useActions((state) => state.selectDetatched)

    return(
        <Html wrapperClass="idLabel" position={[0, 1, 0]}> 
            <button onClick={() => {selectDetatched()}}>Detatched ADU</button>
        </Html>
    )
}