
import './Caret.css'
import { PiCaretDoubleLeftBold } from "react-icons/pi";

export default function Caret(props){

    return(
        <div className="caret-container" onClick={() => {props.setVisible(!props.visible), props.setVisibleState()}}>
            <div className="caret">
                <PiCaretDoubleLeftBold size={'25px'}/>
            </div>
        </div>
    )
    
}