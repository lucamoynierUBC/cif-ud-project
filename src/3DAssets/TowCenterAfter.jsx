import React, { useEffect, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import useConfigurator from "../stores/useConfigurator";

export function TownCenterAfter(props) {
  const { nodes, materials } = useGLTF("/TownCenterAfter.glb");
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const unsubscribeConfigurator = useConfigurator.subscribe(
        (state) => state.toggle,
        (toggle) => {
            if (toggle == "Medium Density") {
                setVisible(true)
            } else {
                setVisible(false)
            }
        }
    )

    return () => {
        unsubscribeConfigurator()
    }
   }, [])

  
  return (
    <group visible={visible} {...props} position={[111.3, 2, 19.7]} scale={[0.15, 0.15, 0.14]} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        material-color={'#ae561f'}
        geometry={nodes.Town_Center_After.geometry}
        material={materials["Material.002"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/TownCenterAfter.glb");