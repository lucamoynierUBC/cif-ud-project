import { useInView } from "react-intersection-observer"
export default function AtticContent() {
    // records when this component is viewable in the browser
    const { ref: myRef, inView: visible} = useInView({
        onChange: (visible) => {
            
            console.log("Attic visibility is: ", visible)
            
        }
    })
    return(
        <div>
            <h2 ref={myRef}>Attic ADU</h2>
            <img src="https://i.imgur.com/bD7mqMR.png" width={"100%"}></img>
            <p>The last type of ADU is an <b>attic</b> type. Like the basement type, the attic type utilizes existing building space, and this suits smaller lots better.</p>
        </div>
    )
}