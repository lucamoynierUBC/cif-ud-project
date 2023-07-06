import { useState } from "react";
import { Html } from "@react-three/drei";

export default function HousingInterface() {
    const [selectedBlock, setSelectedBlock] = useState(null)
    const handleClick = (blockId) => {
        setSelectedBlock(blockId)
    }

    const handleProceed = () => {
        setSelectedBlock(null)
    }


    return <Html position={[10, 25, 0]}
        center
        distanceFactor={8}
        wrapperClass='housingInterface'>
        <div>
            {selectedBlock === null ? (<div>
                <button> Carbon Neutrality</button>
                <button> Economic Oppurtunity</button>
                <button onClick={() => handleClick(1)}> Housing Oppurtunity</button>
            </div>
            ) : null }
            {selectedBlock === 1 && (<div>
                <h1>Single Family Home</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Tortor aliquam nulla facilisi cras fermentum odio eu. 
                    Laoreet non curabitur gravida arcu ac tortor dignissim. 
                    Nec feugiat nisl pretium fusce. Sapien nec sagittis aliquam malesuada.</p>
                <button>Ok</button>



            </div>
            )}


            
        
      </div>

    </Html>


}