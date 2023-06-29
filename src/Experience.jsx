import * as THREE from 'three'
import { OrbitControls, TransformControls, PivotControls, Html } from "@react-three/drei"
import { useState } from "react"
import GUI from './GUI'

export default function Experience() {

    // creating a useState hook, seeting the original color as purple
    // the setColor function will be called everytime the button in the gui is clicked
    const [color, setColor] = useState('purple')

    const changeColor = () => {
        setColor(new THREE.Color(Math.random() * 0xffffff))
    }



    


    return <>
        <OrbitControls makeDefault />
        <directionalLight position={[1, 2, 3]} intensity={1.5}/>
        <ambientLight intensity={0.5}/>

        <PivotControls anchor={[0, 0, 0]} depthTest={false}>
            <mesh>
                <boxGeometry />
                <meshStandardMaterial color= {color}/>
                <Html 
                    position={[1, 1, 0]}
                    wrapperClass="testLabel"
                    center
                    distanceFactor={5}
                
                >Hello World!🌎</Html>
            </mesh>

        </PivotControls>
    
        <mesh rotation-x={-(Math.PI/2)} scale={10} position-y={-0.5}>
            <planeGeometry />
            <meshStandardMaterial color = 'beige' />
        </mesh>
        {/* <GUI /> */}

    </>
}