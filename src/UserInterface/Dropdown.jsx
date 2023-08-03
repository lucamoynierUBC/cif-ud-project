import { useState } from "react"
import "./Dropdown.css"
import { CSSTransition } from "react-transition-group";

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
            { (<CSSTransition
            in={expand}
            timeout={300}
            classNames="content"
            unmountOnExit>
                <div className="content">
                An Accessible Dwelling Unit (ADU) is an additional, private, 
                single housing unit meant to be placed on lots with an existing one or two-family residence. 
                They work well in a low density context because owners and residents of homes in these neighborhoods can build ADUs without the need for rezoning. 
                There are four main types.
                </div>
            </CSSTransition>
            )}            
        </div>
    )
}