import { useEffect, useState, useRef } from "react"
import useInterface from "../stores/useInterface"
import { useSpring, animated } from "@react-spring/web"
import "./MainInterface.css"
import Caret from "./Caret"
import Dropdown from "./Dropdown"
import AttatchedContent from "./Content/AttatchedContent"
import DetatchedContent from "./Content/DetatchedContent"
import BasementContent from "./Content/BasementContent"
import AtticContent from "./Content/AtticContent"
import useActions from "../stores/useActions"

export default function MainInterface() {
    //TODO: also have to pass visible as a prop
    const [visible, setVisible] = useState(false)
    const setVisibleState = useInterface((state) => state.toggleVisible)
    //useAction
    const unselectAllAdu = useActions((state) => state.unselectAll)
    

    useEffect(() => {
        const unsubscribeVisible = useInterface.subscribe(
            (state) => state.visible,
            (visible) => {
                
                console.log('visible set to: ', visible)
                setVisible(visible)

            }
        )
        const unsubscribeScroll = useActions.subscribe(
            (state) => [state.basement, state.attic, state.detatched, state.attatched],
            ([basement, attic, detatched, attatched]) => {
                if (attatched) {
                    document.getElementById("attatched").scrollIntoView({behavior:"smooth"})
                }
                if (detatched) {
                    document.getElementById("detatched").scrollIntoView({behavior:"smooth"})
                }
                if (attic) {
                    document.getElementById("attic").scrollIntoView({behavior:"smooth"})
                }
                if (basement) {
                    document.getElementById("basement").scrollIntoView({behavior:"smooth"})
                }

            }
        )
        return () => {
            unsubscribeVisible()
            unsubscribeScroll()
        }
    }, [])
    
    const springProps = useSpring({
        opacity: visible ? 1 : 0,
      });


    return(
        <div>
            {!visible && (<Caret visible={visible} setVisible={setVisible} setVisibleState={setVisibleState}></Caret>)}
            {visible && (<animated.div style={springProps} className="mainInterface">
                <div className="mainInterfaceContainer"  >
                    <div className="titleCloseBtn-layout">
                        <button className="titleCloseBtn" onClick={() => {setVisible(false), setVisibleState(), unselectAllAdu()}}> &#x2715; </button>
                    </div>
                    <div className="title">
                        <h1> Single Family Home </h1>
                    </div>
                    <div className="body">
                        <img width={'300px'} height={'200px'} src="404image" ></img>
                        <p>Legally, [Character A]’s home is defined as a one “family” residence. 
                            Only certain changes are possible due to  its shape and structure. </p>

                        <Dropdown text="WHATS AN ADU"/>

                        <p>ADUs are also permissible for two family homes.</p>
                        <div id="attatched">
                            <AttatchedContent/>
                        </div>
                        <div id="detatched">
                            <DetatchedContent />
                        </div>
                        <div id="attic">
                            <AtticContent></AtticContent>
                        </div>
                        <div id="basement">
                            <BasementContent></BasementContent>
                        </div>
                    </div>
                    
                    <div className="footer"></div>


                </div>
            </animated.div>)}
        </div>

    )

}