import { useProgress } from "@react-three/drei";
import NavLogo from "./NavLogo";
import { useState } from "react";
import { useEffect } from "react";

export default function NavBar(props) {
    
    // White nav Bar on the top of the screen, main Component for the Nav
    const { progress } = useProgress()
    const [isUILoaded, setIsUILoaded] = useState(false);

    useEffect(() => {
        if (progress >= 100) {
            setIsUILoaded(true);
        }
    }, [progress]);
    return(
            isUILoaded && <nav className="navBar">
                <ul className="navBar-nav">{ props.children }</ul>
                <NavLogo></NavLogo>
            </nav>
    )
}