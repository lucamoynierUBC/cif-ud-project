import { useState } from "react";
import "./Modal.css"
import useGUI from "../stores/useGUI";
export default function Modal(){
    const [visible, setVisible] = useState(true)
    const turnOffBlur = useGUI((state) => state.guiIntroTurnOff)

    return(
        visible && <div className="modalBackground">
            <div className="modalContainer">
                <div className="titleBtn-layout">
                    <button onClick={() => {setVisible(false), turnOffBlur()}} className="titleBtn">X</button>
                </div>
                <div className="title">
                    <h1> Welcome to the tool!</h1>
                </div>
                <div className="body">
                    <p>This interactive housing model simulates a low density New York City neighborhood. 
                        To navigate the tool:</p>
                </div>

            </div>

        </div>
    )
}