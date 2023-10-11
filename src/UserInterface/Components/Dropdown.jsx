import { useState } from "react"
import "./Dropdown.css"
import { CSSTransition } from "react-transition-group";
import { PiCaretCircleDown, PiCaretDownBold } from "react-icons/pi";

// component for drop down text boxes
export default function Dropdown(props){

    const [expand, setExpand] = useState(false)
    const toggleExpansion = () => {
        setExpand((prevExpand) => !prevExpand)
      }

    return(
        <div className="Dropdown-layout">
            <PiCaretDownBold className="caret-icon" onClick={toggleExpansion}></PiCaretDownBold>
            <div >
                <h3 className="title">{props.text}</h3>
            </div>
            {(<CSSTransition
            in={expand}
            timeout={300}
            classNames="content"
            unmountOnExit>
                <div className="content">
                {props.content}
                </div>
            </CSSTransition>)}            
        </div>
    )
}