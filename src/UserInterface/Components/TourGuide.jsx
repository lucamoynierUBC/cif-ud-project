import { Button, Flex, Tour } from "antd";
import { useContext, useRef, useState} from "react";
import './TourGuide.css';
import useRefStore from "../../stores/useRefStore";
import useCamera from "../../stores/useCamera";

export default function TourGuide() {
    const [open, setOpen] = useState(true);
    const { ref } = useRefStore();
    const setZoom = useCamera((state) => state.setZoom)
    
    
    const steps = [
        {
          title: 'NYC Housing Condition',
          description: (
            <p style={{margin: 0}}>
              Every day, New Yorkers struggle with our housing shortage. High housing costs, long commutes, cramped apartments, and instability are all the result of a lack of options.
              <br/>
              <br/>
              A more affordable city is possible. If we create more housing in every neighborhood, we can ensure every New Yorker has the opportunity to stay and thrive in this city.
              
            </p>),
          cover: (
            <img style={{height:'auto', width: 350}} src="https://i.imgur.com/mtvZTyP.png"/>
          ),
          target: null,

        
          
        },
        {
            title: 'City of Yes for Housing Opportunity',
            description: 'The City of Yes initiative would unlock housing growth in every neighborhood. Each aspect of the proposal—from helping offices convert to residential, to giving homeowners the option to add small rental units, to adding more affordable housing in high-demand neighborhoods—is a proven strategy to help lower housing costs and help neighborhoods thrive. ',
            cover: (
              <img style={{height:'auto', width: '500px'}} src="https://i.imgur.com/i4BZki3.png"/>
            ),
            target: null
            
        },

        {
            title: 'City Densities',
            description: 'This cityscape offers varying levels of population and building density across the city, highlighting areas from the more open spaces to the busiest urban centers. ',
            target: null
            
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
            <Tour mask={true} open={open} onClose={() => [setOpen(false), setZoom('Map')]} steps={steps}></Tour>
        </>
    )
}