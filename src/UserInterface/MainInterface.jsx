import { useEffect, useState } from "react"
import useInterface from "../stores/useInterface"
import { useSpring, animated } from "@react-spring/web"
import "./MainInterface.css"
import Caret from "./Components/Caret"
import Dropdown from "./Components/Dropdown"
import useTag from "../stores/useTag"
import useCamera from "../stores/useCamera"
import AxiomViewButton from "./Components/AxiomViewButton"
import { Button, Card, Col, Layout, Radio, Row, Avatar, Slider, notification, Space, Divider, Tag} from 'antd';
import Icon from "@ant-design/icons/lib/components/Icon"
import { PiSlidersHorizontal } from "react-icons/pi"
import Configurator from "./Components/Configurator"


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
                if (zoom == "Adu" || zoom == "Medium Density") {
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


    return(
        <div>
            {/* Show caret if interface is not visible */}
            {/* {!visible && (<Caret visible={visible} setVisible={setVisible} setVisibleState={setVisibleState}></Caret>)} */}
            {<AxiomViewButton></AxiomViewButton>}
            {/* Show main interface/sidebar UI if visible */}
            {visible && (<animated.div style={springProps} className="mainInterface">
                <div className="mainInterfaceContainer"  >
                    <Layout style={{background: 'none'}}>
                        <Content style={{
                            padding: 0,
                            margin: 0,
                            }}>
                               <Configurator title="Accessory Dwelling Unit" />
                            </Content>
                        <Content style={{
                            padding: 0,
                            minHeight: 280,
                            marginTop: 40
                            }}>
                            <Dropdown panel1Text={panel1Text} panel2Text={panel2Text}></Dropdown>
                        </Content>
                    </Layout>
                    

                </div>
            </animated.div>)}
        </div>
    )
}