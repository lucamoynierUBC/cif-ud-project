import NavLogo from "./NavLogo";



export default function NavBar(props) {
      
    return(
            <nav className="navBar">
                <ul className="navBar-nav">{ props.children }</ul>
                <NavLogo></NavLogo>
            </nav>
        
        
    )
}