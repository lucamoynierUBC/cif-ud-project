import { Selection, EffectComposer, Outline, DepthOfField } from "@react-three/postprocessing";
import House from "../House/House";

import { useEffect, useState } from "react";
import useGUI from "../stores/useModal";

export default function OutlineEffect() {
    const [bokehValue, setBokehValue] = useState(6)
    
    
    // useEffect(() => {
    //     const unsubscribeBlur = useGUI.subscribe(
    //         (state) => state.guiIntroPhase,
    //           (guiIntroPhase) => {
    //             if (guiIntroPhase === 'off'){
    //               setBokehValue(0)
    //             }
    //           }
    //     )
    //     return () => {
    //         unsubscribeBlur()
    //     }
    // },[])

    
    return <Selection>
        <EffectComposer multisampling={8} autoClear={false}>
                <Outline  xRay={false} blur={true} visibleEdgeColor={"white"} hiddenEdgeColor={"white"} edgeStrength={100} width={1000} />
                {/* <DepthOfField bokehScale={bokehValue}/> */}
        </EffectComposer>
        <House></House>
        {/* <CustomPlot></CustomPlot> */}

    </Selection>
}