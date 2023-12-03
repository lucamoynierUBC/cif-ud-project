import React, { useEffect, useRef, useState } from "react";
import { Edges, Html, QuadraticBezierLine, useGLTF, Line } from "@react-three/drei";
import useClosestObject from "../stores/useClosestObject";
import { Popover, Tooltip } from "antd";
import { animated, useSpring, config } from "@react-spring/three";
import useCamera from "../stores/useCamera";
import useConfigurator from "../stores/useConfigurator";
import ComboAnnotation1 from "../UserInterface/Components/Annotations/ComboAnnotation1";
import ComboAnnotation2 from "../UserInterface/Components/Annotations/ComboAnnotation2";
import ComboAnnotation3 from "../UserInterface/Components/Annotations/ComboAnnotation3";
import ComboAnnotation4 from "../UserInterface/Components/Annotations/ComboAnnotation4";
import ComboAnnotation5 from "../UserInterface/Components/Annotations/ComboAnnotation5";
import ComboAnnotation6 from "../UserInterface/Components/Annotations/ComboAnnotation6";
import ComboAnnotation7 from "../UserInterface/Components/Annotations/ComboAnnotation7";

export function CombindedProposals(props) {
  const { nodes, materials } = useGLTF("/CombinedProposals.glb");
  const setZoom = useCamera((state) => state.setZoom)
  const [open, setOpen] = useState(false)
  
  const [spring, api] = useSpring(() => ({
    color: '#ae561f',
    scale: 0.39,
    infillOpacity: 0,
    schoolOpacity: 1,
    schoolColor: '#ae561f',
    churchColor: '#ae561f',
    adminbuildingColor: '#ae561f',
    config: config.stiff,
  }))

  useEffect(()=> {
        const unsubscribeClosestObject = useClosestObject.subscribe(
                (state) => state.closestObject,
                (closestObject) => {
                    if (closestObject === "Combined Proposals"){
                      setOpen(true)
                      api.start({color: '#ffc861',churchColor: '#ffc861', schoolColor: '#ffc861', adminbuildingColor: '#ffc861',  scale: 0.4})
                        
                    } else {
                        setOpen(false)
                        api.start({color: '#ae561f', churchColor: '#ae561f', schoolColor: '#ae561f', adminbuildingColor: '#ae561f', scale: 0.39})
                    }
                }
        )

        const unsubscribeZoom = useCamera.subscribe(
          (state) => state.zoom,
          (zoom) => {
              if (zoom === 'Combo'){
                api.start({color: '#808080', churchColor: '#808080', schoolColor: '#808080', adminbuildingColor: '#808080'})
              } else {
                api.start({color: '#ae561f', churchColor: '#ae561f', schoolColor: '#ae561f', adminbuildingColor: '#ae561f'})
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
              if (visibleConversion && !visibleInfill) {
                api.start({schoolColor:'#ae561f', adminbuildingColor: '#6495ED', churchColor: '#6495ED'})

              }
              if (!visibleConversion && visibleInfill) {
                api.start({infillOpacity: 1, schoolOpacity:0.5, schoolColor: '#808080', color: '#ffc861'})
              }
              if (visibleConversion && visibleInfill) {
                api.start({infillOpacity: 1, schoolOpacity:1, schoolColor: '#ae561f', color: '#ffc861'})
              }
              if (!visibleInfill && !visibleConversion) {
                api.start({schoolColor: '#808080', adminbuildingColor: '#808080', churchColor: '#808080', infillOpacity:0, schoolOpacity:1})
              }
              
            }
        )
        return () => {
            unsubscribeClosestObject()
            unsubscribeConfigurator()
            unsubscribeZoom()
        }
    }, [])

  return (
    <animated.group name="Combined Proposals" {...props} position={[-45, -.5, 55.5]} rotation={[0, Math.PI/2, 0]} scale={spring.scale} dispose={null}>
      <animated.mesh
        {...spring}
        onClick={(event) => {event.stopPropagation(), setZoom('Combo')}}
        castShadow
        receiveShadow
        geometry={nodes.School.geometry}
        material-transparent={true}
        material-opacity={spring.schoolOpacity}
        material={materials["Material.002"]}
        material-color={spring.schoolColor}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.254}
      />
      <animated.mesh
        castShadow
        receiveShadow
        material-transparent={true}
        material-opacity={spring.infillOpacity}
        geometry={nodes.residential1.geometry}
        material={materials["Material.001"]}
        material-color={spring.color}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.254}
      />
      <animated.mesh
        castShadow
        receiveShadow
        material-transparent={true}
        material-opacity={spring.infillOpacity}
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
        material-color={spring.churchColor}
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
        material-color={spring.adminbuildingColor}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.254}
      />
      <Html position={[0,25,0]}>
        <Tooltip open={open} title="Combined Proposal"></Tooltip>
      </Html>
      <Line 
      dashed 
      points={[[-26.5,1,20], [43.5,1,20], [43.5, 1, -38], [0, 1, -38], [0, 1, -8], [-26.5, 1, -8], [-26.5, 1, 20]]} 
      color={'red'}  
      lineWidth={1} 
      >
      </Line>
      <ComboAnnotation1/>
      <ComboAnnotation2/>
      <ComboAnnotation3/>
      <ComboAnnotation4/>
      <ComboAnnotation5/>
      <ComboAnnotation6/>
      <ComboAnnotation7/>
    </animated.group>
  );
}

useGLTF.preload("/CombinedProposals.glb");

