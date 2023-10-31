import React, { useState } from 'react';
import useCamera from '../../stores/useCamera';
import './AxiomViewButton.css';
import { FloatButton, Button } from 'antd';
import useTag from '../../stores/useTag';


export default function AxiomViewButton() {
  const setZoom = useCamera((state) => state.setZoom);
  const unselectAll = useTag((state) => state.unselectAll)
  

  // Define local state to toggle between walking and plane emojis
  const [isWalking, setIsWalking] = useState(true);

  const handleClick = () => {
    
    setZoom("Map");
    unselectAll()
    setIsWalking(!isWalking);
  };
  

  return (
    <div className="axiom-container">
      <Button type='primary' icon={"🗺️"} onClick={handleClick}>Return to Map</Button>
    </div>
  );
}