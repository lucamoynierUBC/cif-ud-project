import { Selection, EffectComposer, Outline, Bloom, Select, SelectiveBloom, GodRays, Pixelation } from "@react-three/postprocessing";
import House from "../House/House";
import { useEffect, useState } from "react";
import useGUI from "../stores/useModal";
import MediumDensityBuilding from "../3DAssets/MediumDensityBuilding";
import Cityscape from "../3DAssets/Cityscape";

export default function OutlineEffect() {
    const [bokehValue, setBokehValue] = useState(6)
    
    // useEffect(() => {
    //     const unsubscribeBlur = useGUI.subscribe(
    //         (state) => state.guiIntroPhase,
    //           (guiIntroPhase) => {
    //             if (guiIntroPhase === "off"){
    //               setBokehValue(0)
    //             }
    //           }
    //     )
    //     return () => {
    //         unsubscribeBlur()
    //     }
    // },[])

    return (
    <Selection >

            {/* <EffectComposer multisampling={8}>
                <Bloom luminanceThreshold={0}
          luminanceSmoothing={0.9}
          opacity={3}></Bloom>
            </EffectComposer>
            <Select enabled>
                <House></House>
                <MediumDensityBuilding></MediumDensityBuilding>

            </Select> */}
            </Selection>
    )
}