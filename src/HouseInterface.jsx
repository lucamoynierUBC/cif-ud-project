import { useState } from "react";
import { Html } from "@react-three/drei";
import useApp from "./stores/useApp";
import useInterface from "./stores/useInterface";

export default function HousingInterface() {
    const [selectedBlock, setSelectedBlock] = useState(null)
    // change state
    const showAdu = useApp((state) => state.showAdu)
    const hideAdu = useApp((state) => state.hideAdu)
    const showAduID = useApp((state) => state.displayNumber)
    const hideAduID = useApp((state) => state.hideNumber)
    const selectOne = useInterface((state) => state.selectOne)
    const selectTwo = useInterface((state) => state.selectTwo)
    const selectThree = useInterface((state) => state.selectThree)
    const selectFour = useInterface((state) => state.selectFour)
    const removeSelection = useInterface((state) => state.resetSelection)
    const clickOne = useInterface((state) => state.clickOne)
    const clickTwo = useInterface((state) => state.clickTwo)
    const clickThree = useInterface((state) => state.clickThree)
    const clickFour = useInterface((state) => state.clickFour)
    const resetClick = useInterface((state) => state.resetClick)
    
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


    return <Html position={[15, 20, 0]}
        center
        distanceFactor={8}
        wrapperClass='housingInterface'>
        <div>
            {selectedBlock === null ? (<div>
                <button className="housingInterfaceButton"> Carbon Neutrality</button>
                <button className="housingInterfaceButton"> Economic Oppurtunity</button>
                <button className="housingInterfaceButton"onClick={() => handleClick(1)}> Housing Oppurtunity</button>
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
                {/* call hideAdu() any time a button is clicked & hideAduID */}
                <button 
                onClick={() => {handleClick(4), clickOne(), hideAdu(), hideAduID()}} 
                onMouseEnter={() => selectOne()} 
                onMouseOut={() => removeSelection()}
                >1</button>
                
                <button 
                onClick={() => {clickTwo(), hideAdu(), hideAduID()}} 
                onMouseEnter={() => selectTwo()} 
                onMouseOut={() => removeSelection()}
                >2</button>
                
                <button 
                onClick={() => {clickThree(), hideAdu(), hideAduID()}} 
                onMouseEnter={() => selectThree()} 
                onMouseOut={() => removeSelection()}
                >3</button>

                <button 
                onClick={() => {clickFour(), hideAdu(), hideAduID()}} 
                onMouseEnter={() => selectFour()} 
                onMouseOut={() => removeSelection()}
                >4</button>
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