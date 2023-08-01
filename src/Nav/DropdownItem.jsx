export default function DropdownItem(props) {

    //TODO pass state from parent to child
    return(
        <a href="#" className="menu-item" onClick={() => props.setActiveMenu(props.goToMenu)}>
            {/* <span className="icon-button">{props.leftIcon}</span> */}
            {props.children}
            {/* <span className="icon-right">{props.rightIcon}</span> */}
        </a>

    )
}