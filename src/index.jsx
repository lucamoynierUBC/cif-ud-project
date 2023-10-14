import "./style.css"
import ReactDOM from "react-dom/client"
import { Canvas } from "@react-three/fiber"
import Experience from "./Experience.jsx"
import { Suspense } from "react"
import { Loader } from "@react-three/drei"

import MainInterface from "./UserInterface/MainInterface"
import Nav from "./Nav/Nav"
import Modal from "./IntroModal/Modal"

const root = ReactDOM.createRoot(document.querySelector("#root"))
import { ConfigProvider } from 'antd';

// Entry point into react application. Place main components inside here. 
root.render(
    <>
    {/*//everything related to R3F goes into canvas, GUI goes outside  */}
        <Canvas>
            <Suspense fallback={null}>
                <Experience />
            </Suspense>
        </Canvas>
        <Loader />
        
        
        <ConfigProvider theme={{ hashed: false }}> 
            <MainInterface></MainInterface>
        </ConfigProvider>
        <Nav></Nav>
        {/* <GUI></GUI>   */}
        <Modal></Modal>

        
    </>

	

    


		
)