import { useEffect, useRef, useState } from "react"


export default function GUI() {
    const [showIntroBox, setShowIntroBox] = useState(true);

    const handleCloseIntroBox = () => {
        setShowIntroBox(false);
    };

    return <div className="gui">
        <div className="startOver">START OVER</div>
        <div className="exitTool">EXIT TOOL</div>
        {showIntroBox && ( <div className="introBox">
            <p class="introText">This tool aims to simulate a Low Density neighborhood. 
            Lorem ipsum dolor sit amet, apidiscing atque. 
            They are mainly composed of one and two-family residences, 
            and are most common in the outer boroughs.</p>
            <button class="closeButton" onClick={handleCloseIntroBox}>X</button>

        </div>
        )}

        

    </div>
}