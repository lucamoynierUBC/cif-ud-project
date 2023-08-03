import { useInView } from "react-intersection-observer"

export default function AttatchedContent() {
    const { ref: myRef, inView: visible} = useInView({
        onChange: (visible) => {
            
            console.log("Attatched visibility is: ", visible)
            
        }
    })
    return(
        <div>
            <h2 ref={myRef}>Attached ADU</h2>
            <p>The first kind of ADU type is attached. This kind of unit often takes up an existing space in a house like an attached garage, 
                but can also be a newly constructed space.
            </p>
            <p>This kind of ADU is particularly great on small lots or on lots where parking is not a need of the primary occupant.</p>
            <p>Ample walkway space is required to the back of the unit in order to build this type of ADU.</p>
        </div>
    )
}