import { useProgress } from "@react-three/drei";
import { Flex, Progress, Spin, Statistic } from "antd";
import { useMemo } from "react";
import md5 from "md5";

export default function LoadingScreen() {
    const { progress, item, loaded } = useProgress();

    const twoColors = { '0%': '#ffeec1', '100%': '#d96b27' };

    const roundedProgress = parseFloat(progress.toFixed(2));

    const containerStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '50%', // Adjust as needed
        maxWidth: '600px', // Adjust for maximum width
        minWidth: '300px', // Adjust for minimum width
    };

    console.log(loaded)
    const itemHash = useMemo(() => item ? md5(item).substring(0, 8) : '', [item]);

    return (
        <div style={containerStyle}>
            <Progress percent={Math.round(roundedProgress)}  strokeColor={twoColors}/>
            <Flex justify="center" >
                <div  style={{ marginTop: '10px' }}>
                    <Statistic title="Importing assets:" value={loaded} suffix="/ 20"/>
                </div>
            </Flex>

        </div>
    );
}