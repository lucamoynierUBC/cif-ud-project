import { OrthographicCamera, PerspectiveCamera } from "@react-three/drei";
import { useRef, useEffect } from "react";
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
                console.log("zoom set to :", zoom)
                if (zoom){
                    disableCamera()
                    gsap.to(cameraControlRef.current, {
                        duration: 1,
                        zoom: (isMobile ? 30: 45),
                        onUpdate: () => {
                            cameraControlRef.current.updateProjectionMatrix();
                          },
                    })
                    // gsap.to(cameraControlRef.current.position, {
                    //     duration: 1,
                    //     x: -50,
                    //     y: 30,
                    //     z: 20,
                    //     onUpdate: () => {
                    //         cameraControlRef.current.updateProjectionMatrix();
                    //       },
                    // })
                    enableCamera()
                }

                if (!zoom){
                    disableCamera()
                    gsap.to(cameraControlRef.current, {
                        duration: 1,
                        zoom: 20,
                        onUpdate: () => {
                            cameraControlRef.current.updateProjectionMatrix();
                          },
                    })
                    enableCamera()
                }
            }
        )

        const unsubscribeChangePerspective = useCamera.subscribe(
            (state) => state.orthographic,
            (orthographic) => {
                console.log("perspective set to :", orthographic)
                if (orthographic) {
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
                        x:-190,
                        y: 200,
                        z: 190
                    })
                    enableCamera()
                }
                else {
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
                        x:-12,
                        y: 2,
                        z: -6
                    })
                    enableCamera()
                }
            }

        )
        
        // These animations below are no longer being used
        // const unsubscribePanToAdu = useCamera.subscribe(
        //     (state) => state.rotate,
        //     (rotate) => {
        //         if (rotate === "adu"){
        //             gsap.to(cameraControlRef.current.position, {
        //                 duration: 2,
        //                 x: 0,
        //                 y: 70,
        //                 z: 40,
        //                 onUpdate: () => {
        //                     cameraControlRef.current.updateProjectionMatrix();
        //                   },
        //             })
        //             gsap.to(cameraControlRef.current, {
        //                 duration: 2,
        //                 zoom: 35,
        //                 onUpdate: () => {
        //                     cameraControlRef.current.updateProjectionMatrix();
        //                   },
        //             })
        //         }
        //         else if (rotate === "birdsEye"){
        //             disableCamera()
        //             gsap.to(cameraControlRef.current.position, {
                        
        //                 duration: 2,
        //                 x: -5,
        //                 y: 70,
        //                 z: 40,
        //                 ease: "power3.out",
                    
        //                 onUpdate: () => {
        //                     cameraControlRef.current.updateProjectionMatrix();
        //                   },
        //             })
        //             gsap.to(cameraControlRef.current, {
        //                 duration: 2,
        //                 zoom: 40,
        //                 ease: "power3.out",
        //                 onUpdate: () => {
        //                     cameraControlRef.current.updateProjectionMatrix();
        //                   },
        //             })
        //         }
        //     }
        // )
        
        return () => {
            unsubscribeZoom()
            unsubscribeChangePerspective()
            // unsubscribePanToAdu()
        }
    }, [])
    // default camera settings: 
    // ref={cameraControlRef}
    // zoom={1}
    // makeDefault 
    // position={[-190, 200, 190]}
    // fov={10}
    // far={1000} 
    // perspective camera settings:
    // ref={cameraControlRef}
    // // zoom={1}
    // makeDefault 
    // position={[-12, 2, -6]}
    // fov={50}
    // far={1000} 
    return (       
            <PerspectiveCamera
            ref={cameraControlRef}
            zoom={1}
            makeDefault 
            position={[-190, 200, 190]}
            fov={10}
            far={1000} 
            />
    ) 
}