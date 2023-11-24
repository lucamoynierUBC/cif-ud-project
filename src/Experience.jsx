
import useApp from "./stores/useApp"

import { OrbitControls } from "./ThreeJS/Controls"
import { useFrame, useThree } from "@react-three/fiber"
import { Backdrop, BakeShadows, Environment, OrthographicCamera, PerspectiveCamera, RandomizedLight, Resize, Sky, Stage, Stars } from "@react-three/drei"
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
import TownCenter from "./3DAssets/TownCenter"
import useCamera from "./stores/useCamera"
import TransitDevelopment from "./3DAssets/TransitDevelopment"
import { CombindedProposals } from "./3DAssets/CombinedProposals"

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
    const {camera, scene, controls} = useThree()
    console.log(controls)
    const mouse = new THREE.Vector2
    const [highlight, setHighlight] = useState(false)
    useEffect(() => {
      if (controls) {
        const onMouseMove = (event) => {
          mouse.x = (event.clientX / sizes.width) * 2 - 1;
          mouse.y = -(event.clientY / sizes.height) * 2 + 1;
        };

        const unsubscribeCamera = useCamera.subscribe(
          (state) => state.zoom,
          (zoom) => {
            if (zoom === 'Map') {

              setTimeout(() => {setHighlight(true)}, 2000)
            } else {
              setHighlight(false)
            }
          }
        )
      
        window.addEventListener('mousemove', onMouseMove);

        const onStart = () => {
          setHighlight(false);
        };
      
        // Event handler for when the controls stop being used
        const onEnd = () => {
          setHighlight(true);
        };
        controls.addEventListener('start', onStart);
        controls.addEventListener('end', onEnd);

      

        return () => {
          window.removeEventListener('mousemove', onMouseMove);
          controls.removeEventListener('start', onStart);
          controls.removeEventListener('end', onEnd);
          unsubscribeCamera()
        }
      }
      }, [sizes, controls]);

  

    let objectsToCheck = []
    scene.traverse(function (child) {
        if (child.name === "UAP" || child.name === "ADU" || child.name === "Town Center" || child.name === "Transit Development") {
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

        if (!highlight) {
          setClosestObject(null)
        } else {

          // if (closestObject) {
          //   console.log(`${closestObject.name} is the closest to the mouse, approximately ${minimumDistance}px away in screen space`);
          // }
          if (closestObject.name === "UAP"){
            setClosestObject("UAP")
          } else if (closestObject.name === "ADU"){
            setClosestObject("ADU")
          } else if (closestObject.name === "Town Center"){
            setClosestObject("Town Center")
          } else if (closestObject.name === "Transit Development") {
            setClosestObject("Transit Development")
          }
        }
    });

    



    return <> 
        <color args={['ivory']} attach="background"/>
        {/* <Lighting></Lighting> */}
        <OrbitControls >
            <Camera/>
        </OrbitControls>        
        {/* <BackgroundModel></BackgroundModel> */}
        {/* <Lighting></Lighting> */}
        {/* <Stars  radius={500} count={50000} fade speed={0.5}/> */}
        <Stage 
        intensity={0.5} 
        adjustCamera={false} 
        environment={'city'}
        shadows={{type: 'contact', radius: 0.1, position: [0,2.65,0], scale: [500,600], blur:0.1, opacity:0.5, frames: 1}}
        >
            <BakeShadows></BakeShadows>
            <Cityscape></Cityscape>
            <Shed></Shed>
            <DetatchedAdu></DetatchedAdu>
            <Selection>
                {/* <EffectComposer>
                    <Bloom mipmapBlur luminanceThreshold={1} levels={8} intensity={0.2} ></Bloom>
                </EffectComposer> */}
                <House></House>
                <MediumDensityBuilding></MediumDensityBuilding>
                <TownCenter></TownCenter>
                <TransitDevelopment></TransitDevelopment>
                <CombindedProposals></CombindedProposals>
            </Selection>  
        </Stage>    
    </>
}