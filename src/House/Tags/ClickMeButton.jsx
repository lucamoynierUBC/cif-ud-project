import { Html } from "@react-three/drei";
import "./Styles/ClickMeStyles.css"
export default function ClickMeButton() {
    return(
        <Html center className="click-me" position={[-80, 140, -35]}>
            Click Me
        </Html>
    )
}