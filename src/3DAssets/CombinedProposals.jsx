import React, { useEffect, useRef, useState } from "react";
import { Edges, Html, useGLTF } from "@react-three/drei";
import useClosestObject from "../stores/useClosestObject";
import { Popover, Tooltip } from "antd";
import { animated, useSpring, config } from "@react-spring/three";
import useCamera from "../stores/useCamera";
import useConfigurator from "../stores/useConfigurator";

export function CombindedProposals(props) {
  const { nodes, materials } = useGLTF("/CombinedProposals.glb");
  const setZoom = useCamera((state) => state.setZoom)
  const [open, setOpen] = useState(false)
  
  const [spring, api] = useSpring(() => ({
    color: '#ae561f',
    scale: 0.39,
    visibleConversion: false,
    visibleInfill: false,
    config: config.stiff,


  }))
  
  useEffect(()=> {
        const unsubscribeClosestObject = useClosestObject.subscribe(
                (state) => state.closestObject,
                (closestObject) => {
                    if (closestObject === "Combined Proposals"){
                      setOpen(true)
                      api.start({color: '#ffc861', scale: 0.4})
                        
                    } else {
                        setOpen(false)
                        api.start({color: '#ae561f', scale: 0.39})
                    }
                }

        )

        const unsubscribeConfigurator = useConfigurator.subscribe(
          (state) => state.toggle,
          (toggle) => {

              let visibleConversion = false;
              let visibleInfill = false;

      
              if (Array.isArray(toggle) && toggle.length > 0) {
                  toggle.forEach((t) => {
                      if (t === 1) {
                          visibleConversion = true;
                      }
                      if (t === 2) {
                          visibleInfill = true;
                      }
                  });
              }
              api.start({visibleConversion: visibleConversion, visibleInfill: visibleInfill})
            }
        )
          
      
        
  

        return () => {
            unsubscribeClosestObject()
            unsubscribeConfigurator()
        }
    }, [])


  return (
    <animated.group name="Combined Proposals" {...props} position={[-45, -.5, 55.5]} rotation={[0, Math.PI/2, 0]} scale={spring.scale} dispose={null}>
      <animated.mesh
        onClick={(event) => {event.stopPropagation(), setZoom('Combo')}}
        castShadow
        receiveShadow
        geometry={nodes.School.geometry}
        material={materials["Material.002"]}
        material-color={spring.color}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.254}
      />
      <animated.mesh
        castShadow
        receiveShadow
        visible={spring.visibleConversion}
        geometry={nodes.residential1.geometry}
        material={materials["Material.001"]}
        material-color={spring.color}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.254}
      />
      <animated.mesh
        castShadow
        receiveShadow
        visible={spring.visibleInfill}
        geometry={nodes.residential2.geometry}
        material={materials["Material.003"]}
        material-color={spring.color}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.254}
      />
      <animated.mesh
        castShadow
        receiveShadow
        geometry={nodes.church.geometry}
        material={materials["Material.010"]}
        material-color={spring.color}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.254}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.background1.geometry}
        material={materials["Material.009"]}
        material-color={'grey'}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.254}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.background2.geometry}
        material={materials["Material.008"]}
        material-color={'grey'}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.254}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.background3.geometry}
        material={materials["Material.007"]}
        material-color={'grey'}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.254}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.background5.geometry}
        material={materials["Material.005"]}
        material-color={'grey'}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.254}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.background4.geometry}
        material={materials["Material.006"]}
        material-color={'grey'}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.254}
      />
      <animated.mesh
        castShadow
        receiveShadow
        geometry={nodes.adminbuilding.geometry}
        material={materials["Material.004"]}
        material-color={spring.color}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.254}
      />
      <Html position={[0,25,0]}>
        <Tooltip open={open} title="Combined Proposal"></Tooltip>
      </Html>
    </animated.group>
  );
}

useGLTF.preload("/CombinedProposals.glb");

