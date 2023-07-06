import { useEffect, useRef } from "react"
import useApp from "./stores/useApp"

export default function GUI() {

    // state contains our store information
    const changeColor = useApp((state) => state.changeColor)
    
    const buttonClick = () => {
        console.log("button clicked")
        changeColor()
    }



    return <div className="gui">
        {/* testButton */}
        <div>
            <button className="testButton" onClick={buttonClick}>Click Me</button>
        </div>

    </div>
}