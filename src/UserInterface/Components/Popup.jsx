import { Html } from "@react-three/drei";
import { FloatButton, Popover, Statistic } from "antd";
import CountUp from 'react-countup';
import {InfoOutlined} from '@ant-design/icons';


export default function Popup() {
    const buttonStyles = {
        border: "1px solid",
        color: "transparent",
        border: "1px solid black"
    }
    
    const formatter = (value) => <CountUp end={value} separator="," />;
    
    const content = (
        <>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            </p>
            <Statistic title="Numbers" value={100} formatter={formatter}/>
        </>
    )

    return (
        <Html style={{backdropFilter: "blur(10px)"}} >
            <Popover title="Hello" content={content}>
                    <FloatButton  style={buttonStyles}  badge={{dot: true}} icon={<InfoOutlined width={"3px"}/>}></FloatButton>
            </Popover>
        </Html>
    )
}