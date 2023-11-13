import { OrthographicCamera, PerspectiveCamera } from "@react-three/drei";
import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import useCamera from "../stores/useCamera";
import { useThree } from "@react-three/fiber";
import { CameraControls } from "@react-three/drei";
import { gsap } from "gsap";
import { useOrbitControls } from "./Controls";
import { useControls } from "leva";

// Camera component responsible for managing camera position and zoom
export default function Camera() {
    const cameraControlRef = useRef()
    // accessing enabling/disabling camera controls from custom hook
    const { enableCamera, disableCamera } = useOrbitControls()
    // check if device is a mobile device
    const isMobile = window.innerWidth <= 600

    const {x, y, z} = useControls({
        x: {value: -190, min: -1000, max: 1000 },
        y: {value: 200, min: 0, max: 100 },
        z: {value: 190, min: -500, max: 500 }
    })

    //subscribe to changes from camera store
    useEffect(() => {
        const unsubscribeZoom = useCamera.subscribe(
            (state) => state.zoom,
            (zoom) => {
                if (zoom == "Medium Density"){
                    disableCamera()
                    
                    gsap.to(cameraControlRef.current, {
                        duration: 0.5,
                        fov: 50,
                        onUpdate: () => {
                            cameraControlRef.current.updateProjectionMatrix();                 
                          },
                    })
                    gsap.to(cameraControlRef.current.position, {
                        duration: 2,
                        x: 48,
                        y: 1,
                        z: 20
                    })
                    enableCamera() 
                }
                else if (zoom == "Map"){
                    disableCamera()
                    gsap.to(cameraControlRef.current, {
                        duration: 2,
                        fov: 10,
                        onUpdate: () => {
                            cameraControlRef.current.updateProjectionMatrix();                 
                          },
                    })
                    gsap.to(cameraControlRef.current.position, {
                        duration: 2,
                        x: -190,
                        y: 200,
                        z: 190
                    })
                    enableCamera() 
                }
                else if (zoom == "Adu"){
                    disableCamera()
                    gsap.to(cameraControlRef.current, {
                        duration: 2,
                        fov: 50,
                        onUpdate: () => {
                            cameraControlRef.current.updateProjectionMatrix();                 
                          },
                    })
                    gsap.to(cameraControlRef.current.position, {
                        duration: 2,
                        x: -12,
                        y: 2,
                        z: -6
                    })
                    enableCamera() 
                }
            }
        )

        // const unsubscribeChangePerspective = useCamera.subscribe(
        //     (state) => state.orthographic,
        //     (orthographic) => {
        //         console.log("perspective set to :", orthographic)
        //         if (orthographic) {
        //             disableCamera()
        //             gsap.to(cameraControlRef.current, {
        //                 duration: 2,
        //                 fov: 10,
        //                 onUpdate: () => {
        //                     cameraControlRef.current.updateProjectionMatrix();
        //                   },
        //             })
        //             gsap.to(cameraControlRef.current.position, {
        //                 duration: 2,
        //                 x:-190,
        //                 y: 200,
        //                 z: 190
        //             })
        //             enableCamera()
        //         }
        //         else {
        //             disableCamera()
        //             gsap.to(cameraControlRef.current, {
        //                 duration: 0.5,
        //                 fov: 50,
        //                 onUpdate: () => {
        //                     cameraControlRef.current.updateProjectionMatrix();
        //                   },
        //             })
        //             gsap.to(cameraControlRef.current.position, {
        //                 duration: 2,
        //                 x:-12,
        //                 y: 2,
        //                 z: -6
        //             })
        //             enableCamera()
        //         }
        //     }

        // )
        
        return () => {
            unsubscribeZoom()
            // unsubscribeChangePerspective()
            // unsubscribePanToAdu()
        }
    }, [])
    
    return (       
            <PerspectiveCamera
            ref={cameraControlRef}
            zoom={1}
            makeDefault
            position={[x, y, z]}
            fov={10}
            far={3000} 
            near={3}
            />
    ) 
}