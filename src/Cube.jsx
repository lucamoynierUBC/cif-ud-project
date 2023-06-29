import { Html, PivotControls } from "@react-three/drei"
import { useStore } from "zustand"


export default function Cube({color}) {

   



    return <mesh>
            <boxGeometry />
            <meshStandardMaterial color= {color}/>
            <Html 
                position={[1, 1, 0]}
                wrapperClass="testLabel"
                center
                distanceFactor={5}
            
            >Hello World!🌎</Html>
        </mesh>
    


}