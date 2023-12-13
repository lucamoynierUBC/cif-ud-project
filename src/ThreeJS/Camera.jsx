import { OrthographicCamera, PerspectiveCamera } from "@react-three/drei";
import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import useCamera from "../stores/useCamera";
import { useThree } from "@react-three/fiber";
import { CameraControls } from "@react-three/drei";
import { gsap } from "gsap";
import { useOrbitControls } from "./Controls";

// Camera component responsible for managing camera position and zoom
export default function Camera() {
    const cameraControlRef = useRef()
    // accessing enabling/disabling camera controls from custom hook
    const { enableCamera, disableCamera } = useOrbitControls()
    // check if device is a mobile device
    const isMobile = window.innerWidth <= 600

    //subscribe to changes from camera store
    useEffect(() => {
        const unsubscribeZoom = useCamera.subscribe(
            (state) => state.zoom,
            (zoom) => {
                if (zoom == "Medium Density"){
                    disableCamera()
                    
                    gsap.to(cameraControlRef.current, {
                        duration: 2,
                        fov: 50,
                        zoom: 1,
                        onUpdate: () => {
                            cameraControlRef.current.updateProjectionMatrix();                 
                          },
                    })
                    gsap.to(cameraControlRef.current.position, {
                        duration: 2,
                        x: 62.8,
                        y: -15.6,
                        z: 26.1
                    })
                    enableCamera() 
                } 
                else if (zoom == "Medium Density - BOV"){
                    disableCamera()
                    
                    gsap.to(cameraControlRef.current, {
                        duration: 2,
                        fov: 50,
                        zoom: 1,
                        onUpdate: () => {
                            cameraControlRef.current.updateProjectionMatrix();                 
                          },
                    })
                    gsap.to(cameraControlRef.current.position, {
                        duration: 2,
                        x: 51.2,
                        y: 1.8,
                        z: 25.1
                    })
                    enableCamera() 

                }
                else if (zoom == "Map"){
                    disableCamera()
                    gsap.to(cameraControlRef.current, {
                        duration: 2,
                        fov: 10,
                        zoom: 1.5,
                        onUpdate: () => {
                            cameraControlRef.current.updateProjectionMatrix();                 
                          },
                    })
                    gsap.to(cameraControlRef.current.position, {
                        duration: 2,
                        x: -1000,
                        y: 1000,
                        z: 1000
                        
                    })
                    enableCamera() 
                }
                else if (zoom == "Adu"){
                    disableCamera()
                    gsap.to(cameraControlRef.current, {
                        duration: 2,
                        fov: 50,
                        zoom: 1,
                        onUpdate: () => {
                            cameraControlRef.current.updateProjectionMatrix();                 
                          },
                    })
                    gsap.to(cameraControlRef.current.position, {
                        duration: 2,
                        x: -47,
                        y: -18.6,
                        z: -17.2
                    })
                    enableCamera() 
                }
                else if (zoom == "Adu - BOV"){
                    disableCamera()
                    gsap.to(cameraControlRef.current, {
                        duration: 2,
                        fov: 50,
                        zoom: 1,
                        onUpdate: () => {
                            cameraControlRef.current.updateProjectionMatrix();                 
                          },
                    })
                    gsap.to(cameraControlRef.current.position, {
                        duration: 2,
                        x: -56.3,
                        y: -9.6,
                        z: -22
                    })
                    enableCamera() 
                }
                else if (zoom == "Combo - BOV"){
                    disableCamera()
                    gsap.to(cameraControlRef.current, {
                        duration: 2,
                        fov: 50,
                        zoom: 1,
                        onUpdate: () => {
                            cameraControlRef.current.updateProjectionMatrix();                 
                          },
                    })
                    gsap.to(cameraControlRef.current.position, {
                        duration: 2,
                        x: -40,
                        y: 29,
                        z: -26
                    })
                    enableCamera() 

                }

                else if (zoom == "Combo"){
                    disableCamera()
                    gsap.to(cameraControlRef.current, {
                        duration: 2,
                        fov: 50,
                        zoom: 1,
                        onUpdate: () => {
                            cameraControlRef.current.updateProjectionMatrix();                 
                          },
                    })
                    gsap.to(cameraControlRef.current.position, {
                        duration: 2,
                        x: -71.8,
                        y: -12.6,
                        z: 0.2
                    })
                    enableCamera() 

                }
            }
        )

        
        return () => {
            unsubscribeZoom()
            // unsubscribeChangePerspective()
            // unsubscribePanToAdu()
        }
    }, [])

    // useFrame(() => {
    //     if (cameraControlRef.current) {
    //         console.log(`Camera Position: x=${cameraControlRef.current.position.x}, y=${cameraControlRef.current.position.y}, z=${cameraControlRef.current.position.z}`);
    //     }
    // });
    
    return (       
            <PerspectiveCamera
            ref={cameraControlRef}
            zoom={0.8}
            makeDefault
            // position={[x, y, z]}
            position={[-1000, 1000, 1000]}
            fov={10}
            far={5000} 
            near={3}
            />
    ) 
}