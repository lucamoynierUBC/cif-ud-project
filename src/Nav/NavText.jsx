import { useState } from "react"

export default function NavText(props) {

    const [open, setOpen] = useState(false)

    return(
        <li className="nav-item-text">
            <h1 className="text-button" onClick={() => setOpen(!open)}>
                {props.text}
            </h1>
            {open && props.children}
        </li>
    )

}