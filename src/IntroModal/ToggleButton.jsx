import { PiCaretDoubleRightBold } from "react-icons/pi";
import "./ToggleButton.css"
import {animated, useSpring} from "react-spring"
import useInterface from "../stores/useInterface";
import useCamera from "../stores/useCamera";

export default function ToggleButton(props) {
    //toggles the visibility of the modal
    const turnOffInterface = useInterface((state) => state.setVisibleOff)
    const zoomFar = useCamera((state) => state.zoomFar)

    const springProps = useSpring({
        rotation: !props.visible ? "rotate(90deg)" : "rotate(0deg)",
    })

    console.log("modal is visible: ", props.visible)
    return (
        <div className="toggle-Container" >
            <animated.div 
            className="toggle" 
            style={{transform: springProps.rotation}} 
            onClick={() => {props.spawn(), props.toggle(), turnOffInterface(), zoomFar()}}>
                <PiCaretDoubleRightBold size={"25px"}></PiCaretDoubleRightBold>
            </animated.div>
        </div>
    )
}