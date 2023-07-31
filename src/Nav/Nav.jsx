import React from "react";
import DropdownMenu from "./DropdownMenu";
import NavBar from "./NavBar";
import NavItem from "./NavItem";
import NavText from "./NavText";


export default function Nav() {
    return(
        <NavBar>
            <NavText text="City of Yes"/>
            <NavText text="Urban Design"/>
            <NavItem icon={<svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 16 10">
    <path d="M15.434 1.235A2 2 0 0 0 13.586 0H2.414A2 2 0 0 0 1 3.414L6.586 9a2 2 0 0 0 2.828 0L15 3.414a2 2 0 0 0 .434-2.179Z"/>
  </svg>}>
                <DropdownMenu />
            
            </NavItem>
        </NavBar>
    )
}