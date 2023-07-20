import { OrthographicCamera } from "@react-three/drei";
import { useRef, useEffect } from "react";
import useCamera from "./stores/useCamera";
import { useThree } from "@react-three/fiber";
import { CameraControls } from "@react-three/drei";



export default function Camera() {
    const {camera} = useThree()
    const cameraControlRef = useRef()

    useEffect(() => {
        
        const unsubscribeZoom = useCamera.subscribe(
            (state) => state.zoom,
            (zoom) => {
                console.log('zoom set to :', zoom)
                if (zoom === 'close'){
                    cameraControlRef.current?.zoom(25, true)
                }
            }
        )

        const unsubscribePanToAdu = useCamera.subscribe(
            (state) => state.rotate,
            (rotate) => {
                if (rotate === 'adu'){
                    cameraControlRef.current?.rotate(Math.PI/2, 0, true);
                }
            }
        )
        return () => {
            // unsubscribeID()
            unsubscribeZoom()
            unsubscribePanToAdu()
        }

    }, [])

    
    
    
        
    

    
    console.log(camera.zoom) 
    return (
        <CameraControls ref={cameraControlRef}>
            <OrthographicCamera
            zoom={20}
            makeDefault 
            position={[-50, 40, 35]}
            fov={50}
            far={100} />
        </CameraControls>
        

        
    )
    
}