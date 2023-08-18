import NavLogo from "./NavLogo";

export default function NavBar(props) {
    
    // White nav Bar on the top of the screen, main Component for the Nav
    return(
            <nav className="navBar">
                <ul className="navBar-nav">{ props.children }</ul>
                <NavLogo></NavLogo>
            </nav>
    )
}