import { useState } from "react"
import "./Dropdown.css"
import { CSSTransition } from "react-transition-group";

// component for drop down text boxes
export default function Dropdown(props){

    const [expand, setExpand] = useState(false)
    const toggleExpansion = () => {
        setExpand((prevExpand) => !prevExpand)
      }

    return(
        <div className="Dropdown-layout" onClick={toggleExpansion}>
            <div className="title">
                <h3>{props.text}</h3>
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