import { PiCaretDoubleRightBold } from "react-icons/pi";
import "./ToggleButton.css"

export default function ToggleButton(props) {
    //toggles the visibility of the modal
    return (
        <div className="toggle-Container" >
            <div className="toggle" onClick={() => {props.unSpawn(), props.toggle()}}>
                <PiCaretDoubleRightBold size={"25px"}></PiCaretDoubleRightBold>
            </div>
        </div>
    )
}