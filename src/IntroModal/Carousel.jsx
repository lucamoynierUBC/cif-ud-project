import {Swiper, SwiperSlide} from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import { PiMouse } from "react-icons/pi";
import { PiMouseSimple } from "react-icons/pi";
import { MdOutlinePinch } from "react-icons/md";
import { TbHandTwoFingers } from "react-icons/tb";

// css imports
import "./Carousel.css"
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// component for the carousel "cards"
export default function Carousel() {
    const isMobile = window.innerWidth <= 600
    const swiperStyle = {
        "--swiper-pagination-bottom": "8px",
        "--swiper-navigation-size": "20px",
        "--swiper-navigation-color": "#d96b27",
        "--swiper-pagination-color": "#d96b27",
      };
      
      if (isMobile) {
        swiperStyle["--swiper-navigation-top-offset"] = "50%";
      } else {
        swiperStyle["--swiper-navigation-top-offset"] = "97%";
      }

    return (
        <div className="carousel">
            <Swiper
                modules={[Navigation, Pagination, A11y]}
                spaceBetween={100}
                slidesPerView={1}
                navigation
                pagination={isMobile ? {"type": "progressbar"} : { clickable: false,  dynamicBullets: true}}
                style={swiperStyle}
            >   
                <SwiperSlide>
                    <div className="card">
                        <h3>Welcome to the Tool!</h3>
                        <img className="img" src="https://i.imgur.com/tIwamTj.jpg" alt="Slide Image" width={isMobile ?"90%": "70%"} />
                        <p className="text-body">
                            The tool you are about to enter is a work-in-progress being developed to visually engage the broad public on complex planning initiatives. 
                            The tool is meant to explain policy change impacts on the environment while allowing for easy navigation in a neighborhood context. 
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card">
                        <img className="img" src="https://imgur.com/oJBCIDh.png" width={"90%"}/>
                        <p className="text-body">
                            <b>City of Yes Housing Opportunity</b> is part of an inclusive, citywide approach to expanding and diversifying the housing supply, in which every neighborhood does its part to help meet housing needs and provide equitable access to opportunity for New Yorkers. 
                            The proposal would help meet New Yorkers’ housing needs with small changes citywide – including the highest density areas as well as low density areas.
                        </p>
                        <p className="text-body"> 
                            New York City has a diverse typology of housing; from low-rise, to mid-rise, to high-rise. Low-rise is more prominent in the outer boroughs, where high-rise is more prominent in denser, 
                            more business and office-oriented cores of the city which is well served by public transportation. 
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card">
                        <img className="img" src="https://i.imgur.com/hsFUUei.png" width={isMobile ?"90%": "60%"}/>
                        <p className="text-body" >Composed of mostly one, two-family homes and some multifamily buildings, low-density housing makes up of <b>35%</b> of total NYC’s housing units. Despite being a large part of the city’s housing stock, these areas have not been contributing as much in added units since 2010. 
                            This presents an opportunity for both the city and homeowners: the city can expand its housing units and homeowners can add a secondary unit to make the best of their investment. 
                            <br></br><br></br> The map below further shows the sub-categories of low-density housing.
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card">
                        <p className="text-body">
                            Even within the one and two family housing zones, different neighborhoods can look dramatically different from one another.
                        </p>
                        <img className="img" src="https://i.imgur.com/6eeXSrx.jpg" width={isMobile ? "90%" : "60%"} ></img>
                        <img className="img" src="https://i.imgur.com/scFOXO8.jpg" width={isMobile ? "90%" : "60%"} ></img>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card">
                        <p> The tool will show you how potential new homes can be created in these areas of the city.</p>
                        <p> Learn more using the side interface and these interactions:</p>
                        <div className="icon-container">
                            <div className="zoom-icon-container">
                                {isMobile ? <MdOutlinePinch size={"60%"}/>: <PiMouseSimple size={"60%"}/>}
                                {isMobile ?  <p className="secondary-text">Pinch to zoom in & out</p>: <p className="secondary-text">Scroll to zoom in & out</p>}
                            </div>
                            <div className="pan-icon-container">
                                {isMobile ? <TbHandTwoFingers size={"60%"}/>: <PiMouse size={"60%"}/>}
                                {isMobile ? <p className="secondary-text">Use two fingers to pan & explore</p> :  <p className="secondary-text">Right click to pan & explore</p>}
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}