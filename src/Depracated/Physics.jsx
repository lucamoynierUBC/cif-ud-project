import { Physics, RigidBody } from "@react-three/rapier";

//physics for object collision
export default function Physics({type}) {
    return <Physics>
        <RigidBody type={type}>

        </RigidBody>
    </Physics>
}
