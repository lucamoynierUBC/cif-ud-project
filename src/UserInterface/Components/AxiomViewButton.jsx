import React, { useState } from 'react';
import useCamera from '../../stores/useCamera';
import './AxiomViewButton.css';

export default function AxiomViewButton() {
  const setZoom = useCamera((state) => state.setZoom);
  

  // Define local state to toggle between walking and plane emojis
  const [isWalking, setIsWalking] = useState(true);

  const handleClick = () => {
    
    setZoom("Map");

    
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