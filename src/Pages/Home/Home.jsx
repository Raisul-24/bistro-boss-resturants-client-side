import { Helmet } from "react-helmet";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Menu from "./Menu/Menu";
import PopularMenu from "./PopularMenu/PopularMenu";
import Testimonial from "./Testimonial/Testimonial";
import bistroBossImg from "/src/assets/home/chef-service.jpg"
import { Parallax } from "react-parallax";



const Home = () => {
   return (
      <div>
         <Helmet>
            <title>Bistro Boss | Home</title>
         </Helmet>
         <Banner></Banner>
         <div className="container mx-auto">
            <Category></Category>
            <div className="my-20 rounded-xl">
               <Parallax
                  blur={{ min: -15, max: 15 }}
                  bgImage={bistroBossImg}
                  bgImageAlt="the menu"
                  strength={-200}
               >
                  <div className="hero h-[500px] rounded-xl">
                     <div className="hero-content text-center text-neutral-content w-9/12 h-3/5">
                        <div className="bg-white text-black p-10 rounded-xl ">
                           <h1 className="mb-5 text-7xl font-bold uppercase">Bistro Boss</h1>
                           <p className="mb-5 mx-2 md:mx-28">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                              Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
                        </div>
                     </div>
                  </div>
               </Parallax>

            </div>
            <PopularMenu></PopularMenu>
            <div className="container mx-auto bg-[#151515]">
               <h2 className="text-5xl text-center text-white py-14 font-bold">Call Us: +88 0192345678910</h2>

            </div>
            <Menu></Menu>
            <Testimonial></Testimonial>
         </div>
      </div>
   );
};

export default Home;