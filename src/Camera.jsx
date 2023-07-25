import { OrthographicCamera } from "@react-three/drei";
import { useRef, useEffect } from "react";
import useCamera from "./stores/useCamera";
import { useThree } from "@react-three/fiber";
import { CameraControls } from "@react-three/drei";
import { gsap } from "gsap";
import { useOrbitControls } from "./Controls";




export default function Camera() {
    
    const cameraControlRef = useRef()
    const { enableCamera, disableCamera } = useOrbitControls()
    

    useEffect(() => {
        
        const unsubscribeZoom = useCamera.subscribe(
            (state) => state.zoom,
            (zoom) => {
                console.log('zoom set to :', zoom)
                if (zoom === 'close'){
                    disableCamera()
                    gsap.to(cameraControlRef.current, {
                        duration: 1,
                        zoom: 40,
                        onUpdate: () => {
                            cameraControlRef.current.updateProjectionMatrix();
                          },
                    })
                    gsap.to(cameraControlRef.current.position, {
                        duration: 1,
                        x: -50,
                        y: 30,
                        z: 20,
                        onUpdate: () => {
                            cameraControlRef.current.updateProjectionMatrix();
                          },
                    })
                    enableCamera()

                    
                }
            }
        )

        const unsubscribePanToAdu = useCamera.subscribe(
            (state) => state.rotate,
            (rotate) => {
                if (rotate === 'adu'){
                    gsap.to(cameraControlRef.current.position, {
                        duration: 2,
                        x: 0,
                        y: 70,
                        z: 40,
                        onUpdate: () => {
                            cameraControlRef.current.updateProjectionMatrix();
                          },
                    })
                    gsap.to(cameraControlRef.current, {
                        duration: 2,
                        zoom: 35,
                        onUpdate: () => {
                            cameraControlRef.current.updateProjectionMatrix();
                          },
                    })
                }
                else if (rotate === 'birdsEye'){
                    disableCamera()
                    gsap.to(cameraControlRef.current.position, {
                        
                        duration: 2,
                        x: -5,
                        y: 70,
                        z: 40,
                        ease: 'power3.out',
                    
                        onUpdate: () => {
                            cameraControlRef.current.updateProjectionMatrix();
                          },
                    })
                    gsap.to(cameraControlRef.current, {
                        duration: 2,
                        zoom: 40,
                        ease: 'power3.out',
                        onUpdate: () => {
                            cameraControlRef.current.updateProjectionMatrix();
                          },
                    })

                    

                }
            }
        )
        
        return () => {
            // unsubscribeID()
            unsubscribeZoom()
            unsubscribePanToAdu()
        }

    }, [])
    

    
    return (
        // <CameraControls ref={cameraControlRef}>
            <OrthographicCamera
            ref={cameraControlRef}
            zoom={20}
            makeDefault 
            position={[-50, 40, 35]}
            fov={50}
            far={150} />
        // </CameraControls>
        

        
    )
    
}