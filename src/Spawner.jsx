import { PointMaterialImpl } from "@react-three/drei";
import Birds from "./3DAssets/Birds";
import Person from "./3DAssets/Person";
import Bus from "./3DAssets/Bus";
import Car from "./3DAssets/Car";
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
            <Car></Car>
        
        </group>
    )
}