import { useEffect, useState } from "react"
import useInterface from "../stores/useInterface"
import { useSpring, animated } from "@react-spring/web"
import "./MainInterface.css"
import Caret from "./Components/Caret"
import DropdownADU from "./Components/DropdownADU"
import useTag from "../stores/useTag"
import useCamera from "../stores/useCamera"
import AxiomViewButton from "./Components/AxiomViewButton"
import { Button, Card, Col, Layout, Radio, Row, Avatar, Slider, notification, Space, Divider, Tag} from 'antd';
import Icon from "@ant-design/icons/lib/components/Icon"
import { PiSlidersHorizontal } from "react-icons/pi"
import ConfiguratorAdu from "./Components/ConfiguratorAdu"
import ConfiguratorUAP from "./Components/ConfigurartorUAP"
import DropdownUAP from "./Components/DropdownUAP"
import TourGuide from "./Components/TourGuide"
import ConfiguratorCombo from "./Components/ConfiguratorCombo"
import { Route, Router, Link } from "wouter";
import { useProgress } from "@react-three/drei"
import ComboAnnotation from "./Components/Annotations/ComboAnnotation"
import Modal from "antd/es/modal/Modal"
import MobileModaL from "./Components/MobileModal"

const { Header, Content, Sider } = Layout;

// main component for the sidebar UI
export default function MainInterface() {
    // state for toggling the visibility of the component
    const [visible, setVisible] = useState(false)
    // toggle visibility of different configurators
    const [configuratorType, setConfiguratorType] = useState(null)
    const {progress} = useProgress()
    const [isUILoaded, setIsUILoaded] = useState(false);
    const isMobile = window.innerWidth <= 600

    const [api, contextHolder] = notification.useNotification();
    notification.config({
        placement: "bottomLeft",
        bottom: "50px"
      });
    const openNotification = () => {
        api.open({
          message: 'Notification Title',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi laoreet tellus et velit congue pellentesque. In porttitor quis sapien ac rhoncus. Nulla quis diam sapien. Phasellus sollicitudin eleifend velit, sed gravida nisi. Morbi sed suscipit orci, vitae maximus justo. Aenean rutrum finibus mi, id porttitor velit pulvinar sed. ',
        placement: "bottomLeft"
        });
      };
    
    
    // Subscribe to changes in Interface and Actions stores

    useEffect(() => {
        // Toggle siderbar UI visibility when global interface state changes 
        const unsubscribeVisible = useCamera.subscribe(
            (state) => state.zoom,
            (zoom) => {
                if (zoom === "Medium Density" | zoom === "Medium Density - BOV") {
                    setVisible(true)
                    setConfiguratorType("Medium Density")
                }
                else if (zoom === "Adu" | zoom === "Adu - BOV") {
                    setVisible(true)
                    setConfiguratorType("Adu")
                
                } else if (zoom === "Combo" | zoom === "Combo - BOV") {
                    setVisible(true)
                    setConfiguratorType("Combo")


                } else {
                    setVisible(false)
                    setConfiguratorType(null)
                }
            }
        )
        if (progress >= 100) {
            setIsUILoaded(true);
        }
        return () => {
            unsubscribeVisible()
        }
    }, [progress])

    // Animation spring properties for fading in/out the interface
    const springProps = useSpring({
        opacity: visible ? 1 : 0,
      });

    const cardStyles = {
        background: "f5f5f5"
    }

    const panel1Text = <p>
        Across the city, small homeowners face challenges with rising costs and aging in place. 
        Regulations limit what New Yorkers can do with their own property, which means families have to move farther away from their grandparents or grandchildren, or are forced into uncomfortably cramped houses. 
        Meanwhile, spaces like garages can go unused when small improvements could make them comfortable homes. 
        <br /> <br />Accessory dwelling units (backyard cottages, garage conversions) can add new homes and support homeowners without significantly changing the look and feel of a neighborhood.
    </p>

    const panel2Text = <p>
        Allowing "accessory dwelling units," or ADUs — like backyard cottages, garage conversions, and basement apartments — can give homeowners extra cash or provide more space for multi-generational families.
    </p>

    const panel1TextUAP = <p>

        New York is a city of neighborhoods, and each neighborhood is anchored by commercial corridors with shops and vibrant street life — a little town center for every community.
        <br/>
        <br/>
        These types of buildings, with stores on the street level and apartments above them, exist across the five boroughs. However, in many places, regulations preclude the creation of new mixed-use corridors.
        <br/>
        <br/>
        Unfortunately, today’s regulations can make it impossible to add housing above businesses — even on active commercial streets.
        <br/>
        <br/>
        By legalizing new housing above businesses on commercial streets, City of Yes will create affordable housing, help neighbors reach small businesses, and build vibrant mixed-use neighborhoods.
        
    </p>

    const panel2TextUAP = <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus ante lectus, luctus posuere augue vestibulum ac. In hac habitasse platea dictumst. Duis sed tempus sapien. 
        Quisque bibendum elit in odio feugiat sollicitudin. Curabitur pharetra facilisis nulla, et auctor felis dignissim quis.
    </p>
    const panel3TextUAP = <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus ante lectus, luctus posuere augue vestibulum ac. In hac habitasse platea dictumst. Duis sed tempus sapien. 
    Quisque bibendum elit in odio feugiat sollicitudin. Curabitur pharetra facilisis nulla, et auctor felis dignissim quis.
    </p>

    return(
        <Router>
        <div>
            {/* Show caret if interface is not visible */}
            {/* {!visible && (<Caret visible={visible} setVisible={setVisible} setVisibleState={setVisibleState}></Caret>)} */}
            {isUILoaded && !isMobile && <TourGuide></TourGuide>}
            {/* {isUILoaded && <ComboAnnotation></ComboAnnotation>} */}
            {isUILoaded &&  <AxiomViewButton></AxiomViewButton>}
            {isUILoaded && isMobile && <MobileModaL></MobileModaL>}
            {/* Show main interface/sidebar UI if visible */}
            {visible && (<animated.div style={springProps} className="mainInterface">
                <div className="mainInterfaceContainer"  >
                    <Layout style={{background: 'none'}}>
                        <Content style={{
                            padding: 0,
                            margin: 0,
                            }}>
                                {configuratorType == "Adu" && (
                                    <ConfiguratorAdu title="Accessory Dwelling Unit"/>
                                )}
                            
                               {configuratorType == "Medium Density" && (
                                    <ConfiguratorUAP title="Town Center"/>
                               )}
                               {configuratorType == "Combo" && (
                                    <ConfiguratorCombo title={"Combined Proposals"}/>
                               )}
                                {/* <Route path="/adu" component={ConfiguratorAdu} />
                                <Route path="/medium-density" component={ConfiguratorUAP} />
                                <Route path="/combo" component={ConfiguratorCombo} /> */}
                              
                            </Content>
                        <Content style={{
                            padding: 0,
                            minHeight: 280,
                            marginTop: 20,
                            }}>
                                {(configuratorType == "Adu" || configuratorType == "Adu - BOV") &&  (
                                    <DropdownADU panel1Text={panel1Text} panel2Text={panel2Text} panel3Text={panel3TextUAP}/>
                                )}
                                {(configuratorType == "Medium Density" || configuratorType == "Medium Density - BOV") && (
                                    <DropdownUAP  panel1Text={panel1TextUAP} panel2Text={panel2TextUAP} panel3Text={panel3TextUAP}/>
                                )}
                                {/* <Link href="/adu">ADU Configurator</Link>
                                <Link href="/medium-density">UAP Configurator</Link>
                                <Link href="/combo">Combined Proposals</Link> */}

                        </Content>
                    </Layout>
                    

                </div>
            </animated.div>)}
        </div>
        </Router>
    )
}