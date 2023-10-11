import React, { useState } from 'react';
import useCamera from '../../stores/useCamera';
import './AxiomViewButton.css';

export default function AxiomViewButton() {
  const changePerspective = useCamera((state) => state.changePerspective);

  // Define local state to toggle between walking and plane emojis
  const [isWalking, setIsWalking] = useState(true);

  const handleClick = () => {
    
    changePerspective();

    
    setIsWalking(!isWalking);
  };
  

  return (
    <div className="axiom-container">
      <button 
      className='axiom-button' 
      onClick={handleClick}
      >
        {isWalking ? '✈️' : '🚶'}
      </button>
    </div>
  );
}