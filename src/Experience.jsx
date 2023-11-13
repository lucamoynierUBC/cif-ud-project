
import useApp from "./stores/useApp"

import { OrbitControls } from "./ThreeJS/Controls"
import { useFrame } from "@react-three/fiber"
import { Cloud, Environment, OrthographicCamera, PerspectiveCamera, Resize, Sky, Stage, Stars } from "@react-three/drei"
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
    // const color = useApp((state) => {
    //     return state.color
    // })

   
    //
    function Rig({ children }) {
        const ref = useRef()
        useFrame((state) => {
          ref.current.rotation.y = THREE.MathUtils.lerp(ref.current.rotation.y, (state.mouse.x * Math.PI) / 60, 0.05)
          
        })
        return <group ref={ref}>{children}</group>
    }

    return <> 
        <color args={["#140b34"]} attach="background"/>
        {/* <Lighting></Lighting> */}
        <OrbitControls >
            <Camera />
        </OrbitControls>
        
        
        {/* <BackgroundModel></BackgroundModel> */}
        {/* <Lighting></Lighting> */}
        <Stars fade speed={10}/>

        <Stage adjustCamera={false} shadows={{type: 'contact', scale: [500, 600],  position: [0, 1, 0], opacity: .75, blur: 0.1, frames: 1}}>
            <Cityscape></Cityscape>
            <Shed></Shed>
            <DetatchedAdu></DetatchedAdu>
            <House></House>
            <MediumDensityBuilding></MediumDensityBuilding>
        </Stage>
       


       

        
        

        
        
        {/* Outline Effect contains the house model */}
        {/* <OutlineEffect></OutlineEffect>    */}
        
    </>
}