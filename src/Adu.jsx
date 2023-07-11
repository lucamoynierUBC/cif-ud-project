import { useThree, Canvas } from "@react-three/fiber"
import { useGesture } from "react-use-gesture"
import { animated, useSpring} from "@react-spring/three"
import { useOrbitControls } from "./Controls"
import  useApp  from "./stores/useApp"
import { useEffect, useState } from "react"
import { Html } from "@react-three/drei"
import useInterface from "./stores/useInterface"



export default function Adu({ onPositionChange, position, id}) {


    const {size, viewport} = useThree()
    const aspect = size.width / viewport.width
    const { enableCamera, disableCamera } = useOrbitControls()
    const [spring, api] = useSpring(() => ({ 
        position: position, 
        scale: [1, 1, 1], 
        rotation: [0, 0, 0], 
        config: {mass: 1, tension: 210, friction: 20, precision: 0.0001
        },
    }))
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
            console.log(hovering)
            return api.start({scale: hovering ? [1.2, 1.2, 1.2] : [1, 1, 1] })
        },
        onDragEnd() {
            enableCamera()
            api.start({position: position})
            api.set({scale: [1 , 1, 1]})
        }
      }
    )
    

    const [visible, setVisible ] = useState(false)
    const [displayId, setid] = useState(false)
    
    

    //Triggers certain events if state changes are detected
    useEffect(() =>
    {
        // set adu to visible
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
        //  set adu ID to visible
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
        
        // change adu scale when button is hovered over
        const unsubscribeSelect = useInterface.subscribe(
            (state) => state.selection,
            (selection) => 
            {
                console.log('expand the scale of adu #', selection)
                if (selection === 2 && id === 2) {
                    api.start({scale: [1.2, 1.2, 1.2]})
                }
                if (selection === 3 && id === 3) {
                    api.start({scale: [1.2, 1.2, 1.2]})
                }
                if (selection === 4 && id === 4) {
                    api.start({scale: [1.2, 1.2, 1.2]})
                }
                if (selection === null) {
                    api.start({scale: [1, 1, 1]})
                }
            }
        )
        
        // hide specific adu's when button is clicked
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
        // cleaning subscriptions
        return () => {
            unsubscribeShowAdu()
            unsubscribeNumber()
            unsubscribeSelect()
            unsubscribeClick()
        }

        
   }, [])

   const makeVisible = () => {
    setVisible(true);
  };

  const showId = () => {
    setid(true)

  }

   //TODO: Finish Coding makeVisible method

    return <animated.mesh {...spring} {...bind()}
        onPointerOver={(event) => event.stopPropagation() } 
        onPointerOut={ (event) => event.stopPropagation() }
        visible = {visible}
        >
        <boxGeometry />
        <meshStandardMaterial color={'white'}/>
        {displayId && <Html>{id}</Html>}
    </animated.mesh>
}