import { Html } from "@react-three/drei"
import { useState } from "react"

export default function Interface() {

    //setExpanded will update the state of the interface, expand is the current state
    //when state is updates the component re-renders

    //Todo: pass in the function version, refer to the youtube video about useState
    const [expand, setExpand] = useState(false)

    
    


    function handleClick() {
        setExpand(!expand)
        
    }
    

    return <Html position={[1, 1, 0]}
        wrapperClass= {expand? 'testInterfaceExpanded' : 'testInterface'}
        center
        distanceFactor={8}>
        <div>
            <div onClick = {handleClick}>
                {expand ? 'Click to collapse' : 'Click Me'}
            </div>

            {expand && <div> Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Sed eu arcu ultricies nibh bibendum viverra non eu enim. Maecenas at erat elit. 
                In at nunc id risus sollicitudin varius sit amet id metus. 
                Nulla lacinia velit et ipsum placerat, sed pellentesque est ultricies. 
                Sed tristique urna eleifend, dignissim arcu a, placerat nisi. 
                Aliquam ut mollis ante. Donec arcu ipsum, ultricies id sapien nec, ultricies auctor tortor. 
                Aliquam felis nunc, suscipit feugiat turpis id, mattis consequat metus. 
                Curabitur sollicitudin vulputate lorem eget rhoncus. 
                Integer vel sodales orci. Nulla facilisi. Ut ligula velit, posuere eget justo vitae, feugiat viverra nisl. 
                Aliquam facilisis aliquam neque, sed cursus nisi. Pellentesque sed ex consectetur, consectetur nulla a, elementum lacus. 
                Donec ex velit, fermentum in sem lobortis, consectetur tristique tortor. 
                In erat velit, consectetur in molestie vel, scelerisque eget lacus.  </div>}
            
        </div>
    </Html>
}