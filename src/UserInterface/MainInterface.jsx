import { useEffect, useState, useRef } from "react"
import useInterface from "../stores/useInterface"
import { useSpring, animated } from "@react-spring/web"
import "./MainInterface.css"
import Caret from "./Components/Caret"
import Dropdown from "./Components/Dropdown"
import AttatchedContent from "./Content/AttatchedContent"
import DetatchedContent from "./Content/DetatchedContent"
import BasementContent from "./Content/BasementContent"
import AtticContent from "./Content/AtticContent"
import useTag from "../stores/useTag"
import useCamera from "../stores/useCamera"
import AxiomViewButton from "./Components/AxiomViewButton"
import { Button, Card, Col, Layout, Radio, Row, Avatar, Slider} from 'antd';

const { Header, Content, Sider } = Layout;

// main component for the sidebar UI
export default function MainInterface() {
    // state for toggling the visibility of the component
    const [visible, setVisible] = useState(false)
    // Accesing global states from stores
    const setVisibleState = useInterface((state) => state.toggleVisible)
    const unselectAllAdu = useTag((state) => state.unselectAll)
    const setZoom = useCamera((state) => state.setZoom)
    const { Meta } = Card;
    
    // Subscribe to changes in Interface and Actions stores
    useEffect(() => {
        // Toggle siderbar UI visibility when global interface state changes 
        const unsubscribeVisible = useCamera.subscribe(
            (state) => state.zoom,
            (zoom) => {
                if (zoom == "Adu") {
                    setVisible(true)

                } else {
                    setVisible(false)
                }
            }
        )
        return () => {
            unsubscribeVisible()
        }
    }, [])

    // Animation spring properties for fading in/out the interface
    const springProps = useSpring({
        opacity: visible ? 1 : 0,
      });

    return(
        <div>
            {/* Show caret if interface is not visible */}
            {/* {!visible && (<Caret visible={visible} setVisible={setVisible} setVisibleState={setVisibleState}></Caret>)} */}
            {<AxiomViewButton></AxiomViewButton>}
            {/* Show main interface/sidebar UI if visible */}
            {visible && (<animated.div style={springProps} className="mainInterface">
                <div className="mainInterfaceContainer"  >
                    {/* <div className="titleCloseBtn-layout">
                        <button className="titleCloseBtn" onClick={() => {setVisible(false), setVisibleState(), unselectAllAdu()}}> &#x2715; </button>
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
                    <div className="footer"></div> */}
                    <Layout style={{background: 'none'}}>
                        <Content style={{
                            padding: 0,
                            margin: 0,
                            
                            
                            
                            }}>

                                <Card title="Hello">
                                    <Row gutter={[10, 10]} align={'middle'}>
                                        <Col span={6}>
                                            Typology:
                                        </Col>
                                        
                                        <Col span={6}>
                                            <Button>ADU</Button>
                                        </Col>
                                        <Col span={6}>
                                            <Button>World</Button>
                                        </Col >
                                        <Col span={6}>
                                            <Button>World</Button>      
                                        </Col>
                                        
                                        <Col span={12}>
                                            View:
                                        </Col>
                                        <Col span={12}>
                                            <Radio.Group style={{p: 40}} options={[{ label: '👁️', value: 'Apple' }, { label: '✈️', value: 'Pear' }]} />
                                        </Col>
                                        <Col span={12}>
                                            Before/After:
                                        </Col>
                                        <Col span={12}>
                                            <Slider tooltip={{ formatter: null }} disabled={true} marks={["before", "after"]} min={0} max={1}></Slider>
                                        </Col>
                                        
                                        

                                    </Row>
                                
                                
                                </Card>
                                
                                
                              

                                
                            </Content>
                        <Content style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                            }}>
                            <Dropdown></Dropdown>
                        </Content>
                    </Layout>
                    

                </div>
            </animated.div>)}
        </div>
    )
}