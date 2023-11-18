import { Html } from "@react-three/drei";
import React, { useRef, useEffect} from "react";
import useRefStore from "../stores/useRefStore";


export default function Reference() {
    const ref = useRef(null);
    const { setRef } = useRefStore();

    useEffect(() => {
        
        setRef(ref);

    }, []);
    
    const styles = {
        width: '50px',
        height: '50px',
        PointerEvents: 'none',
        background: 'none'
      };

    return (
        <Html position={[-100, 100, -80]} scale={20}>
            <div ref={ref} style={styles}>
            </div>
        </Html>
    )
}