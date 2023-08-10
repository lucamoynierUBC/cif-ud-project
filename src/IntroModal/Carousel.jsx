import {Swiper, SwiperSlide} from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import { PiMouse } from "react-icons/pi";
import { PiMouseSimple } from "react-icons/pi";
import { MdOutlinePinch } from "react-icons/md";
import { TbHandTwoFingers } from "react-icons/tb";


import './Carousel.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Carousel() {
    const isMobile = window.innerWidth <= 600
    console.log("isMobile:", isMobile);

    const swiperStyle = {
        "--swiper-pagination-bottom": "8px",
        "paddingBottom": "35px",
        "--swiper-navigation-size": "20px",
        "--swiper-navigation-color": "#d96b27",
        "--swiper-pagination-color": "#d96b27",
      };

      if (isMobile) {
        swiperStyle["--swiper-navigation-top-offset"] = "50%";
      } else {
        swiperStyle["--swiper-navigation-top-offset"] = "98%";
      }

    return (
        <div className='carousel'>
            <Swiper
                modules={[Navigation, Pagination, A11y]}
                spaceBetween={100}
                slidesPerView={1}
                navigation
                pagination={isMobile ? {"type": "progressbar"} : { clickable: false,  dynamicBullets: true}}
                style={swiperStyle}
        
            >   
                <SwiperSlide>
                    <div className='card'>
                        <h3>Welcome to the Tool!</h3>
                        <p className='text-body'>
                        The tool you are about to enter is a work-in-progress being developed to visually engage the broad public on complex planning initiatives. 
                        The tool is meant to explain policy change impacts on the environment while allowing for easy navigation in a neighborhood context. 
                        </p>
                        <img src='public/Slide1image.png' width={"100%"} />
    
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='card'>
                        <img src='public/Slide3image.png' width={"100%"}/>
                        <p className='text-body'>
                        <b>City of Yes Housing Opportunity</b> is part of an inclusive, citywide approach to expanding and diversifying the housing supply, in which every neighborhood does its part to help meet housing needs and provide equitable access to opportunity for New Yorkers. 
                        The proposal would help meet New Yorkers’ housing needs with small changes citywide – including the highest density areas as well as low density areas.
                        </p>
                        <p className='text-body'> 
                        New York City has a diverse typology of housing; from low-rise, to mid-rise, to high-rise. Low-rise is more prominent in the outer boroughs, where high-rise is more prominent in denser, 
                        more business and office-oriented cores of the city which is well served by public transportation. 
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='card'>
                        
                        <p className='text-body' >Composed of mostly one, two-family homes and some multifamily buildings, low-density housing makes up of <b>35%</b> of total NYC’s housing units. Despite being a large part of the city’s housing stock, these areas have not been contributing as much in added units since 2010. 
                            This presents an opportunity for both the city and homeowners: the city can expand its housing units and homeowners can add a secondary unit to make the best of their investment. 
                            <br></br><br></br> The map to the right further shows the sub-categories of low-density housing.
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='card'>
                        <h4>Welcome to the Tool!</h4>
                        <p>Navigate using the side interface and these interactions:</p>
                        <div className='icon-container'>
                            <div className='zoom-icon-container'>
                                {isMobile ? <MdOutlinePinch size={"60%"}/>: <PiMouseSimple size={"60%"}/>}
                                {isMobile ?  <p className='secondary-text'>Pinch to zoom in & out</p>: <p className='secondary-text'>Scroll to zoom in & out</p>}
                            </div>
                            <div className='pan-icon-container'>
                                {isMobile ? <TbHandTwoFingers size={"60%"}/>: <PiMouse size={"60%"}/>}
                                {isMobile ? <p className='secondary-text'>Use two fingers to pan & explore</p> :  <p className='secondary-text'>Right click to pan & explore</p>}
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='card'>
                        <p>Housing densities look different across the city. 
                            The cities' goal is to understand the varied characteristics of homes across NYC and how residents live. 
                            In doing so, and aligning with the cities goals to increase access to housing, 
                            we can see where opportunities for safe and vibrant homes can exist in the city's future.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='card'>
                        <p>
                        Low density is one kind of housing type, typically seen in a more suburban context and throughout neighborhood in the city.
                        Composed of mostly one- and two-family homes, low density housing neighborhoods areis most common in the city’s outer boroughs. 
                        See map below where some sub-categories highlight the primary occurrence of these housing typologies.
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='card'></div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='card'></div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='card'></div>
                </SwiperSlide>
            </Swiper>


        </div>
    )
}