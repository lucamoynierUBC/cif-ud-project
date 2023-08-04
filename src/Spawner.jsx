import { PointMaterialImpl } from "@react-three/drei";
import Birds from "./Birds";
import Person from "./Person";
import Bus from "./Bus";
import { useState } from "react";

export default function Spawner(){
    const [spawn, setSpawn] = useState(true)
    return(
        spawn && <group>
            <Birds></Birds>
            <Person position={[-16,-.4,0]} scale={0.2}></Person>
            <Bus></Bus>
        </group>
    )
}