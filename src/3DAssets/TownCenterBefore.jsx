import React, { useEffect, useRef, useState } from "react";
import { Html, useGLTF } from "@react-three/drei";
import { useSpring, animated, config } from "@react-spring/three";
import useClosestObject from "../stores/useClosestObject";
import { Tooltip } from "antd";
import useCamera from "../stores/useCamera";
import useConfigurator from "../stores/useConfigurator";

export function TownCenterBefore(props) {
  const { nodes, materials } = useGLTF("/TownCenterBefore.glb");
  const [open, setOpen] = useState(false)
  const [visible, setVisible] = useState(true)
  const setZoom = useCamera((state) => state.setZoom)

  const [spring, api] = useSpring(() => ({
    color: '#ae561f',
    scale: [0.15, 0.15, 0.14],
    config: config.stiff

  }))
  
  useEffect(() => {
    const unsubscribeClosestObject = useClosestObject.subscribe(
        (state) => state.closestObject,
        (closestObject) => {

            if (closestObject === "UAP"){
                setOpen(true)
                api.start({color: '#ffc861', scale: [0.16, 0.16, 0.15]})
            } else {
                setOpen(false)
                api.start({color: '#ae561f', scale: [0.15, 0.15, 0.14]})
                
            }
        }
    )
    const unsubscribeConfigurator = useConfigurator.subscribe(
        (state) => state.toggle,
        (toggle) => {
            if (toggle == "Medium Density") {
                setVisible(false)
            } else {
                setVisible(true)
            }
        }
    )


    const unsubscribeZoom = useCamera.subscribe(
      (state) => state.zoom,
      (zoom) => {
        if (zoom == "Map"){
          setVisible(true)
        }
      }

    )

    return () => {
        unsubscribeConfigurator()
        unsubscribeClosestObject()
        unsubscribeZoom()
    }
   }, [])


  return (
    <animated.group visible={visible} name={'UAP'} {...props} position={[111.5, 0, 20]} rotation={[0, 0, 0]} scale={spring.scale} dispose={null} onClick={() => setZoom("Medium Density")}>
      <animated.mesh
        castShadow
        receiveShadow
        geometry={nodes.Town_Center_Before.geometry}
        material={materials["Material.001"]}
        material-color={spring.color}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <Html center position={[0, 50, 20]}>
        <Tooltip open={open} title="Town Center"></Tooltip>
      </Html>
    </animated.group>
  );
}

useGLTF.preload("/TownCenterBefore.glb");
