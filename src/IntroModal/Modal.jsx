import { useState } from "react";
import "./Modal.css"
import useModal from "../stores/useModal";
import Carousel from "./Carousel";
import { useTransition, animated } from "react-spring";
import ToggleButton from "./ToggleButton";

// this is the main component for the Modal/Carousel contains the backgorund and the carousel.
export default function Modal(){
    const [visible, setVisible] = useState(true)
    const spawn = useModal((state) => state.modalToggle)
    // const unSpawn = useGUI((state) => state.guiIntroTurnOn)
    // update the state without canceling the animation
    const transition = useTransition(visible, {
        from: { opacity: 0, transform: "translate(-100%, -100%)" },
        enter: { opacity: 1, transform: "translate(-50%, -50%)" },
        leave: { opacity: 0, transform: "translate(-100%, -100%)" },
        config: {
            tension: 300,    
            friction: 35
        },
    });

    // Handle modal visibility
    const handleToggle = () => {
        if (visible) {
            setVisible(false);
        } else {
            setVisible(true);
        }
    };

    return(
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
        <ToggleButton visible={visible} spawn={spawn} toggle={handleToggle}></ToggleButton>
    </div>
        


       
    )
}