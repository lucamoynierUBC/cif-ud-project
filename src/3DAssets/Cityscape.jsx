import React, { useRef } from "react";
import { Edges, MeshTransmissionMaterial, useGLTF} from "@react-three/drei";


export default function Cityscape(props) {
  const { nodes, materials } = useGLTF("/cityscapeDark3JS.glb");
  return (
    <group {...props} dispose={null} scale={3.0} position={[78,0.5,19]}>
      <mesh
      
        castShadow
        receiveShadow
        geometry={nodes["testing,_testing"].geometry}
        material={materials.Clay}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.038}
      >
        <Edges threshold={25}/>
        

      
        
    
    </mesh>
    </group>
  );
}

useGLTF.preload("/cityscapeDark3JS.glb");