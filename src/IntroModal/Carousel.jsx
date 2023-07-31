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
                spaceBetween={150}
                slidesPerView={3}
                navigation
                pagination={{ clickable: false,  dynamicBullets: true}}
                style={{
                "--swiper-pagination-bottom": "8px", 
                "paddingBottom": "35px",
                "--swiper-navigation-top-offset": "40%",
                "--swiper-navigation-color": "#d96b27",
                "--swiper-pagination-color": "#d96b27"
             }}
        
            >
                <SwiperSlide>
                    <div className='card'></div>
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