import React from "react";
import DropdownMenu from "./DropdownMenu";
import NavBar from "./NavBar";
import NavItem from "./NavItem";
import NavText from "./NavText";


export default function Nav() {
    return(
        <NavBar>
            <NavText  url="https://www.nyc.gov/site/planning/plans/city-of-yes/city-of-yes-overview.page" text="City of Yes"/>
            <NavText url="https://www.nyc.gov/site/planning/planning-level/urban-design/urban-design-principle.page" text="Principles of Good Design"/>
            {/* <NavItem defaultIcon={<svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 16 10">
                <path d="M15.434 1.235A2 2 0 0 0 13.586 0H2.414A2 2 0 0 0 1 3.414L6.586 9a2 2 0 0 0 2.828 0L15 3.414a2 2 0 0 0 .434-2.179Z"/></svg>} alternativeIcon={<svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" 
                xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 16 10">
                <path d="M9.207 1A2 2 0 0 0 6.38 1L.793 6.586A2 2 0 0 0 2.207 10H13.38a2 2 0 0 0 1.414-3.414L9.207 1Z"/>
                </svg>}>
                <DropdownMenu />
            
            </NavItem> */}
        </NavBar>
    )
}