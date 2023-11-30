import { useProgress } from "@react-three/drei";
import { Progress } from "antd";

export default function LoadingScreen() {
    const { progress, item } = useProgress();

    const twoColors = { '0%': '#ffeec1', '100%': '#d96b27' };

    const containerStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '50%', // Adjust as needed
        maxWidth: '600px', // Adjust for maximum width
        minWidth: '300px', // Adjust for minimum width
    };

    return (
        <div style={containerStyle}>
            <Progress percent={progress}  strokeColor={twoColors}/>
            <div style={{ marginTop: '10px' }}>
                {item ? `Loading: ${item}` : 'Starting up...'}
            </div>

        </div>
    );
}