import { useState } from "react";
import { Html } from "@react-three/drei";
import useApp from "./stores/useApp";
import useInterface from "./stores/useInterface";
import { useFrame } from "@react-three/fiber";
import { Vector3 } from "three";
import useCamera from "./stores/useCamera";
import useFlow from "./stores/useFlow";


export default function HousingInterface() {
    const [selectedBlock, setSelectedBlock] = useState(null)
    // const [zoom, setZoom] = useState(false)
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
    //camera state changes
    const startZoom = useCamera((state) => state.zoomClose)
    const rotateToAdu = useCamera((state) => state.rotateToAdu)
    const rotateBirdsEye = useCamera((state) => state.rotateBirdsEye)

    //Flow states eventuall going to override the above ^
    const setPhaseFour = useFlow((state) => state.setPhaseFour)
    const setPhaseTen = useFlow((state) => state.setPhaseTen)
    const setPhaseElleven = useFlow((state) => state.setPhaseElleven)

    //Change the state for the new static Interface
    const toggleInterface = useInterface((state) => state.toggleVisible)

    
    
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

    
    return <Html
        position={[0, 15, -15]}
        center
        wrapperClass='housingInterface'>
        <div>
            {selectedBlock === null ? (<div className="houseIcon">
                <button className="houseButton" onClick={() => {startZoom(),  toggleInterface()}}>
                    <span className="icon"> 
                        <ion-icon name="home-outline"></ion-icon>
                    </span>
                </button>
            </div>
            ) : null } 
            {selectedBlock === 1 && (<div>
                <h1 className="housingInterfaceHeader">Single Family Home</h1>
                <p>Legally, [Character A]’s home is defined as a one “family” residence. 
                    Only certain changes are possible due to  its shape and structure. </p>
                <button className="smallHousingInterfaceButton" onClick={() => {handleClick(2), setPhaseFour(), rotateToAdu()}}>OK</button>
            </div>
            )}
            {selectedBlock === 2 && (<div>
                <h1 className="housingInterfaceHeader">Overall Benefits</h1>
                <p>[Character A] also happens to have a shed in their lot attached to the house. 
                    With reliable access to transit, they do not have a car and the space is currently sitting empty.</p>
                {/* <button className="smallHousingInterfaceButton">MORE DATA</button> */}
                <button className="smallHousingInterfaceButton"onClick={() => {handleClick(3)}}>OK</button>
            </div>
            )}
            {selectedBlock === 3 && (<div>
                {/* <h1 className="housingInterfaceHeader"> Select an Area</h1> */}
                {/* call hideAdu() any time a button is clicked & hideAduID */}
                {/* <button
                className="housingInterfaceButton" 
                onClick={() => {handleClick(4), clickOne(), hideAduID(), removeSelection(), resetClick()}} 
                onMouseEnter={() => selectOne()} 
                onMouseOut={() => removeSelection()}
                >1</button> */}
                
                {/* <button 
                className="housingInterfaceButton" 
                onClick={() => {handleClick(5), clickTwo(), hideAduID(), removeSelection(), resetClick()}} 
                onMouseEnter={() => selectTwo()} 
                onMouseOut={() => removeSelection()}
                >2</button> */}
                
                {/* <button 
                className="housingInterfaceButton" 
                onClick={() => {handleClick(6), clickThree(), hideAduID(), removeSelection(), resetClick()}} 
                onMouseEnter={() => selectThree()} 
                onMouseOut={() => removeSelection()}
                >3</button> */}

                {/* <button 
                className="housingInterfaceButton" 
                onClick={() => {handleClick(7), clickFour(), hideAduID(), removeSelection(), resetClick()}} 
                onMouseEnter={() => selectFour()} 
                onMouseOut={() => removeSelection()}
                >4</button> */}
                <p>[Character A] could use extra cash to help pay rent, too! 
                    Their shed becomes an opportunity here, if they convert it to an ADU.</p>
                <button className="housingInterfaceButton" onClick={() =>{handleClick(4)}}>WHATS AN ADU?</button>
                    

            </div>
            )}
            {selectedBlock === 4 && (<div>
                {/* <h1>Attic ADU</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Metus aliquam eleifend mi in nulla posuere.</p> */}
                    {/* first call hideAdu(), then showAdu() to reset state, potential source of bugs in the future
                    refactor in the furture */}
                {/* <button onClick={() => {handleClick(3), hideAdu(), showAdu(), displayAduID()}}>OK</button> */}
        
                <h1>The 4 Types</h1>
                <p>We already looked at the shed, which is an attached type. 
                    Let’s look at this and the other 3 in context.</p>
                <button className="housingInterfaceButton" onClick={() =>{handleClick(5), setPhaseTen(), rotateBirdsEye()}}>OK</button>
            </div>)}
            {selectedBlock === 5 && (<div>
                {/* <h1>Side Adu</h1> */}
                {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Metus aliquam eleifend mi in nulla posuere.</p> */}
                {/* <button onClick={() => {handleClick(3), hideAdu(), showAdu(), displayAduID()}}>OK</button> */}
                <h1>Lot Size</h1>
                <p>Average lot size in NYC for this density is 25 ft or even less. 
                    [Character’s] lot is about this width.</p>
                <button className="housingInterfaceButton" onClick={() => {handleClick(6), setPhaseElleven()}}>OK</button>
            </div>)}
            {selectedBlock === 6 && (<div>
                {/* <h1>Basement Adu</h1> */}
                {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Metus aliquam eleifend mi in nulla posuere.</p> */}
                {/* <button onClick={() => {handleClick(3), hideAdu(), showAdu(), displayAduID()}}>OK</button> */}
                <h1>Attatched ADU</h1>
                <p>Since [Character]'s lot has an existing walkway, this type works well
                    because attatched ADUs on lots under 30 ft wide call for adequete walkway spaces
                </p>
            </div>)}
            {selectedBlock === 7 && (<div>
                <h1>Side Adu</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Metus aliquam eleifend mi in nulla posuere.</p>
                <button onClick={() => {handleClick(3), hideAdu(), showAdu(), displayAduID()}}>OK</button>
            </div>)}
            
      </div>

    </Html>


}