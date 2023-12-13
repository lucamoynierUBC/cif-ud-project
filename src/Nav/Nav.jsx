import React from "react";
import NavBar from "./NavBar";
import NavText from "./NavText";
import { Button, Flex } from "antd";

export default function Nav() {
    return(
        <NavBar>
            {/* <NavText  url="https://www.nyc.gov/site/planning/plans/city-of-yes/city-of-yes-overview.page" text="City of Yes"/>
            <NavText url="https://www.nyc.gov/site/planning/planning-level/urban-design/urban-design-principle.page" text="Principles of Good Design"/> */}
            <Flex gap="large" wrap="wrap">
                <Button size="large" type="dashed" href="https://www.nyc.gov/site/planning/plans/city-of-yes/city-of-yes-overview.page">About </Button> 
            </Flex>
        </NavBar>
    )
}