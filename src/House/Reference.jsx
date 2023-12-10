import { Html } from "@react-three/drei";
import React, { useRef, useEffect, useState} from "react";
import useRefStore from "../stores/useRefStore";
import useCamera from "../stores/useCamera";
import { PiAlignCenterHorizontalSimple } from "react-icons/pi";


export default function Reference() {
    const ref = useRef(null);
    const { setRef } = useRefStore();
    const [visible, setVisible] = useState(true)

    useEffect(() => {
        setRef(ref);
        const unsubscibeZoom = useCamera.subscribe(
            (state) => state.zoom,
            (zoom) => {
                if (zoom === 'Map'){
                    
                    setRef(ref);
                    setVisible(false)
                }
            }   
        ) 
        
        return () => {
            unsubscibeZoom()

        }
    }, []);
    
    const styles = {
        width: '50px',
        height: '50px',
        PointerEvents: 'none',
        background: 'none'
      };



    return (
        visible && <Html position={[-100, 100, -80]} ref={ref} scale={20}>
            <div style={styles}/>
        </Html>
    )
}