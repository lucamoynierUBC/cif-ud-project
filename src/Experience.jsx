
import useApp from "./stores/useApp"

import { OrbitControls } from "./ThreeJS/Controls"
import { useFrame, useThree } from "@react-three/fiber"
import { Environment, OrthographicCamera, PerspectiveCamera, Resize, Sky, Stage, Stars } from "@react-three/drei"
import OutlineEffect from "./ThreeJS/OutlineEffect"
import BackgroundModel from "./3DAssets/BackgroundModel"
import Shed from "./House/Shed"
import DetatchedAdu from "./House/DetatchedAdu"
import Plot from "./ThreeJS/Plot"
import Spawner from "./ThreeJS/Spawner"
import House from "./House/House"
import * as THREE from 'three'
import { useRef, useEffect, useState } from "react"
import MediumDensityBuilding from "./3DAssets/MediumDensityBuilding"
import Cityscape from "./3DAssets/Cityscape"
import { Bloom, EffectComposer, Selection } from "@react-three/postprocessing"
import Camera from "./ThreeJS/Camera"
import useClosestObject from "./stores/useClosestObject"


// Puts everything related to Three.js inside a main class
export default function Experience() {

  const setClosestObject = useClosestObject((state) => state.setClosestObject)

    function Rig({ children }) {
        const ref = useRef()
        useFrame((state) => {
          ref.current.rotation.y = THREE.MathUtils.lerp(ref.current.rotation.y, (state.mouse.x * Math.PI) / 60, 0.05)
          
        })
        return <group ref={ref}>{children}</group>
    }

    // find x, y coordinates 
    const sizes = {
        width: window.innerWidth,
        height: window.innerHeight
    }

    const mouse = new THREE.Vector2

    useEffect(() => {
        const onMouseMove = (event) => {
          mouse.x = (event.clientX / sizes.width) * 2 - 1;
          mouse.y = -(event.clientY / sizes.height) * 2 + 1;
        };
      
        window.addEventListener('mousemove', onMouseMove);
        return () => {
          window.removeEventListener('mousemove', onMouseMove);
        };
      }, [sizes]);

    const {camera, scene} = useThree()
  

    let objectsToCheck = []
    scene.traverse(function (child) {
        if (child.name === "UAP" || child.name === "ADU") {
            objectsToCheck.push(child)
        }
    })


    useFrame(() => {
        let closestObject = null;
        let minimumDistance = Infinity;
        objectsToCheck.forEach(object => {
            if (object) {
              const vector = new THREE.Vector3();
              object.getWorldPosition(vector); // Get the object's world position
              vector.project(camera); // Project the world position into NDC space
        
            
              // Convert projected coordinates to screen space
              const screenX = (vector.x + 1) * sizes.width / 2;
              const screenY = (-vector.y + 1) * sizes.height / 2;
        
              // Calculate 2D distance on the screen
              const dx = screenX - (mouse.x * sizes.width / 2 + sizes.width / 2);
              const dy = screenY - (-mouse.y * sizes.height / 2 + sizes.height / 2);
              const distance = Math.sqrt(dx * dx + dy * dy);
        
              if (distance < minimumDistance) {
                minimumDistance = distance;
                closestObject = object;
              }
            }
          });
          // After checking all objects, print the closest one
        // if (closestObject) {
        //     console.log(`${closestObject.name} is the closest to the mouse, approximately ${minimumDistance}px away in screen space`);
        // }
        if (closestObject.name === "UAP"){
          setClosestObject("UAP")
        } else if (closestObject.name === "ADU"){
          setClosestObject("ADU")
        }
    
    });

    



    return <> 
        <color args={["#140b34"]} attach="background"/>
        {/* <Lighting></Lighting> */}
        <OrbitControls >
            <Camera/>
        </OrbitControls>        
        {/* <BackgroundModel></BackgroundModel> */}
        {/* <Lighting></Lighting> */}
        {/* <Stars  radius={500} count={50000} fade speed={0.5}/> */}
        <Stage adjustCamera={false} shadows={{type: 'contact', scale: [500, 600],  position: [0, 1.1, 0], opacity: .75, blur: 0.1, frames: 1}}>
            <Cityscape></Cityscape>
            <Shed></Shed>
            <DetatchedAdu></DetatchedAdu>
            <Selection>
                <EffectComposer>
                    <Bloom mipmapBlur luminanceThreshold={1} levels={8} intensity={0.4} ></Bloom>
                </EffectComposer>
                <House></House>
                <MediumDensityBuilding></MediumDensityBuilding>
            </Selection>  
        </Stage>    
    </>
}