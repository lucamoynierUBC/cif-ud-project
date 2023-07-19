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
                    cameraControlRef.current?.zoom(40, true)
                    
                    
                    
                }
            }
        )
        return () => {
            // unsubscribeID()
            unsubscribeZoom()
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