import "./style.css"
import ReactDOM from "react-dom/client"
import { Canvas } from "@react-three/fiber"
import Experience from "./Experience.jsx"
import { Suspense } from "react"
import { Loader, Stats} from "@react-three/drei"

import MainInterface from "./UserInterface/MainInterface"
import Nav from "./Nav/Nav"
import { Route, Switch } from "wouter"

const root = ReactDOM.createRoot(document.querySelector("#root"))
import { ConfigProvider, theme } from 'antd';



// Entry point into react application. Place main components inside here. 
root.render(
    <>
    {/*//everything related to R3F goes into canvas, GUI goes outside  */}
        <Suspense fallback={null}>
            <Canvas shadows>
                    <Experience/>
                    <Stats></Stats>
            </Canvas>
            
            <ConfigProvider theme={{ hashed: false}}>
           
                    
              
               
                <MainInterface/>
         
            </ConfigProvider>
            <Nav></Nav>
        </Suspense>    
        <Loader />
    </>
		
)