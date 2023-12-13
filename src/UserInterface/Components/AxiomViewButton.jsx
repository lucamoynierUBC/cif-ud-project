import React, { useEffect, useState } from 'react';
import useCamera from '../../stores/useCamera';
import './AxiomViewButton.css';
import { FloatButton, Button } from 'antd';
import useTag from '../../stores/useTag';
import { Link } from "wouter"


export default function AxiomViewButton() {
  const setZoom = useCamera((state) => state.setZoom);
  const unselectAll = useTag((state) => state.unselectAll)
  // const [disabled, setDisabled] = useState(true);
  const [load, setLoad] = useState(false)



  // Define local state to toggle between walking and plane emojis
  const [isWalking, setIsWalking] = useState(true);

  const handleClick = () => {
    
    setZoom("Map");
    unselectAll()
    setIsWalking(!isWalking);
  };

  useEffect(() => {
    const unsubscribeZoom = useCamera.subscribe(
      (state) => state.zoom,
      (zoom) => {
        console.log("State of camera ", zoom)
        if (zoom == "Map"){
          setTimeout(() => setLoad(false), 2000)
          setLoad(true)
         
          

        } else {
          // setTimeout(() => setDisabled(false), 2000)
          setLoad(true)
          setTimeout(() => setLoad(false), 2000)
        }
      }
    )
    return () => {
      unsubscribeZoom()
    }
  }, [])

  return (
    <div className="axiom-container">
      <Button disabled={false} loading={load} type='primary' icon={"🗺️"} onClick={handleClick}>
        {<Link href='/'>Return to Map </Link>}
      </Button>
    </div>
  );
}