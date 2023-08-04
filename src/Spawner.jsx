import { PointMaterialImpl } from "@react-three/drei";
import Birds from "./Birds";
import Person from "./Person";
import Bus from "./Bus";
import { useEffect, useState } from "react";
import useGUI from "./stores/useGUI";

export default function Spawner(){
    const [spawn, setSpawn] = useState(false)

    useEffect(() => {
        const unsubscribeSpawn = useGUI.subscribe(
            (state) => state.guiIntroPhase,
              (guiIntroPhase) => {
                if (guiIntroPhase === 'off'){
                  setSpawn(true)
                }
              }
        )
        return () => {
            unsubscribeSpawn()
        }
    },[])
    return(
        spawn && <group>
            <Birds></Birds>
            <Person position={[-16,-.4,0]} scale={0.2}></Person>
            <Bus></Bus>
        </group>
    )
}