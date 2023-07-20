
import useApp from './stores/useApp'
import Adu from './Adu'
import { OrbitControls } from './Controls'
import { Physics, RigidBody } from '@react-three/rapier'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { EffectComposer, Selection, Outline } from '@react-three/postprocessing'
import { Cloud, Environment, OrthographicCamera, PerspectiveCamera, Sky } from '@react-three/drei'
import OutlineEffect from './OutlineEffect'
import BackgroundModel from './BackgroundModel'
import Camera from './Camera'
import Birds from './Birds'
import Shed from './Shed'







  
    





export default function Experience() {

    //figure whats going on here, error is occuring because both ADU's use the same ref,
    // TODO: fix later
    const aduRigidBody = useRef()
    const aduPosition = useRef({x: 0, z: 0})
    

   
    const handlePositionChange = ({ x, z }) => {
        aduPosition.current = {x, z}
        // console.log("X position:", x)
        // console.log("Z position:", z)
    }


    //retrieving color from store, state is our store information, 
    // if color changes in store the component will re-render
    const color = useApp((state) => {
        return state.color
    })
    console.log(color)


    useFrame(() => {
        const {x, z} = aduPosition.current
        // console.log("Rigid Body x: ", x)
        // console.log("Rigid Body z: ", z)
        aduRigidBody.current.setNextKinematicTranslation({x: x, y: 0,  z: z})

        //set camera parameters here

        
    



    })

    return <>

        
        <directionalLight position={[1, 2, 3]} intensity={1.5}/>
        <ambientLight intensity={0.5}/>
        <color args={['ivory']} attach="background"/>
        <Camera></Camera>
        <OrbitControls>
            <Physics debug>
                {/* <RigidBody  gravityScale={0}>
                    {/* <Cube color={color} position={[6, 1, 0]}/> */}
                {/*</RigidBody> */}
                {/* rigid body does not move because it is set to fixed */}
                <RigidBody
                    ref={aduRigidBody} 
                    type="kinematicPosition">
                    <Adu id={4} onPositionChange={handlePositionChange} position={[-5, 1, -5]} scale={[2, 2, 2]}/>
                </RigidBody>
        


            </Physics>
            <Adu id={2} onPositionChange={handlePositionChange} position={[2, 0, 0]} scale={[3, 3, 3]}/>
            <Adu id={3} onPositionChange={handlePositionChange} position={[0, -0.75, .4]} scale={[2.5, 0.75, 4.25]}/>
        

            {/* <mesh rotation-x={-(Math.PI/2)} scale={10} position-y={-0.5}>
                <planeGeometry />
                <meshStandardMaterial color = 'beige' />
            </mesh> */}
        </OrbitControls>

        {/* <mesh receiveShadow rotation-x={-(Math.PI/2)} scale-x={4} scale-y={10} position-y={-0.5}>
            <planeGeometry  />
            <meshStandardMaterial color = 'darkgrey' />
        </mesh> */}
        {/* <Cloud position={[0,7,0]} scale={0.3}/>
        <Cloud position={[4,7,-4]} scale={0.3}/>
        <Cloud position={[-5,7,1]} scale={0.3}/> */}
        <Environment preset='city'/>
        <BackgroundModel></BackgroundModel>
        <Shed></Shed>
        <Birds></Birds>
        
   


        <OutlineEffect></OutlineEffect>
        
    </>
}