import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';

import slider1 from "/src/assets/home/slide1.jpg"
import slider2 from "/src/assets/home/slide2.jpg"
import slider3 from "/src/assets/home/slide3.jpg"
import slider4 from "/src/assets/home/slide4.jpg"
import slider5 from "/src/assets/home/slide5.jpg"
import SectionTitle from '../../SharedComponents/SectionTitle';
const Category = () => {
   return (
      <section>
         <SectionTitle subHeading="From 11:00am to 11:00pm" heading="Order Online" ></SectionTitle>
         <Swiper
        slidesPerView={4}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
            <SwiperSlide><img src={slider1} />
            <h2 className="text-center text-white uppercase -mt-16  text-2xl font-semibold">salads</h2>
            </SwiperSlide>
            <SwiperSlide><img src={slider2} />
            <h2 className="text-center text-white uppercase -mt-16  text-2xl font-semibold">pizzas</h2>
            </SwiperSlide>
            <SwiperSlide><img src={slider3} />
            <h2 className="text-center text-white uppercase -mt-16  text-2xl font-semibold">soups</h2>
            </SwiperSlide>
            <SwiperSlide><img src={slider4} />
            <h2 className="text-center text-white uppercase -mt-16  text-2xl font-semibold">deserts</h2>
            </SwiperSlide>
            <SwiperSlide><img src={slider5} />
            <h2 className="text-center text-white uppercase -mt-16  text-2xl font-semibold">salads</h2>
            </SwiperSlide>
         </Swiper>
      </section>
   );
};

export default Category;