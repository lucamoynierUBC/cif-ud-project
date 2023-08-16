import { useState } from "react";
import "./Modal.css"
import useGUI from "../stores/useModal";
import Carousel from "./Carousel";

export default function Modal(){
    const [visible, setVisible] = useState(true)
    const turnOffBlur = useGUI((state) => state.guiIntroTurnOff)

    return(
        visible && <div className="modalBackground" onPointerOver={(event) => event.stopPropagation()} onPointerOut={ (event) => event.stopPropagation()}>
            <div className="modalContainer" >
                <div className="titleBtn-layout">
                    <button onClick={() => {setVisible(false), turnOffBlur()}} className="titleBtn"> &#x2715; </button>
                </div>
                <Carousel></Carousel>
            </div>
        </div>
    )
}