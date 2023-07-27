import { useEffect, useState } from "react"
import useInterface from "../stores/useInterface"
import { useSpring, animated } from "@react-spring/web"
import "./MainInterface.css"

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
        <animated.div style={springProps} className="mainInterface">
            <div className="mainInterfaceContainer"  >
                <div className="titleCloseBtn-layout">
                    <button className="titleCloseBtn" onClick={() => {setVisible(false), setVisibleState()}}> X </button>
                </div>
                <div className="title">
                    <h1> Single Family Home </h1>
                </div>
                <div className="body">
                    <p>Legally, [Character A]’s home is defined as a one “family” residence. 
                        Only certain changes are possible due to  its shape and structure. </p>
                </div>
                <div className="footer"></div>

            </div>
        </animated.div>

    )

}