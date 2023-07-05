import { useThree, Canvas } from "@react-three/fiber"
import { useGesture } from "react-use-gesture"
import { animated, useSpring} from "@react-spring/three"
import { useOrbitControls } from "./Controls"


export default function Adu({ onPositionChange}) {
    const {size, viewport} = useThree()
    const aspect = size.width / viewport.width
    const { enableCamera, disableCamera } = useOrbitControls()
    const [spring, api] = useSpring(() => ({ 
        scale: [1, 1, 1], 
        position: [2, 0, 1], 
        rotation: [0, 0, 0], 
        config: { friction: 15 },
    }))
    const bind = useGesture({
        onDragStart() {
            disableCamera()
        },
        onDrag({ offset: [x, z] }) {
            onPositionChange({x: x / aspect, z: z / aspect})
            return api.start({position: [x / aspect, 0 ,  z / aspect]})
            
        },
        onHover({ hovering }) {
            return api.start({scale: hovering ? [1.2, 1.2, 1.2] : [1, 1, 1] })
        },
        onDragEnd() {
            enableCamera()
        }
        
      }

      
      )




    return <animated.mesh {...spring} {...bind()}
        onPointerOver={(event) => event.stopPropagation() } 
        onPointerOut={ (event) => event.stopPropagation() }>
        <boxGeometry />
        <meshStandardMaterial color={'white'}/>
    </animated.mesh>
}