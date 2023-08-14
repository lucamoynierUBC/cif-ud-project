import { useInView } from "react-intersection-observer"
export default function AtticContent() {
    const { ref: myRef, inView: visible} = useInView({
        onChange: (visible) => {
            
            console.log("Attic visibility is: ", visible)
            
        }
    })
    return(
        <div>
            <h2 ref={myRef}>Attic ADU</h2>
            <img src="https://i.imgur.com/bD7mqMR.png" width={"100%"}></img>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor at auctor urna nunc id cursus metus.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sociis natoque penatibus et magnis dis parturient montes.</p>
        </div>
    )
}