import * as THREE from 'three'
import { OrbitControls, TransformControls, PivotControls, Html } from "@react-three/drei"
import Cube from './Cube'
import useApp from './stores/useApp'
import Adu from './Adu'


export default function Experience() {

    //retrieving color from store, state is our store information, 
    // if color changes in store the component will re-render
    const color = useApp((state) => {
        return state.color
    })
    console.log(color)
    

    return <>
        <OrbitControls makeDefault />
        <directionalLight position={[1, 2, 3]} intensity={1.5}/>
        <ambientLight intensity={0.5}/>

        
        <Cube color={color}/>
        <Adu />
        


        <mesh rotation-x={-(Math.PI/2)} scale={10} position-y={-0.5}>
            <planeGeometry />
            <meshStandardMaterial color = 'beige' />
        </mesh>
     

    </>
}