import NavLogo from "./NavLogo";

export default function NavBar(props) {
    
    // White Rectangle at the top of the screen, inside is the container for the children and the DCP logo.
    return(
            <nav className="navBar">
                <ul className="navBar-nav">{ props.children }</ul>
                <NavLogo></NavLogo>
            </nav>
    )
}