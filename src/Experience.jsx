
import useApp from "./stores/useApp"

import { OrbitControls } from "./ThreeJS/Controls"

import { Cloud, Environment, OrthographicCamera, PerspectiveCamera, Sky } from "@react-three/drei"
import OutlineEffect from "./ThreeJS/OutlineEffect"
import BackgroundModel from "./3DAssets/BackgroundModel"
import Camera from "./ThreeJS/Camera"
import Shed from "./House/Shed"
import DetatchedAdu from "./House/DetatchedAdu"
import Plot from "./Depracated/Plot"
import Spawner from "./ThreeJS/Spawner"

// Puts everything related to Three.js inside a main class
export default function Experience() {
    const color = useApp((state) => {
        return state.color
    })

    return <> 
        <directionalLight position={[1, 2, 3]} intensity={1.5}/>
        <color args={["ivory"]} attach="background"/>
        <OrbitControls>
            <Camera></Camera>
        </OrbitControls>
        <Environment preset="city"/>
        <BackgroundModel></BackgroundModel>
        <Shed></Shed>
        <DetatchedAdu></DetatchedAdu>
        <Spawner></Spawner>
        <Plot></Plot>
        {/* <Arrow></Arrow>
        <PathModel></PathModel> */}
        <OutlineEffect></OutlineEffect>   
    </>
}