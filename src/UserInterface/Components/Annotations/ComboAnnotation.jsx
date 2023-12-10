import { Button, Flex, Popover, Tour } from "antd";
import { useContext, useRef, useState, useEffect} from "react";
import useRefStore from "../../../stores/useRefStore";
import useCamera from "../../../stores/useCamera";

export default function ComboAnnotation() {
    const [open, setOpen] = useState(false);
    const { ref } = useRefStore();
    const setZoom = useCamera((state) => state.setZoom)
    const [content, setContent] = useState('');

    
    
    const steps = [
        
        {
          title: 'Qualifying Site',
          description: 'Lot size: min 5,000 sqft, located within the Greater Transit-Oriented Development Area ',
          placement: 'left',
          mask: false,
          target: () => ref.current,
          
          
        },
        
      ];

      useEffect(() => {
        const unsubscibeZoom = useCamera.subscribe(
            (state) => state.zoom,
            (zoom) => {
                if (zoom === 'Combo'){
                    setTimeout(() => setOpen(true), 2000)
                } else {
                    setOpen(false)
                }
            }   
        )
        return () => {
            unsubscibeZoom()
        }
    }, []);

    return (
            <Tour className="custom-tour" open={open} onClose={() => setOpen(false)} steps={steps}></Tour>
    )
}