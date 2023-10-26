import { Button, Card, Col, Layout, Radio, Row, Avatar, Slider, notification, Space, Divider, Tag, Switch, Flex} from 'antd';
import { PiSlidersHorizontal } from 'react-icons/pi';
export default function(Configurator){
    const [api, contextHolder] = notification.useNotification();
    const { Meta } = Card;

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

    return(
        <Card 
            type="inner" 
            extra={<PiSlidersHorizontal size={"25px"}></PiSlidersHorizontal>}
            title={<Meta 
            title="Conversion ADU" 
            style={{padding: "15px 0"}} 
            description={<Space size={[0, 8]} wrap><Tag color="blue">Low Density</Tag><Tag color="purple">Queens</Tag><Tag color="magenta">Multi-Family Home</Tag></Space>}/>}
            >
                <Row gutter={[0, 0]} align={'middle'}>
                    <Col span={24}>
                        <Flex justify='space-between' align='flex-end'>
                        Types:                
                        {contextHolder}
                        
                            <Radio.Group size="small" buttonStyle="solid">
                                <Radio.Button value="a" onClick={openNotification}>Attic</Radio.Button>
                                <Radio.Button value="b" >Basement</Radio.Button>
                                <Radio.Button value="c" >Attatched</Radio.Button>
                                <Radio.Button value="d" >Detatched</Radio.Button>
                            </Radio.Group>
                        </Flex>
                    </Col>
                    <Divider/>
                    <Col span={12}>
                        View:
                    </Col>
                    <Col span={12}>
                        <Flex justify='flex-end'>
                            <Radio.Group size="large" options={[{ label: '👁️', value: 'Apple' }, { label: '✈️', value: 'Pear' }]} />
                        </Flex>
                        
                    </Col>
                    <Divider/>
                    <Col span={12}>
                        Before/After:
                    </Col>
                    <Col span={12}>
                       <Flex justify='flex-end'>
                            <Switch checkedChildren="After" unCheckedChildren="Before"/>
                       </Flex>
                    </Col>
                </Row>
            </Card>
    )
}