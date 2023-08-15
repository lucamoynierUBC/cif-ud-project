import { useEffect, useRef, useState } from "react"
import * as THREE from "three";
import { gsap } from "gsap";
import { useFrame } from "@react-three/fiber";
import useFlow from "./stores/useFlow";
import { Html } from "@react-three/drei";

// NOT USED
export default function Arrow() {
    const arrowHelperRef = useRef(null);
    const [animate, setAnimate] = useState(false)
    const [visible, setVisible] = useState(false)
    const [arrowLength, setArrowLength] = useState(0); // State for arrow length

        useEffect(() => {
            // Access the arrowHelper instance through the ref
            const unsubscribeAnimate = useFlow.subscribe(
                (state) => state.phase,
                (phase) => {
                    if (phase === 'interaction10'){
                        setAnimate(true)
                        setVisible(true)
                    }
                }
            )
            return () => {
                unsubscribeAnimate()
            }
        }, []);

        // var arrowLength = 0
        useFrame(() => {
            if (animate){
                const arrowHelper = arrowHelperRef.current;
                const newColor = new THREE.Color("black")
                arrowHelper.setColor(newColor)
                setArrowLength((prevArrowLength) => prevArrowLength + 0.1);
                if (arrowLength < 4.7) {
                    arrowHelper.setLength(arrowLength, 0, 0)
                    
                } else if (arrowLength >= 5) {
                    setAnimate(false)

                }
            }       
        })


        
        return visible && (<arrowHelper ref={arrowHelperRef} position={[-4.5, 0, -2]}>
            <Html className="arrowLengthContainer" position={[1, 0, 3.5]} center>{`${Math.round(arrowLength.toFixed(2) * 5) - 1} feet`}</Html>
        </arrowHelper>)

}
    