import { Select } from "@react-three/postprocessing"
import { useEffect, useState } from "react"
import useFlow from "./stores/useFlow"

export default function CustomPlot() {
    const [outline, setOutline] = useState(false)

    useEffect(() => {
        const unsubscribeHighlight = useFlow.subscribe(
            (state) => state.phase,
            (phase) => {
                if (phase === 'interaction10'){
                    setOutline(true)
                }
            }
        )
        return () => {
            unsubscribeHighlight()
        }
    }, [])


    return(
        <Select enabled={outline}>
            <mesh scale={[12, 0.1, 4.69]} position={[-9, -.5, 0]}>
                <boxGeometry />
            </mesh>
        </Select>

    )

}