import { useEffect, useRef, useState } from "react"
import useGUI from "./stores/useModal";


export default function GUI() {
    const [showIntroBox, setShowIntroBox] = useState(true);
    const guiIntroTurnOff = useGUI((state) => state.guiIntroTurnOff)

    const handleCloseIntroBox = () => {
        setShowIntroBox(false);
    };

    return <div className="gui">
        {/* <div className="startOver">START OVER</div>
        <div className="exitTool">EXIT TOOL</div> */}
        {showIntroBox && ( <div className="introBox">
            <p className="introText">This tool simulates a block inside a low density neighborhood. 
            These neighborhoods are mainly composed of one and two-family residences, 
            and are most common in the outer boroughs. 
            Let’s see what kinds of opportunities exist here to increase housing opportunity, economic opportunity, and carbon neutrality!</p>
            <button className="closeButton" onClick={() => {handleCloseIntroBox(), guiIntroTurnOff()}}>X</button>

        </div>
        )}

        

    </div>
}