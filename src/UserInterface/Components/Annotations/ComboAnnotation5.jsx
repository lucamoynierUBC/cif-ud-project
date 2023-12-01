import { Html } from "@react-three/drei"
import { useEffect, useState } from "react";
import { useSpring, config, animated } from "react-spring";
import useConfigurator from "../../../stores/useConfigurator";
import useCamera from "../../../stores/useCamera";

export default function ComboAnnotation5() {
    const [visible, setVisible, forceUpdate] = useState(false)

    const [spring, api] = useSpring(() => ({
        width: '0px',
        pointerEvents: 'none',
        opacity: 0,
        height: '1px', // Adjust thickness as needed
        backgroundColor: 'black', // Line color
        textAlign: 'right',
        fontSize: '12px',
        config: config.stiff,
    }))

    useEffect(() => {
        // Toggle popup
        const unsubcribeToggle = useConfigurator.subscribe(
            (state) => state.toggle,
            (toggle) => {
                let infillToggle = false
                let conversionToggle = false
                if (Array.isArray(toggle) && toggle.length > 0) {
                    toggle.forEach((t) => {
                        if (t === 2) {
                            infillToggle = true
                        }
                        if (t == 1) {
                            conversionToggle = true
                        }
                    });
                } if (infillToggle && !conversionToggle) {
                    api.start({width: '150px', opacity: 100})
                }
                
                else {
                    api.start({opacity: 0, width: '0px', immediate: true})
                }
            }

        )
        const unsubscribeZoom = useCamera.subscribe(
            (state) => state.zoom,
            (zoom) => {
                if (zoom === "Map" ) {
                    api.start({opacity: 0, width: '0px', immediate: true})
                }
            }
        )
        return () => {
            unsubcribeToggle(),
            unsubscribeZoom()
        }
    }, [])

    return (
        <Html position={[-10,10,10]}>
            <animated.div style={spring} >
                Build residential unit on existing building
            </animated.div>
      </Html>
    )
}