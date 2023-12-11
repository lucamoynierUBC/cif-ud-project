import { Flex, Modal } from "antd";
import { useState } from "react";
import { MdOutlineTouchApp } from "react-icons/md";
import { TbHandClick } from "react-icons/tb";
export default function MobileModaL() {
    const [open, setOpen] = useState(true)


    const handleCancel = () => {
        setOpen(false)
    }

    return (
        <Modal maskClosable={false} footer={null} centered title="City of Yes Housing Explorer" open={open} onCancel={handleCancel}>
            <Flex >
                <p>Use this tool to explore the different polies that are part of the <b>City of Yes for Housing Opportunity</b>  </p>
            </Flex>
            <Flex gap={'large'}>
                <ul>
                    <li>  Use your finger to navigate the map</ li>
                </ul>
                <MdOutlineTouchApp size={'50px'}/>
            </Flex>
            <Flex>
                <ul>
                    <li>Touch on highlighted buildings to explore proposals</li>
                </ul>
                <TbHandClick size={'50px'}/>
            </Flex>

        </Modal>
    )
}