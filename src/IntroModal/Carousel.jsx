import {Swiper, SwiperSlide} from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';

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
                            <div className='zoom-icon'>
                                <svg width={'50px'} className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4M5 8h6m-3 3V5m7 3A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                </svg>
                                <p className='secondary-text'>Zoom</p>
                            </div>
                            <div className='pan-icon'>
                            <svg
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                width="50px"
                            >
                                <path d="M12 2.5L8 7h8l-4-4.5M7 8l-4.5 4L7 16V8m10 0v8l4.5-4L17 8m-5 2a2 2 0 00-2 2 2 2 0 002 2 2 2 0 002-2 2 2 0 00-2-2m-4 7l4 4.5 4-4.5H8z" />
                            </svg>
                                <p className='secondary-text'>Pan</p>
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