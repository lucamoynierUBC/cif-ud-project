import { useEffect, useState } from "react"
import useInterface from "../stores/useInterface"
import { useSpring, animated } from "@react-spring/web"
import "./MainInterface.css"
import Caret from "./Caret"
import Dropdown from "./Dropdown"

export default function MainInterface() {
    //TODO: also have to pass visible as a prop
    const [visible, setVisible] = useState(false)
    const setVisibleState = useInterface((state) => state.toggleVisible)
    

    useEffect(() => {
        const unsubscribeVisible = useInterface.subscribe(
            (state) => state.visible,
            (visible) => {
                
                console.log('visible set to: ', visible)
                setVisible(visible)

            }
        )
        return () => {
            unsubscribeVisible()
        }
    }, [])
    
    const springProps = useSpring({
        opacity: visible ? 1 : 0,
      });


    return(
        <div>
            {!visible && (<Caret visible={visible} setVisible={setVisible} setVisibleState={setVisibleState}></Caret>)}
            {visible && (<animated.div style={springProps} className="mainInterface">
                <div className="mainInterfaceContainer"  >
                    <div className="titleCloseBtn-layout">
                        <button className="titleCloseBtn" onClick={() => {setVisible(false), setVisibleState()}}> X </button>
                    </div>
                    <div className="title">
                        <h1> Single Family Home </h1>
                    </div>
                    <div className="body">
                        <img width={'300px'} height={'200px'} src="404image" ></img>
                        <p>Legally, [Character A]’s home is defined as a one “family” residence. 
                            Only certain changes are possible due to  its shape and structure. </p>

                        <Dropdown text="WHATS AN ADU"/>

                        <p>ADUs are also permissible for two family homes.</p>

                        <h2>Attatched ADU</h2>

                        <p>The first kind of ADU type is attached. This kind of unit often takes up an existing space in a house like an attached garage, 
                            but can also be a newly constructed space.
                        </p>
                        <p>This kind of ADU is particularly great on small lots or on lots where parking is not a need of the primary occupant.</p>
                        <p>Ample walkway space is required to the back of the unit in order to build this type of ADU.</p>

                        <h2>Detatched ADU</h2>
                        <p>The detached ADU is similar to the attached. The primary difference is that detached ADUs are not physically connected to their primary unit.
                        </p>
                        <p>
                            Like its attached counterpart, the detached ADU is particularly great on small lots or on lots where parking is not a need of the primary occupant, 
                            and ample walkway space is required to the back of the unit in order to build this type of ADU.
                        </p>
                        <h2>Attic ADU</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor at auctor urna nunc id cursus metus.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sociis natoque penatibus et magnis dis parturient montes.</p>
                        <h2>Basement Adu</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor at auctor urna nunc id cursus metus.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sociis natoque penatibus et magnis dis parturient montes.</p>
                    </div>
                    
                    <div className="footer"></div>


                </div>
            </animated.div>)}
        </div>

    )

}