import { useEffect, useRef, useState } from "react"
import useGUI from "./stores/useGUI";


export default function GUI() {
    const [showIntroBox, setShowIntroBox] = useState(true);
    const guiIntroTurnOff = useGUI((state) => state.guiIntroTurnOff)

    const handleCloseIntroBox = () => {
        setShowIntroBox(false);
    };

    return <div className="gui">
        <div className="startOver">START OVER</div>
        <div className="exitTool">EXIT TOOL</div>
        {showIntroBox && ( <div className="introBox">
            <p className="introText">This tool aims to simulate a Low Density neighborhood. 
            Lorem ipsum dolor sit amet, apidiscing atque. 
            They are mainly composed of one and two-family residences, 
            and are most common in the outer boroughs.</p>
            <button className="closeButton" onClick={() => {handleCloseIntroBox(), guiIntroTurnOff()}}>X</button>

        </div>
        )}

        

    </div>
}