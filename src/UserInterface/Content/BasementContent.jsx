import { useRef, useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"

export default function BasementContent() {
    const { ref: myRef, inView: visible} = useInView()
    
    // const myRef = useRef()
    // const [visible, setVisible] = useState()

    console.log('Visible? ', visible)
    // useEffect(() => {
    //     const observer = new IntersectionObserver ((entries) => {
    //         const entry = entries[0]
    //         setVisible(entry.isIntersecting)
    //     })
    //     observer.observe(myRef.current)
    // }, [])

    return(
        <div>
            <h2 ref={myRef}>Basement Adu</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor at auctor urna nunc id cursus metus.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sociis natoque penatibus et magnis dis parturient montes.</p>
        </div>
    )
}