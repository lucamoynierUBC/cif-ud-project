import { useState } from "react"

export default function NavItem(props){
    
    // manage whether or not the dropdowm menu is open.
    const [open, setOpen] = useState(false)

    // Each nav-item is a box that is slightly smaller than the nav bar itself
    return (
        <li className="nav-item">
            <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
                {open ? props.alternativeIcon: props.defaultIcon}
            </a>
            {open && props.children}
        </li>
    )
}