import { useState } from "react"

export default function NavText(props) {

    const [open, setOpen] = useState(false)

    // Similar to navItem but is for buttons with text instead of buttons w/ icons
    return(
        <li className="nav-item-text">
            <h1 className="text-button" onClick={() => {setOpen(!open), window.open(props.url, "_blank")}}>
                {props.text}
            </h1>
            {open && props.children}
        </li>
    )

}