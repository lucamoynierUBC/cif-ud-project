
import useApp from './stores/useApp'
import Adu from './Adu'
import { OrbitControls } from './ThreeJS/Controls'
import { Physics, RigidBody } from '@react-three/rapier'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { EffectComposer, Selection, Outline } from '@react-three/postprocessing'
import { Cloud, Environment, OrthographicCamera, PerspectiveCamera, Sky } from '@react-three/drei'
import OutlineEffect from './ThreeJS/OutlineEffect'
import BackgroundModel from './3DAssets/BackgroundModel'
import Camera from './ThreeJS/Camera'
import Birds from './3DAssets/Birds'
import Shed from './House/Shed'
import Arrow from './Arrow'
import PathModel from './PathModel'
import Person from './3DAssets/Person'
import DetatchedAdu from './House/DetatchedAdu'
import Bus from './3DAssets/Bus'
import Plot from './Plot'
import Spawner from './ThreeJS/Spawner'

// Puts everything related to Three.js inside a main class
export default function Experience() {
    const color = useApp((state) => {
        return state.color
    })

    return <> 
        <directionalLight position={[1, 2, 3]} intensity={1.5}/>
        <color args={['ivory']} attach="background"/>
        <OrbitControls>
            <Camera></Camera>
        </OrbitControls>
        <Environment preset='city'/>
        <BackgroundModel></BackgroundModel>
        <Shed></Shed>
        <DetatchedAdu></DetatchedAdu>
        <Spawner></Spawner>
        <Plot></Plot>
        <Arrow></Arrow>
        <PathModel></PathModel>
        <OutlineEffect></OutlineEffect>
        
    </>
}