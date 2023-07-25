import { useEffect, useState } from "react"
import useInterface from "../stores/useInterface"
import { useSpring, animated } from "@react-spring/web"

export default function MainInterface() {
    const [visible, setVisible] = useState(false)
    

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
            <div className="mainInterfaceLayout"  >
                <h1> Lorem Ipsum</h1>

            </div>
        </animated.div>

    )

}