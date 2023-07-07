
import { Html } from "@react-three/drei"
import { useRef, useState } from "react"
import { Select, Selection, EffectComposer, Outline } from '@react-three/postprocessing'
import Interface from "./Interface"


//color is a prop so it can be changed by the gui.
export default function Cube({color, props, position}) {
    const ref = useRef()
    
    //hover states, true when mouse is over object, false otherwise
    const [hovered, hover] = useState(null)
    console.log(hovered)

    return <Selection>
        <EffectComposer autoClear={false}>
            <Outline blur visibleEdgeColor="red" edgeStrength={100} width={1000} />
        </EffectComposer>
            <Select enabled={hovered}>
            <mesh ref={ref} 
            {...props} 
            onPointerOver={() => hover(true)} 
            onPointerOut={() => hover(false)}
            scale-x={1.5}
            scale-y={1.5}
            scale-z={2}
            position={position}>
                <boxGeometry />
                <meshStandardMaterial color= {color}/>
                {/* <Html 
                    position={[1, 1, 0]}
                    wrapperClass="testLabel"
                    center
                    distanceFactor={8}
                >Click Me</Html> */}
                <Interface/>
            </mesh>
        </Select>
    </Selection>
    
    
    
    


}