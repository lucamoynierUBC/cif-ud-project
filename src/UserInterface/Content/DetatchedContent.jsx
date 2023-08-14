import { useInView } from "react-intersection-observer"
export default function DetatchedContent() {
    const { ref: myRef, inView: visible} = useInView({
        onChange: (visible) => {
            
            console.log("Detatched visibility is: ", visible)
            
        }
    })
    return(
        <div>
            <h2 ref={myRef}>Detatched ADU</h2>
            <img src="https://i.imgur.com/IPXwVOA.png" width={"100%"}></img>
            <p>The detached ADU is similar to the attached. The primary difference is that detached ADUs are not physically connected to their primary unit.
            </p>
            <p>
                Like its attached counterpart, the detached ADU is particularly great on small lots or on lots where parking is not a need of the primary occupant, 
                and ample walkway space is required to the back of the unit in order to build this type of ADU.
            </p>
        </div>
    )

}
