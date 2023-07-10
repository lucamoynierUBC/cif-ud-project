import { useState } from "react";
import { Html } from "@react-three/drei";
import useApp from "./stores/useApp";
import useInterface from "./stores/useInterface";

export default function HousingInterface() {
    const [selectedBlock, setSelectedBlock] = useState(null)
    const showAdu = useApp((state) => state.showAdu)
    const showAduID = useApp((state) => state.displayNumber)
    const selectOne = useInterface((state) => state.selectOne)
    const selectTwo = useInterface((state) => state.selectTwo)
    const selectThree = useInterface((state) => state.selectThree)
    const selectFour = useInterface((state) => state.selectFour)
    const removeSelection = useInterface((state) => state.resetSelection)
    
    // can refactor according the tutorial ~3:31 mark, do not need additional constants below,
    // very redundant 
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
                <button onClick={() => handleClick(4)} onMouseEnter={() => selectOne()} onMouseOut={() => removeSelection()}>1</button>
                <button onMouseEnter={() => selectTwo()} onMouseOut={() => removeSelection()}>2</button>
                <button onMouseEnter={() => selectThree()} onMouseOut={() => removeSelection()}>3</button>
                <button onMouseEnter={() => selectFour()} onMouseOut={() => removeSelection()}>4</button>
            </div>
            )}
            {selectedBlock === 4 && (<div>
                <h1>Attic ADU</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Metus aliquam eleifend mi in nulla posuere.</p>
                <button onClick={() => {handleClick(3)}}>OK</button>
            </div>)}
      </div>

    </Html>


}