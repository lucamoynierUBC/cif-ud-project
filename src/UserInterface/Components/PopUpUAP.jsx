import { Html } from "@react-three/drei";
import { Button, Card, Flex, FloatButton, Popover, Space, Statistic } from "antd";
import CountUp from 'react-countup';
import {InfoOutlined} from '@ant-design/icons';
import { useState, useEffect } from "react";
import useCamera from "../../stores/useCamera";
import useConfigurator from "../../stores/useConfigurator";


export default function PopUpUAP({position}) {
    const buttonStyles = {
        border: "1px solid",
        color: "transparent",
    }

    const [visible, setVisible] = useState(false)
    const [toggled, setToggle] = useState(false)
    
    const formatter = (value) => <CountUp end={value} separator=","/>;
    
    const content = (
        <>
            {!toggled && (<p>
                This is an existing building with 4 floors and 10 units.
            </p>)}
            {toggled && (<p>
                Under the Universal Affordability Preference, 
                <br/>the building can be built with 20% more space, 
                <br/>
                so long as it uses that extra space for affordable 
                <br></br>
                housing.
            </p>)}
            <Flex >
                <Space size={"large"}>
                    {!toggled && (<Statistic title="Floors" value={4} formatter={formatter}/>)}
                    {!toggled && (<Statistic title="Units" value={10} formatter={formatter}/>)}
                    
                    {toggled && (<Statistic title="Floors" value={7} formatter={formatter}/>)}
                    {toggled && (<Statistic title="Units" value={18} formatter={formatter}/>)}
                </Space>
            </Flex>
        </>
    )

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
                } else {
                    setToggle(false)
                }
            }

        )
        return () => {
            unsubscribeVisible(),
            unsubcribeToggle()
        }
    }, [])

    return (
        visible && (<Html position={[2,0,0]}  style={{backdropFilter: "blur(10px)"}} >
            {/* <Popover placement="right"  open={true} title="Changes" content={content}>
                    <FloatButton style={buttonStyles}  badge={{dot: true}} icon={<InfoOutlined width={"3px"}/>}></FloatButton>
                    
            </Popover> */}
            <Card size="small" hoverable title="Changes" content="yes">
                <Flex >
                    <Space size={"large"}>
                        {!toggled && (<Statistic title="Floors" value={4} formatter={formatter}/>)}
                        {!toggled && (<Statistic title="Units" value={10} formatter={formatter}/>)}
                        
                        {toggled && (<Statistic title="Floors" value={7} formatter={formatter}/>)}
                        {toggled && (<Statistic title="Units" value={18} formatter={formatter}/>)}
                    </Space>
                </Flex>
            </Card>
        </Html>)
    )
}