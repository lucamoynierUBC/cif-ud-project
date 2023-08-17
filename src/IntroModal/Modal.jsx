import { useState } from "react";
import "./Modal.css"
import useGUI from "../stores/useModal";
import Carousel from "./Carousel";
import { useTransition, animated } from "react-spring";
import ToggleButton from "./ToggleButton";

export default function Modal(){
    const [visible, setVisible] = useState(true)
    const [render, setRender] = useState(true)
    const spawn = useGUI((state) => state.guiIntroTurnOff)
    const unSpawn = useGUI((state) => state.guiIntroTurnOn)

    const transition = useTransition(visible, {
        from: { opacity: 0, transform: "translate(-100%, -100%)" },
        enter: { opacity: 1, transform: "translate(-50%, -50%)" },
        leave: { opacity: 0, transform: "translate(-100%, -100%)" },
        config: {
            tension: 300,    
            friction: 25
        },
    });

    const handleToggle = () => {
        if (visible) {
            setVisible(false);
        } else {
            setVisible(true);
        }
    };


    

    return(
        // visible && <div className="modalBackground" onPointerOver={(event) => event.stopPropagation()} onPointerOut={ (event) => event.stopPropagation()}>
        //     <div className="modalContainer" >
        //         <div className="titleBtn-layout">
        //             <button onClick={() => {setVisible(false), turnOffBlur()}} className="titleBtn"> &#x2715; </button>
        //         </div>
        //         <Carousel></Carousel>
        //     </div>
        // </div>
        <div className="background">
            {transition((style, item) =>
                item && (
                    <div className="modalBackground" onPointerOver={(event) => event.stopPropagation()} onPointerOut={(event) => event.stopPropagation()}>
                        <animated.div className="modalContainer" style={style}>
                            <div className="titleBtn-layout">
                                <button onClick={() => {handleToggle(), spawn()}} className="titleBtn">
                                    &#x2715;
                                </button>
                            </div>
                            <Carousel></Carousel>
                            </animated.div>
                        </div>
                )
            )}
        <ToggleButton unSpawn={unSpawn} toggle={handleToggle}></ToggleButton>
    </div>
        


       
    )
}