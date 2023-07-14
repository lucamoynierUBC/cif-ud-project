import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.jsx'
import GUI from './GUI'
import { Loader } from '@react-three/drei'
import { Suspense } from 'react'
const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <>
    {/*//everything related to R3F goes into canvas, GUI goes outside  */}
        <Canvas>
            <Suspense fallback={null}>
                <Experience />
            </Suspense>
        </Canvas>
        <GUI></GUI>
        <Loader></Loader>

        
    </>

	

    


		
)