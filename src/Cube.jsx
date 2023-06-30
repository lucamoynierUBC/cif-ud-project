
import { Html } from "@react-three/drei"
import { useRef, useState } from "react"
import { Select } from '@react-three/postprocessing'


//color is a prop so it can be changed by the gui.
export default function Cube({color, props}) {
    const ref = useRef()
    const [hovered, hover] = useState(null)
    console.log(hovered)

    return <Select enabled={hovered}>
        <mesh ref={ref} {...props} onPointerOver={() => hover(true)} onPointerOut={() => hover(false)}>
            <boxGeometry />
            <meshStandardMaterial color= {color}/>
            <Html 
                position={[1, 1, 0]}
                wrapperClass="testLabel"
                center
                distanceFactor={5}
            
            >Hello World!🌎</Html>
        </mesh>
    </Select>
    
    


}