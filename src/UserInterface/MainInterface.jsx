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
import useCamera from "../stores/useCamera"

export default function MainInterface() {
    //TODO: also have to pass visible as a prop
    const [visible, setVisible] = useState(false)
    const setVisibleState = useInterface((state) => state.toggleVisible)
    //useAction
    const unselectAllAdu = useActions((state) => state.unselectAll)
    const zoom = useCamera((state) => state.zoomClose)
    

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
                        <button className="titleCloseBtn" onClick={() => {setVisible(false), setVisibleState(), unselectAllAdu(), zoom()}}> &#x2715; </button>
                    </div>
                    <div className="title">
                        <h1> Single Family Home </h1>
                    </div>
                    <div className="body">
                        <img src="https://i.imgur.com/wVvvk87.png" width={"100%"} ></img>
                        <p>Legally, this home is defined as a one family residence. Only certain additional housing options are possible due to its shape and structure. 
                            In this case, an Accessible Dwelling Unit (ADU) might be a good option! </p>

                        <p>ADUs are also permissible for two family homes.</p>
                        <div id="attatched">
                            <AttatchedContent/>
                        </div>
                        <div id="detatched">
                            <DetatchedContent />
                        </div>
                        <div id="basement">
                            <BasementContent></BasementContent>
                        </div>
                        <div id="attic">
                            <AtticContent></AtticContent>
                        </div>

                        <Dropdown text="WHATS AN ADU" content={<div dangerouslySetInnerHTML={{ __html: `An <b>Accessible Dwelling Unit (ADU)</b> is an additional, private, single housing unit meant to be placed on lots with an existing one or two-family residence. They work well in a low density context because owners and residents of homes in these neighborhoods can build ADUs without the need for rezoning. There are four main types. `}} />}/>
                        <Dropdown text="BUILDING HEIGHT" content="While not all buildings in these kinds of neighborhoods  keep within a one to two story limit, 
                        ADUs cannot be more than two stories or be placed on residences that are taller than two stories."/>
                        <Dropdown text="CLIMATE" content={<div dangerouslySetInnerHTML={{ __html: `Another important consideration for <b>basement</b> types is flooding. In regions at risk of water surges—either by storm surge on land or in regions near the coast—this type is not allowed. Click here to find out if this applies to your home! `}} />}/>
                        <Dropdown text="PARKING" content="Another way in which ADUs differ from primary units is that they must be reasonably proximate to public transportation, and thus do not require additional parking spots."/>
                        <Dropdown text="LIGHT & AIR" content={<div dangerouslySetInnerHTML={{ __html: `Proper ventilation and visual comfort are essential to the health, safety, and energy needs of New York residents. Thus, <b>at least half</b> of <b>basement</b> units must be above ground to meet minimum airflow and natural lighting requirements. Basements failing to meet this requirement are not suited for ADUs. `}} />}/>
                    </div>
                    
                    <div className="footer"></div>


                </div>
            </animated.div>)}
        </div>

    )

}