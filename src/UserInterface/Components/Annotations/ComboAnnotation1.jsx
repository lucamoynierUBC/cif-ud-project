import { Html } from "@react-three/drei"
import { useEffect, useState } from "react";
import { useSpring, config, animated } from "react-spring";
import useCamera from "../../../stores/useCamera";
import useConfigurator from "../../../stores/useConfigurator";

export default function ComboAnnotation1() {
    const [visible, setVisible] = useState(false)

    const [spring, api] = useSpring(() => ({
        width: '0px',
        opacity: 0,
        height: '1px', // Adjust thickness as needed
        backgroundColor: 'black', // Line color
        textAlign: 'right',
        fontSize: '12px',
        config: config.stiff,
    }))

    useEffect(() => {
        // Toggle popup
        const unsubscribeZoom = useCamera.subscribe(
            (state) => state.zoom,
            (zoom) => {
                if (zoom === "Combo" ) {
                    api.start({width: '150px', opacity: 100, delay: 2000})


                } else {
                    api.start({opacity:0, width:'0px', immediate: true})
                }
            }
        )
        const unsubcribeToggle = useConfigurator.subscribe(
            (state) => state.toggle,
            (toggle) => {
                if (Array.isArray(toggle) && toggle.length > 0) {
                    api.start({opacity:0, width:'0px', immediate: true})
                 
                } else {
                    api.start({width: '150px', opacity:100})
                } 
            }

        )
        return () => {
            unsubscribeZoom()
            unsubcribeToggle()
        }
    }, [])

    return (
        <Html position={[40,0,-10]}>
            <animated.div style={spring} >
                Lot size: minimum 5,000 sqft.
            </animated.div>
      </Html>
    )
}