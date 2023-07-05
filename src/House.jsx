import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default function House() {
    const house = useLoader(GLTFLoader, './house.glb')
    
    return  <primitive object={house.scene} scale={0.1}>

    </primitive>

}