
import { Select } from "@react-three/postprocessing"
import { useRef, useState} from "react"


export default function TestObject(props) {

    const ref = useRef()
    const [hovered, hover] = useState(null)
    console.log(hovered)
    return <Select enabled={hovered}>
        <mesh ref={ref} {...props}
        onPointerOver={() => hover(true)} 
        onPointerOut={() => hover(false)}>
            <boxGeometry />
            <meshStandardMaterial color='indianred' />
        </mesh>
    </Select>
}