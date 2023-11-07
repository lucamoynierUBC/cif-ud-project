
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
import MediumDensityBuilding from "./3DAssets/MediumDensityBuilding"
import Cityscape from "./3DAssets/Cityscape"


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
        <color args={["ivory"]} attach="background"/>
        <OrbitControls >
            <Camera />
        </OrbitControls>
        <Environment preset="city"/>
        
        {/* <BackgroundModel></BackgroundModel> */}
        <Cityscape></Cityscape>
        <Shed></Shed>
        <DetatchedAdu></DetatchedAdu>
        <House></House>
        {/* <Spawner></Spawner> */}
        {/* <Plot></Plot> */}
        <MediumDensityBuilding></MediumDensityBuilding>
        
        {/* Outline Effect contains the house model */}
        {/* <OutlineEffect></OutlineEffect>    */}
        
    </>
}