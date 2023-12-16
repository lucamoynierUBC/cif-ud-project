import { Html } from "@react-three/drei";
import React, { useRef, useEffect, useState} from "react";
import useRefStore from "../stores/useRefStore";
import useCamera from "../stores/useCamera";
import { Popover } from "antd";
import useConfigurator from "../stores/useConfigurator";


export default function ComboReference() {
    // states for opening and closing the annotated bubbles
    const ref = useRef(null);
    const { setRef } = useRefStore();
    const [visible, setVisible] = useState(false)
    const[open, setOpen] = useState(false)
    const[open1, setOpen1] = useState(false)
    const[open2, setOpen2] = useState(false)
    const[open3, setOpen3] = useState(false)

    // using useEffect to subscribe to changes in the stores
    useEffect(() => {
    

        let used = false
        const unsubscibeZoom = useCamera.subscribe(
            (state) => state.zoom,
            (zoom) => {
                if (zoom === 'Combo' && !used){
                    resetAnnotation()
                    setTimeout(() => setRef(ref), 2000)
                    setTimeout(() => setOpen(true), 2000)
                    setVisible(true)
                    used = true

                } else if (zoom === 'Combo' && used) {
                    setVisible(false)
                    setTimeout(() => setVisible(true), 2000)
                }else if (zoom == "Combo - BOV") {
                    setVisible(false)
                    setTimeout(() => setVisible(true), 2000)
                } else {
        
                    used = false
                    resetAnnotation()
                }

            }   
        )
        
        const resetAnnotation = () => {
            setOpen(false)
            setOpen1(false)
            setOpen2(false)
            setOpen3(false)
            setVisible(false)
        }

        const unsubcribeToggle = useConfigurator.subscribe(
            (state) => state.toggle,
            (toggle) => {
                let infillToggle = false
                let conversionToggle = false
                if (Array.isArray(toggle) && toggle.length > 0) {
                    toggle.forEach((t) => {
                        if (t === 2) {
                            infillToggle = true
                        }
                        if (t == 1) {
                            conversionToggle = true
                        }
                    });
                }

                if (infillToggle || conversionToggle) {
                    setOpen(false)
                } 
                if (infillToggle && !conversionToggle) {
                    setOpen1(false)
                    setOpen2(true)
                    setOpen3(false)
                }
                if (!infillToggle && conversionToggle) {
                    setOpen1(true)
                    setOpen2(false)
                    setOpen3(false)
                }
                if (infillToggle && conversionToggle) {
                    setOpen1(false)
                    setOpen2(false)
                    setOpen3(true)
                } 
                if (!infillToggle && !conversionToggle) {
                    setOpen(true)
                    setOpen1(false)
                    setOpen2(false)
                    setOpen3(false)
                }
            }

        )
        
        return () => {
            unsubscibeZoom()
            unsubcribeToggle()
        }
    }, []);
    
    // styles for the html
    const styles = {
        width: '50px',
        height: '50px',
        PointerEvents: 'none',
        background: 'none'
      };


    // Component for the annotated bubbles
    return (
        visible && <>
        <Html center position={[10, 0, 10]} ref={ref} scale={20}>
            <div style={styles}/>
            <Popover placement="left" open={open} content="Lot Size: min 5,000 sqft"></Popover>
            <Popover placement="left" open={open1}  content ="Convert existing school to residential"></Popover>
            
        </Html>
        <Html center position={[0, 25, 10]} ref={ref} scale={20}>
            <div style={styles}/>
            <Popover placement="top" open={open} title="Qualifying Site" content ="Location within the Greater Transit-Oriented-Development area"></Popover>
            <Popover placement="top" open={open1}  content ="Convert existing church and admin building to community facility"></Popover>
            <Popover placement="top" open={open2}  content ="Build residential on existing building"></Popover>
            <Popover placement="top" open={open3} title="Result" content ="Maximized site opportunity for res and CF"></Popover>
        </Html>
        <Html center position={[30, 0, -30]} ref={ref} scale={20}>
            <div style={styles}/>
            <Popover trigger={'click'} placement="right" open={open} content ="Multiple buildings on same site"></Popover>
            <Popover placement="right" open={open2}  content ="Infill residential in lot open space"></Popover>
            <Popover placement="right" open={open3} content ="+ 71 residential units"></Popover>
        </Html>
        </>
    )
}