import './Caret.css'
import { PiCaretDoubleLeftBold } from "react-icons/pi";
import useCamera from '../stores/useCamera';

// Component for double left caret icon/button
export default function Caret(props){
    const zoom = useCamera((state) => state.zoomClose)

    return(
        // If caret is clicked on zoom, and toggle its visibility and the visibility of its parent component
        <div className="caret-container" onClick={() => {props.setVisible(!props.visible), props.setVisibleState(), zoom()}}>
            <div className="caret">
                <PiCaretDoubleLeftBold size={'25px'}/>
            </div>
        </div>
    )
}