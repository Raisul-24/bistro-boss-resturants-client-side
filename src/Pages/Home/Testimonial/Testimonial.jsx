import SectionTitle from "../../../SharedComponents/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

const Testimonial = () => {
   const [reviews, setReviews] = useState([])
   useEffect(() => {
      fetch('reviews.json')
         .then(res => res.json())
         .then(data => {
            setReviews(data)
         })
   }, [])
   return (
      <div className="my-20">
         <SectionTitle heading="testimonials" subHeading='What Our Client Say'></SectionTitle>
         <div className="my-7">
         <Swiper
            pagination={{
               type: 'progressbar',
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
         >

            {
               reviews.map(review => <SwiperSlide key={review._id}>
                  <div className="text-center mx-auto md:mx-24 mt-16 flex flex-col justify-center items-center">
                     <Rating
                        style={{ maxWidth: 180 }}
                        value={review.rating}
                        readOnly
                     />
                     <h2 className="text-6xl">,,</h2>
                     <p className="my-5">{review.details}</p>
                     <h2 className="text-2xl text-orange-400">{review.name}</h2>
                  </div>
               </SwiperSlide>)
            }
         </Swiper>
         </div>
      </div>
   );
};

export default Testimonial;