// TODO: make the outline class its own component

import { Selection, EffectComposer, Outline } from "@react-three/postprocessing";
import House from "./House";
import TestObject from "./TestObject";

export default function OutlineEffect() {
    return <Selection>
        <EffectComposer multisampling={8} autoClear={false}>
                <Outline  xRay={false} blur={true} visibleEdgeColor={"white"} hiddenEdgeColor={"white"} edgeStrength={100} width={1000} />
        </EffectComposer>
        <House></House>

    </Selection>
}