import { useState } from "react"
import { CSSTransition } from "react-transition-group";
import { PiCaretCircleDown, PiCaretDownBold } from "react-icons/pi";
import { Collapse , Button,  Space, Radio, Badge, notification} from "antd";
import Layout, { Content, Header } from "antd/es/layout/layout";
import useTag from "../../stores/useTag";


// component for drop down text boxes
export default function Dropdown({panel1Text, panel2Text, panel3Text}){

  const selectAttatched = useTag((state) => state.selectAttatched)
  const selectAttic = useTag((state) => state.selectAttic)
  const selectBasement = useTag((state) => state.selectBasement)
  const selectDetatched = useTag((state) => state.selectDetatched)

  const panelStyle = {
    background: '#ffffff',
    borderRadius: 8,
  }

  const items = [
    {
      key: '1',
      label: 'About',
      children: panel1Text,
      style: panelStyle
    },
    {
      key: '2',
      label: 'Types',
      children: panel2Text,
      style: panelStyle

    },
    {
      key: '3',
      label: 'Parking',
      children: panel3Text,
      style: panelStyle
    },
  ]
{/* <Space wrap>
        <Button>{"Attic"}</Button>
        <Button>{"Basement"}</Button>
        <Button>{"Attatched"}</Button>
        <Button>{"Detatched"}</Button>
        </Space>, */}

    

    return(
      
        <Collapse
        bordered={false}
        defaultActiveKey={['1']}
        style={{
          borderRadius: "0px",
          borderBottomLeftRadius: "8px",
          borderBottomRightRadius: "8px",
        }}
        items={items}
        accordion={true}
        />
      
        
    )
}