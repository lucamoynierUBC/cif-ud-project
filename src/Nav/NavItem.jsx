import { useState } from "react"

export default function NavItem(props){

    const [open, setOpen] = useState(false)

    return (
        <li className="nav-item">
            <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
                {open ? props.alternativeIcon: props.defaultIcon}
            </a>
            {open && props.children}
        </li>

    )

}