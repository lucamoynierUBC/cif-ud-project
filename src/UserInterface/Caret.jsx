
import './Caret.css'
import { PiCaretDoubleLeftBold } from "react-icons/pi";
import useCamera from '../stores/useCamera';

export default function Caret(props){
    const zoom = useCamera((state) => state.zoomClose)

    return(
        <div className="caret-container" onClick={() => {props.setVisible(!props.visible), props.setVisibleState(), zoom()}}>
            <div className="caret">
                <PiCaretDoubleLeftBold size={'25px'}/>
            </div>
        </div>
    )
    
}