import { useThree, Canvas } from "@react-three/fiber"
import { useGesture } from "react-use-gesture"
import { animated, useSpring} from "@react-spring/three"
import { useOrbitControls } from "./ThreeJS/Controls"
import  useApp  from "./stores/useApp"
import { useEffect, useState } from "react"
import { Html } from "@react-three/drei"
import useInterface from "./stores/useInterface"


// NOT USED
export default function Adu({ onPositionChange, position, id, scale}) {
    // acess the size and viewport
    const {size, viewport} = useThree()
    const aspect = size.width / viewport.width
    // Access enableCamera and disableCamera functions from OrbitControls context
    const { enableCamera, disableCamera } = useOrbitControls()
    // create animated spromg values for different mesh properties
    const [spring, api] = useSpring(() => ({ 
        position: position, 
        scale: scale, 
        rotation: [0, 0, 0],
        color: 'white',
        config: {mass: 1, tension: 210, friction: 20, precision: 0.0001
        },
    }))
    // Use useGesture hook to bind drag and hover gestures to the component
    const bind = useGesture({
        onDragStart() {
            disableCamera()
            return api.start({position: position})
        },
        onDrag({ offset: [x, z] }) {
            const position = [x / aspect, 0, z / aspect]
            onPositionChange({x: position[0], z: position[2]})
            return api.start({to: {x: position[0], y: position[1]}})
            
        },
        onHover({ hovering }) {
            api.start({scale: hovering ? scale.map(value => value * 1.2) : scale })
            api.start({color: hovering ? 'indianred' : 'white'})

        },
        onDragEnd() {
            enableCamera()
            api.start({position: position})
            api.set({scale: [1 , 1, 1]})
        }
      }
    )
    
    // State to toggle Adu visibility and the html for each Adu's id
    const [visible, setVisible ] = useState(false)
    const [displayId, setid] = useState(false)
    
    

    // Subscribe to state changes in the store
    useEffect(() =>
    {
        // Set adu to visible when phase changes to 'showAdu'
        const unsubscribeShowAdu = useApp.subscribe(
            (state) => state.phase,
            (phase) =>
            {
                console.log('phase changes to :', phase)
                if (phase === 'showAdu'){
                    makeVisible()
                }
                // bug over here, if called it wont display hide the adus
                if (phase === 'hideAdu'){
                    setVisible(false)
                }
            }
        )
        // Set adu ID to visible when numberIdentification changes to 'display'
        const unsubscribeNumber = useApp.subscribe(
            (state) => state.numberIdentification,
            (numberIdentification) =>
            {
                console.log('numberID changes to :', numberIdentification)
                if (numberIdentification == 'display'){
                    showId()

                }
                if (numberIdentification == 'hide'){
                    setid(false)
                }
            }
        )
        
        // Change adu scale when button is hovered over in the useInterface store
        const unsubscribeSelect = useInterface.subscribe(
            (state) => state.selection,
            (selection) => 
            {
                console.log('expand the scale of adu #', selection)
                if (selection === 2 && id === 2) {
                    api.start({scale: scale.map(value => value * 1.2)})
                    api.start({color: 'indianred'})
                }
                if (selection === 3 && id === 3) {
                    api.start({scale: scale.map(value => value * 1.2)})
                    api.start({color: 'indianred'})
                }
                if (selection === 4 && id === 4) {
                    api.start({scale: scale.map(value => value * 1.2)})
                    api.start({color: 'indianred'})
                }
                if (selection === null) {
                    api.start({scale: scale})
                    api.start({color: 'white'})
                }
            }
        )
        
        // Hide specific adus when button is clicked in the useInterface store
        const unsubscribeClick = useInterface.subscribe(
            (state) => state.clickSelection,
            (clickSelection) =>
            {
                console.log('hide all adu!')
                if (clickSelection === 1){
                    setVisible(false)
                }
                if (clickSelection === 2 && id != 2){
                    setVisible(false)
                }
                if (clickSelection === 3 && id != 3){
                    setVisible(false)
                }
                if (clickSelection === 4 && id != 4){
                    setVisible(false)
                }
            }
        )        
        // Clean up subscriptions
        return () => {
            unsubscribeShowAdu()
            unsubscribeNumber()
            unsubscribeSelect()
            unsubscribeClick()
        }

        
   }, [])

   // Method to set adu to visible
   const makeVisible = () => {
    setVisible(true);
  }

  // Method to show adu ID
  const showId = () => {
    setid(true)
  }

    return <animated.mesh {...spring} {...bind()}
        onPointerOver={(event) => event.stopPropagation() } 
        onPointerOut={ (event) => event.stopPropagation() }
        // toggle visibility here
        visible = {visible}
        >
        <boxGeometry />
        <animated.meshStandardMaterial color={spring.color}  />
        {displayId && <Html wrapperClass="idLabel">{id}</Html>}
    </animated.mesh>
}