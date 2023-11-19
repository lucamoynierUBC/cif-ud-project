import { Button, Flex, Tour } from "antd";
import { useContext, useRef, useState} from "react";
import './TourGuide.css';
import useRefStore from "../../stores/useRefStore";

export default function TourGuide() {
    const [open, setOpen] = useState(true);
    const { ref } = useRefStore();
    
    
    const steps = [
        {
          title: 'City of Yes for Housing Opportunity',
          description: 'Every day, New Yorkers struggle with our housing shortage. High housing costs, long commutes, cramped apartments, and instability are all the result of a lack of options.',
          cover: (
            <img src="https://i.imgur.com/mtvZTyP.png"/>
          ),
          target: null
        },
        {
            title: 'More Housing Choices',
            description: 'The City of Yes initiative would unlock housing growth in every neighborhood. Each aspect of the proposal—from helping offices convert to residential, to giving homeowners the option to add small rental units, to adding more affordable housing in high-demand neighborhoods—is a proven strategy to help lower housing costs and help neighborhoods thrive. ',
            
          },
        {
          title: 'Explore proposals',
          description: 'Click on higlighted buildings to explore how they will be affected by City of Yes Housing Oppurtunity.',
          placement: 'left',
          target: () => ref.current,
          
          
        },
        
      ];

    return (
        <>
            <Tour  open={open} onClose={() => setOpen(false)} steps={steps}></Tour>
        </>
    )
}