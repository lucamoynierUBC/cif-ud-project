import * as THREE from 'three'
import useApp from './stores/useApp'
import Adu from './Adu'
import { OrbitControls } from './Controls'
import { Physics, RigidBody } from '@react-three/rapier'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import House from './House'
import { useState } from 'react'
import TestObject from './TestObject'
import { EffectComposer, Selection, Outline } from '@react-three/postprocessing'


  
    





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
    



    })

   
    

    return <>

        
        <directionalLight position={[1, 2, 3]} intensity={1.5}/>
        <ambientLight intensity={0.5}/>

        <OrbitControls>
            <Physics debug>
                {/* <RigidBody  gravityScale={0}>
                    <Cube color={color} position={[6, 1, 0]}/>
                </RigidBody> */}
                {/* rigit body does not move because it is set to fixed */}
                <RigidBody
                    ref={aduRigidBody} 
                    type="kinematicPosition">
                    <Adu id={4} onPositionChange={handlePositionChange} position={[-2, 0, 0]}/>
                </RigidBody>
        


            </Physics>
            <Adu id={2} onPositionChange={handlePositionChange} position={[2, 0, 0]}/>
            <Adu id={3} onPositionChange={handlePositionChange} position={[0, -1, 0]}/>
        

            {/* <mesh rotation-x={-(Math.PI/2)} scale={10} position-y={-0.5}>
                <planeGeometry />
                <meshStandardMaterial color = 'beige' />
            </mesh> */}
        </OrbitControls>

        
        
        
        
        <mesh receiveShadow rotation-x={-(Math.PI/2)} scale-x={4} scale-y={10} position-y={-0.5}>
            <planeGeometry />
            <meshStandardMaterial opacity={.5} color = 'darkgrey' />
        </mesh>

        <House></House>
        <Selection>
            <EffectComposer multisampling={8} autoClear={false}>
                <Outline blur visibleEdgeColor="white" edgeStrength={100} width={1000} />
            </EffectComposer>
            <TestObject position={[5, 3, 0]}/>
            <TestObject position={[5, 1, 0]}/>

        </Selection>
       
        



        
     

    </>
}