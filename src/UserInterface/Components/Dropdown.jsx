import { useState } from "react"
import "./Dropdown.css"
import { CSSTransition } from "react-transition-group";
import { PiCaretCircleDown, PiCaretDownBold } from "react-icons/pi";
import { Collapse , Button,  Space, Radio, Badge, notification} from "antd";
import Layout, { Content, Header } from "antd/es/layout/layout";
import useTag from "../../stores/useTag";


// component for drop down text boxes
export default function Dropdown(props){

  const selectAttatched = useTag((state) => state.selectAttatched)
  const selectAttic = useTag((state) => state.selectAttic)
  const selectBasement = useTag((state) => state.selectBasement)
  const selectDetatched = useTag((state) => state.selectDetatched)


  const text = `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce aliquam ipsum eget lectus facilisis sagittis. 
  Nam commodo, sapien eget vestibulum imperdiet, eros odio pulvinar lectus, sit amet facilisis nisi felis et urna. 
  In hac habitasse platea dictumst. Aliquam neque nisl, vulputate non sapien sit amet, porta imperdiet lorem. 
  Mauris laoreet lectus ut justo laoreet, at maximus nibh scelerisque. 
  Nam sed libero sapien. Morbi vel purus fringilla, porttitor magna at, gravida libero. 
  `
  const panelStyle = {
    background: 'white',
    marginBottom: 20,
    borderRadius: 8
  }

  const items = [
    {
      key: '1',
      label: <Badge dot>
          <a href="#">About</a>
        </Badge>,
      children: <p>{text}</p>,
      style: panelStyle
    },
    {
      key: '2',
      label: 'Types',
      children: <Layout style={{background: 'white'}}>
          <Radio.Group>
          <Radio.Button value="a" onClick={() => selectAttic()}>Attic</Radio.Button>
          <Radio.Button value="b" onClick={() => selectBasement()}>Basement</Radio.Button>
          <Radio.Button value="c" onClick={() => selectAttatched()}>Attatched</Radio.Button>
          <Radio.Button value="d" onClick={() => selectDetatched()}>Detatched</Radio.Button>
          </Radio.Group>
          <Content style={{paddingTop: '10px'}}>{text}</Content>
        
        </Layout>,
      style: panelStyle

    },
    {
      key: '3',
      label: 'Parking',
      children: <p>{text}</p>,
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