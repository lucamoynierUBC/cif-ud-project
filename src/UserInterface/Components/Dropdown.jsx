import { useState } from "react"
import "./Dropdown.css"
import { CSSTransition } from "react-transition-group";
import { PiCaretCircleDown, PiCaretDownBold } from "react-icons/pi";
import { Collapse , Button,  Space} from "antd";


// component for drop down text boxes
export default function Dropdown(props){
    const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`

const items = [
  {
    key: '1',
    label: 'About',
    children: <p>{text}</p>,
  },
  {
    key: '2',
    label: 'Types',
    children: <Space wrap>
    <Button>{"Attic"}</Button>
    <Button>{"Basement"}</Button>
    <Button>{"Attatched"}</Button>
    <Button>{"Detatched"}</Button>
  </Space>,
  },
  {
    key: '3',
    label: 'Parking',
    children: <p>{text}</p>,
  },
]

    

    return(
        <Collapse items={items} defaultActiveKey={['1']} />
    )
}