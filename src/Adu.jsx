import { useThree, Canvas } from "@react-three/fiber"
import { useGesture } from "react-use-gesture"
import { animated, useSpring} from "@react-spring/three"
import { useOrbitControls } from "./Controls"
import  useApp  from "./stores/useApp"
import { useEffect, useState } from "react"



export default function Adu({ onPositionChange}) {


    const {size, viewport} = useThree()
    const aspect = size.width / viewport.width
    const { enableCamera, disableCamera } = useOrbitControls()
    const [spring, api] = useSpring(() => ({ 
        position: [-2, 0, 0], 
        scale: [1, 1, 1], 
        rotation: [0, 0, 0], 
        config: {mass: 1, tension: 210, friction: 20, precision: 0.0001
        },
    }))
    const bind = useGesture({
        onDragStart() {
            disableCamera()
            return api.start({position: [-2, 0, 0]})
        },
        onDrag({ offset: [x, z] }) {
            const position = [x / aspect, 0, z / aspect]
            onPositionChange({x: position[0], z: position[2]})
            return api.start({to: {x: position[0], y: position[1]}})
            
        },
        onHover({ hovering }) {
            return api.start({scale: hovering ? [1.2, 1.2, 1.2] : [1, 1, 1] })
        },
        onDragEnd() {
            enableCamera()
            api.start({position: [-2, 0, 0]})
            api.set({scale: [1 , 1, 1]})
        }
      }
    )
    

    const [visible, setVisible ] = useState(false)
    

    useEffect(() =>
    {
        const unsubscribeReset = useApp.subscribe(
            (state) => state.phase,
            (phase) =>
            {
                console.log('phase changes to', phase)
                if (phase === 'showAdu'){
                    makeVisible()
                }
            }
        )
        // cleaning subscriptions
        return () => {
            unsubscribeReset()
        }

        
   }, [])

   const makeVisible = () => {
    setVisible(true);
  };

   //TODO: Finish Coding makeVisible method

    return <animated.mesh {...spring} {...bind()}
        onPointerOver={(event) => event.stopPropagation() } 
        onPointerOut={ (event) => event.stopPropagation() }
        visible = {visible}
        >
        <boxGeometry />
        <meshStandardMaterial color={'white'}/>
    </animated.mesh>
}