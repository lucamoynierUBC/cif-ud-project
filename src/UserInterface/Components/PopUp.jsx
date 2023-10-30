import { Html } from "@react-three/drei";
import { FloatButton, Popover, Statistic } from "antd";
import CountUp from 'react-countup';
import {InfoOutlined} from '@ant-design/icons';
import { useState, useEffect } from "react";
import useCamera from "../../stores/useCamera";


export default function PopUp({position}) {
    const buttonStyles = {
        border: "1px solid",
        color: "transparent",
    }

    const [visible, setVisible] = useState(false)
    
    const formatter = (value) => <CountUp end={value} separator=","/>;
    
    const content = (
        <>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            </p>
            <Statistic title="Numbers" value={100} formatter={formatter}/>
        </>
    )

    useEffect(() => {
        // Toggle popup
        const unsubscribeVisible = useCamera.subscribe(
            (state) => state.zoom,
            (zoom) => {
                if (zoom == "Adu") {
                    setTimeout(() => setVisible(true), 2000)

                } else {
                    setVisible(false)
                }
            }
        )
        return () => {
            unsubscribeVisible()
        }
    }, [])

    return (
        visible && (<Html position={position} style={{backdropFilter: "blur(10px)"}} >
            <Popover title="Hello" content={content}>
                    <FloatButton  style={buttonStyles}  badge={{dot: true}} icon={<InfoOutlined width={"3px"}/>}></FloatButton>
            </Popover>
        </Html>)
    )
}