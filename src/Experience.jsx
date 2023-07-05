import * as THREE from 'three'
import Cube from './Cube'
import useApp from './stores/useApp'
import Adu from './Adu'
import { OrbitControls } from './Controls'
import { Physics, RigidBody } from '@react-three/rapier'






export default function Experience() {

   
    const handlePositionChange = ({ x, z }) => {
        console.log("X position:", x)
        console.log("Z position:", z)
    }


    //retrieving color from store, state is our store information, 
    // if color changes in store the component will re-render
    const color = useApp((state) => {
        return state.color
    })
    console.log(color)

   
    

    return <>

        
        <directionalLight position={[1, 2, 3]} intensity={1.5}/>
        <ambientLight intensity={0.5}/>

        <OrbitControls>
            <Physics debug>
                <RigidBody type="fixed">
                    <Cube color={color}/>
                </RigidBody>
                {/* rigit body does not move because it is set to fixed */}
                <RigidBody 
                    type="kinematicPosition">
                    <Adu onPositionChange={handlePositionChange}/>
                </RigidBody>


            </Physics>
        

            <mesh rotation-x={-(Math.PI/2)} scale={10} position-y={-0.5}>
                <planeGeometry />
                <meshStandardMaterial color = 'beige' />
            </mesh>
        </OrbitControls>

        
        
        
        
        <mesh rotation-x={-(Math.PI/2)} scale={10} position-y={-0.5}>
            <planeGeometry />
            <meshStandardMaterial color = 'beige' />
        </mesh>
     

    </>
}