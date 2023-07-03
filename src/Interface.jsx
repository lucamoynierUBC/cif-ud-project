import { Html } from "@react-three/drei"
import { useState } from "react"

export default function Interface() {

    //setExpanded will update the state of the interface, expand is the current state
    //when state is updates the component re-renders

    //Todo: pass in the function version, refer to the youtube video about useState
    const [expand, setExpand] = useState(false)
    const [housingOpp, setHousingOpp] = useState(false)

    
    function handleClick() {
        setExpand(!expand)
        
    }

    function handleHousingOpp() {
        setHousingOpp(!housingOpp)
        setExpand(!expand)
    }

    let buttonText
    if (!expand && !housingOpp) {
        buttonText = "Click Me"
    } else if (expand && !housingOpp) {
        buttonText = "Click to collapse"
    } else if (!expand && housingOpp) {
        buttonText = ""
    }
    

    

    return <Html position={[1, 1, 0]}
        wrapperClass= {expand? 'testInterfaceExpanded' : 'testInterface'}
        center
        distanceFactor={8}>
        <div>
            <div onClick = {handleClick}>
                {buttonText}
            </div>

            {expand && <div> 
                <button className="testButton"> Carbon Neutrality </button>
                <button className="testButton"> Economic Oppurtunity </button>
                <button className="testButton" onClick={handleHousingOpp}> Housing Oppurtunity </button>
                
            </div>}

            {housingOpp && <div> 
                hello
            </div>}

        </div>
    </Html>
}