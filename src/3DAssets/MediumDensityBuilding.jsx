import { useState, useEffect } from "react";
import useCamera from "../stores/useCamera";
import useConfigurator from "../stores/useConfigurator";

export default function MediumDensityBuilding() {
    const setZoom = useCamera((state) => state.setZoom)
    const [scale, setScale] = useState([10, 10, 4])

    useEffect(() => {
            const unsubscribeConfigurator = useConfigurator.subscribe(
                (state) => state.toggle,
                (toggle) => {
                    if (toggle == "Medium Density") {
                        setScale([10, 15, 4])

                    } else {
                        setScale([10, 10, 4])
                    }
                }
            
            )

            return () => {
                unsubscribeConfigurator()
            }
        }, [])

    return (
        <mesh position={[35, 0,-1.5]} scale={scale} onClick={() => setZoom("Medium Density")}>
            {/* <meshPhongMaterial /> */}
            <meshNormalMaterial></meshNormalMaterial>
           
            <boxGeometry></boxGeometry>
        </mesh>
    )
}