
import useApp from "./stores/useApp"

import { OrbitControls } from "./ThreeJS/Controls"
import { useFrame } from "@react-three/fiber"
import { Cloud, Environment, OrthographicCamera, PerspectiveCamera, Sky } from "@react-three/drei"
import OutlineEffect from "./ThreeJS/OutlineEffect"
import BackgroundModel from "./3DAssets/BackgroundModel"
import Camera from "./ThreeJS/Camera"
import Shed from "./House/Shed"
import DetatchedAdu from "./House/DetatchedAdu"
import Plot from "./ThreeJS/Plot"
import Spawner from "./ThreeJS/Spawner"
import House from "./House/House"
import * as THREE from 'three'
import { useRef } from "react"

// Puts everything related to Three.js inside a main class
export default function Experience() {
    const color = useApp((state) => {
        return state.color
    })

    //
    function Rig({ children }) {
        const ref = useRef()
        useFrame((state) => {
          ref.current.rotation.y = THREE.MathUtils.lerp(ref.current.rotation.y, (state.mouse.x * Math.PI) / 60, 0.05)
          
        })
        return <group ref={ref}>{children}</group>
    }

    return <> 
        <directionalLight position={[1, 2, 3]} intensity={1.5}/>
        <color args={["ivory"]} attach="background"/>
        <OrbitControls>
            <Camera></Camera>
        </OrbitControls>
        <Environment preset="city"/>
        <Rig>
            <BackgroundModel></BackgroundModel>
            <Shed></Shed>
            <DetatchedAdu></DetatchedAdu>
            <House></House>
            <Spawner></Spawner>
            <Plot></Plot>
        </Rig>
        {/* Outline Effect contains the house model */}
        {/* <OutlineEffect></OutlineEffect>    */}
        
    </>
}