import {Swiper, SwiperSlide} from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import { FiMove } from "react-icons/fi";
import { AiOutlineZoomIn } from "react-icons/ai";
import { PiMouseDuotone } from "react-icons/pi";
import { PiMouseSimple } from "react-icons/pi";

import './Carousel.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Carousel() {
    return (
        <div className='carousel'>
            <Swiper
                modules={[Navigation, Pagination, A11y]}
                spaceBetween={100}
                slidesPerView={1}
                navigation
                pagination={{ clickable: false,  dynamicBullets: true}}
                style={{
                "--swiper-pagination-bottom": "8px", 
                "paddingBottom": "35px",
                "--swiper-navigation-size": "20px",
                "--swiper-navigation-top-offset": "95%",
                "--swiper-navigation-color": "#d96b27",
                "--swiper-pagination-color": "#d96b27"
             }}
        
            >
                <SwiperSlide>
                    <div className='card'>
                        <h4>Welcome to the Tool!</h4>
                        <p>Navigate using the side interface and these interactions:</p>
                        <div className='icon-container'>
                            <div className='zoom-icon-container'>
                                <PiMouseSimple size={"60%"}/>
                                <p className='secondary-text'>Scroll to zoom in & out</p>
                            </div>
                            <div className='pan-icon-container'>
                                <PiMouseDuotone size={"60%"} />
                           
                                <p className='secondary-text'>Left click to pan & explore</p>
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