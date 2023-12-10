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
import { Bloom, DepthOfField, EffectComposer, Selection } from "@react-three/postprocessing"
import Camera from "./ThreeJS/Camera"
import useClosestObject from "./stores/useClosestObject"
import TownCenter from "./3DAssets/TownCenter"
import useCamera from "./stores/useCamera"
import TransitDevelopment from "./3DAssets/TransitDevelopment"
import { CombindedProposals } from "./3DAssets/CombinedProposals"
import gsap from "gsap"
import { TownCenterBefore } from "./3DAssets/TownCenterBefore"
import { TownCenterAfter } from "./3DAssets/TowCenterAfter"
// Puts everything related to Three.js inside a main class
export default function Experience() {

  const dof = useRef()

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
    const mouse = new THREE.Vector2
    const [highlight, setHighlight] = useState(false)
    const [map, setMap] = useState(true)
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
              console.log("zoom from experience is", zoom)
              setTimeout(() => {setHighlight(true)}, 2000)
              setMap(true)
            } else {
              setHighlight(false)
              setMap(false)
            }
          }
        )
      
        window.addEventListener('mousemove', onMouseMove);


        const onStart = () => {
          if (map) {
            setHighlight(false);
          }
        };
      
        // Event handler for when the controls stop being used
        const onEnd = () => {
          if (map) {
            setHighlight(true);
          }
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
        if (child.name === "UAP" || child.name === "ADU" 
        || child.name === "Town Center" || child.name === "Transit Development" || child.name === "Combined Proposals") {
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
          } else if (closestObject.name === "Combined Proposals") {
            setClosestObject("Combined Proposals")
          }
        }
    });

    console.log(dof.current)

    



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
        shadows={{type: 'contact', radius: 0.1, position: [0,2.6,0], scale: [500,600], blur:0.1, opacity:0.5, frames: 1}}
        >
            <BakeShadows></BakeShadows>
            <Cityscape></Cityscape>
            <Shed></Shed>
            {/* <Sky></Sky> */}
            {/* <Backdrop floor={5} position={[0,-1,-300]} scale={[1000, 100, 100]}>
              <meshStandardMaterial color="grey" />
            </Backdrop>
            
            <Backdrop rotation={[0, Math.PI, 0]} floor={5} position={[0,-1.5,300]} scale={[1000, 100, 100]}>
              <meshStandardMaterial color="grey" />
            </Backdrop> */}
            <DetatchedAdu></DetatchedAdu>

            {/* <EffectComposer>
              <DepthOfField ref={dof} focusDistance={0} focalLength={0.01} bokehScale={0}></DepthOfField>
            </EffectComposer> */}
          
                
            <House></House>
            {/* <MediumDensityBuilding></MediumDensityBuilding> */}
            <TownCenter></TownCenter>
            {/* <TransitDevelopment></TransitDevelopment> */}
            <CombindedProposals></CombindedProposals>
            <TownCenterBefore></TownCenterBefore>
            <TownCenterAfter></TownCenterAfter>
           
        </Stage>    
    </>
}