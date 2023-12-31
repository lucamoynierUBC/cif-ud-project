import { PointMaterialImpl } from "@react-three/drei";
import Birds from "../3DAssets/Birds";
import Person from "../3DAssets/Person";
import Bus from "../3DAssets/Bus";
import Car from "../3DAssets/Car";
import { useEffect, useState } from "react";
import useModal from "../stores/useModal";

// Spawner that will only render animated 3D assets when spawn is set to true. 
// Only spawns in objects once the intro modal is closed. 
export default function Spawner(){
    const [spawn, setSpawn] = useState(false)

    useEffect(() => {
        const unsubscribeSpawn = useModal.subscribe(
            (state) => state.modalPhase,
              (modalPhase) => {
                if (!modalPhase){
                  setSpawn(true)
                }
                if (modalPhase){
                    setSpawn(false)
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