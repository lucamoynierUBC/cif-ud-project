import DropdownMenu from "./DropdownMenu";
import NavBar from "./NavBar";
import NavItem from "./NavItem";
import NavText from "./NavText";

export default function Nav() {
    return(
        <NavBar>
            <NavText text="City of Yes"/>
            <NavText text="Urban Design"/>
            <NavItem icon=">">
                <DropdownMenu />
            
            </NavItem>
        </NavBar>
    )
}