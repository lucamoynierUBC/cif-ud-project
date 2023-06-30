export default function Adu() {
    return <mesh position={[2, 0, 1]}
        onPointerOver={(event) => event.stopPropagation() } 
        onPointerOut={ (event) => event.stopPropagation() }>
        <boxGeometry />
        <meshStandardMaterial color={'white'}/>
    </mesh>
}