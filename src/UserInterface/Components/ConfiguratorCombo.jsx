import { Button, Card, Col, Layout, Radio, Row, Avatar, Slider, notification, Space, Divider, Tag, Switch, Flex, Select} from 'antd';
import { useEffect, useState } from 'react';
import { PiSlidersHorizontal } from 'react-icons/pi';
import useConfigurator from '../../stores/useConfigurator';
import useTag from '../../stores/useTag';
import useCamera from '../../stores/useCamera';


export default function ConfiguratorCombo({title}){
    const [api, contextHolder] = notification.useNotification();
    const { Meta } = Card;
    const setToggle = useConfigurator((state) => state.setToggle)
    const [value, setValue] = useState(1)
    const setZoom = useCamera((state) => state.setZoom)

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

    const onChange = (checked) => {
        console.log(`switch to ${checked}`);
        if (checked) {
            setToggle("Medium Density")
        } else {
            setToggle(null)
        }
    }

    const onChangeValue = (e) => {
        setValue(e.target.value);
      };

    const options = [
        ({value: 1, label: "Residential Conversion"}),
        ({value: 2, label: "Campus Infill"}),
    ]

    const handleChange = (value) => {
        console.log(`selected ${value}`)
        console.log(value)
        if (value){
            setToggle(value)
        }
    }

    
    return(
        <Card 
            type="inner" 
            extra={<PiSlidersHorizontal size={"25px"}></PiSlidersHorizontal>}
            title={<Meta 
            title={title}
            style={{padding: "15px 0"}} 
            description={<Space size={[0, 8]} wrap><Tag color="geekblue">Multi-Use</Tag><Tag color="purple">Apartment Building</Tag></Space>}/>}
            >
                <Row gutter={[0, 0]} align={'middle'}>
                    <Col span={12}>
                        View:
                    </Col>
                    <Col span={12}>
                        <Flex justify='flex-end'>
                            <Radio.Group onChange={onChangeValue} value={value} size="large" >
                            {/* options={[{ label: '👁️', value: 'Apple' }, { label: '✈️', value: 'Pear' }]} */}
                            <Radio onClick={() => setZoom("Combo")} value={1}>👁️</Radio>
                            <Radio onClick={() => setZoom("Combo - BOV")} value={2}>✈️</Radio>
                            </Radio.Group>
                        </Flex>
                        
                    </Col>
                    <Divider/>
                    <Col span={6}>
                        Select Proposals:
                    </Col>
                    <Col span={18}>
                       <Flex justify='flex-end'>
                           <Select
                            style={{width: '100%'}}
                            mode='multiple'
                            placeholder="Select Proposals"
                            options={options}
                            onChange={handleChange}

                           />
                       </Flex>
                    </Col>
                </Row>
            </Card>
    )
}