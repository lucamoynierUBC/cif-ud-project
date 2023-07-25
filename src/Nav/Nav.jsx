import DropdownMenu from "./DropdownMenu";
import NavBar from "./NavBar";
import NavItem from "./NavItem";

export default function Nav() {
    return(
        <NavBar>
            <NavItem icon="👻"/>
            <NavItem icon="🫦"/>
            <NavItem icon="🎅🏻"/>
            <NavItem icon=">">
                <DropdownMenu />
            
            </NavItem>
        </NavBar>
    )
}