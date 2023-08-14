import { useState } from "react";
import DropdownItem from "./DropdownItem";
import { CSSTransition } from "react-transition-group";
import './navStyles.css'

export default function DropdownMenu() {
    const [activeMenu, setActiveMenu] = useState('main')

    // Use CSSTransition to handle the conditional logic of handling multiple menus and transitions when they are added/removed
    return (
        <div className="dropdown">
            <CSSTransition 
            in={activeMenu === 'main'} 
            unmountOnExit 
            timeout={500} 
            classNames="menu-primary">
                <div className="menu">
                    <DropdownItem goToMenu="settings" setActiveMenu={setActiveMenu}>About</DropdownItem>
                    <DropdownItem>Contact</DropdownItem>

                </div>
            </CSSTransition>

            <CSSTransition 
            in={activeMenu === 'settings'} 
            unmountOnExit 
            timeout={500} 
            classNames="menu-secondary">
                <div className="menu">
                    <DropdownItem goToMenu="main" setActiveMenu={setActiveMenu}>Settings</DropdownItem>
                    <DropdownItem>Settings</DropdownItem>

                </div>
            </CSSTransition>
        </div>
    )
}