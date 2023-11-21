import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import banner1 from "/src/assets/home/01.jpg"
import banner2 from "/src/assets/home/02.jpg"
import banner3 from "/src/assets/home/03.png"
import banner4 from "/src/assets/home/04.jpg"
import banner5 from "/src/assets/home/05.png"
import banner6 from "/src/assets/home/06.png"


const Banner = () => {
   return (
      <div className="text-center">
          <Carousel autoPlay="boolean"  >
                <div>
                    <img src={banner1}/>
                </div>
                <div>
                    <img src={banner2} />                   
                </div>
                <div>
                    <img src={banner3} />                    
                </div>
                <div>
                    <img src={banner4} />                    
                </div>
                <div>
                    <img src={banner5} />                   
                </div>
                <div>
                    <img src={banner6} />                    
                </div>
            </Carousel>
      </div>
   );
};

export default Banner;