import { useState } from "react"
import "./Dropdown.css"
import { CSSTransition } from "react-transition-group";

export default function Dropdown(props){
    const [expand, setExpand] = useState(false)

    const toggleExpansion = () => {
        setExpand((prevExpand) => !prevExpand)
      }

    return(
        <div className="Dropdown-layout">
            <div className="title" onClick={toggleExpansion}>
                <h3>{props.text}</h3>
            </div>
            <CSSTransition
            in={expand}
            timeout={300}
            classNames="content"
            unmountOnExit>
                <div className="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Nulla et dictum felis. Donec nec interdum elit, ut rutrum elit. 
                    Vestibulum scelerisque vehicula libero, quis sollicitudin ligula finibus eu.
                </div>
            </CSSTransition>            
        </div>
    )
}