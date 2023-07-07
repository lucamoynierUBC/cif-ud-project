import { useState } from "react";
import { Html } from "@react-three/drei";
import useApp from "./stores/useApp";

export default function HousingInterface() {
    const [selectedBlock, setSelectedBlock] = useState(null)
    const showAdu = useApp((state) => state.showAdu)
    const showAduID = useApp((state) => state.displayNumber)
    

    const handleClick = (blockId) => {
        setSelectedBlock(blockId)
    }

    const handleProceed = () => {
        setSelectedBlock(null)
    }

    const spawnAdu = () => {
        showAdu()
    }

    const displayAduID = () => {
        showAduID()
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
                <button onClick={() => {handleClick(2), spawnAdu()}}>OK</button>
            </div>
            )}
            {selectedBlock === 2 && (<div>
                <h1>Overall Benefits</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Curabitur vitae nunc sed velit dignissim sodales ut eu sem.</p>
                <button>MORE DATA</button>
                <button onClick={() => {handleClick(3), displayAduID()}}>OK</button>
            </div>
            )}
            {selectedBlock === 3 && (<div>
                <h1> Select an Area</h1>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>4</button>
            </div>
            )}


            
        
      </div>

    </Html>


}