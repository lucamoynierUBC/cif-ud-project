import useCamera from "../stores/useCamera";

export default function MediumDensityBuilding() {
    const setZoom = useCamera((state) => state.setZoom)
    return (
        <mesh position={[35, 0,-1.5]} scale={[10, 7, 4]} onClick={() => setZoom("Medium Density")}>
            {/* <meshPhongMaterial /> */}
            <meshNormalMaterial></meshNormalMaterial>
           
            <boxGeometry></boxGeometry>
        </mesh>
    )
}