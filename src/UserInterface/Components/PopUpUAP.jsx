import { Html } from "@react-three/drei";
import { Button, Card, Flex, FloatButton, Popover, Space, Statistic } from "antd";
import CountUp from 'react-countup';
import {InfoOutlined} from '@ant-design/icons';
import { useState, useEffect } from "react";
import useCamera from "../../stores/useCamera";
import useConfigurator from "../../stores/useConfigurator";
import { useSpring, config, animated } from "react-spring";


export default function PopUpUAP({position}) {
    const [visible, setVisible] = useState(false)
    const [toggled, setToggle] = useState(false)
    
    const formatter = (value) => <CountUp end={value} separator=","/>;



    const [spring, api] = useSpring(() => ({
        y: 0,
        scale: 1,
        width: '150px',
        height: '.75px', // Adjust thickness as needed
        backgroundColor: 'black', // Line color
        config: config.stiff
    }))

    useEffect(() => {
        // Toggle popup
        const unsubscribeVisible = useCamera.subscribe(
            (state) => state.zoom,
            (zoom) => {
                if (zoom == "Medium Density" ) {
                    setTimeout(() => setVisible(true), 2000)

                } else if(zoom = "Map") {
                    setVisible(false)
                } else {
                    setVisible(false)
                }
            }
        )
        const unsubcribeToggle = useConfigurator.subscribe(
            (state) => state.toggle,
            (toggle) => {
                console.log(toggle)
                if (toggle == "Medium Density"){
                    setToggle(true)
                    api.start({scale: 1, y:-150})
                } else {
                    setToggle(false)
                    api.start({scale: 1 , y:0})
                }
            }

        )
        return () => {
            unsubscribeVisible(),
            unsubcribeToggle()
        }
    }, [])
    


    return (
        visible && (<Html {...spring} scaleFactor={10} position={[2.5, 0, 0]}>
                <animated.div style={spring}>
                    <Flex >
                            <Space size={"large"}>
                                {!toggled && (<Statistic title="Floors" value={4} formatter={formatter}/>)}
                                {!toggled && (<Statistic title="Units" value={10} formatter={formatter}/>)}
                                
                                {toggled && (<Statistic title="Floors" value={7} formatter={formatter}/>)}
                                {toggled && (<Statistic title="Units" value={18} formatter={formatter}/>)}
                            </Space>
                        </Flex>
                </animated.div>
        </Html>)
    )
}