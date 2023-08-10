
import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function BackgroundModel(props) {
    const group = useRef();
    const { nodes, materials, animations } = useGLTF("/BackgroundanimatedV3.glb");
    const { actions, names } = useAnimations(animations, group);
    useEffect(() => {
      actions[names[0]].reset().play()
    })
  
  
    return (
    <group ref={group} {...props} dispose={null} scale={0.4} position={[-10, -9.5, -1.5]}>
        <mesh
          name="Car"
          castShadow
          receiveShadow
          geometry={nodes.Car.geometry}
          material={materials.base}
          position={[42.638, 23.004, -104.899]}
          rotation={[0, 1.562, -1.571]}
          scale={0.01}
        />
        <group name="NurbsPath" position={[0, 27.157, -104.913]} />

    </group>
            
    )
}

useGLTF.preload("/BackgroundanimatedV3.glb");
