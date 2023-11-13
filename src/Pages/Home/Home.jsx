import { Helmet } from "react-helmet";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Menu from "./Menu/Menu";
import PopularMenu from "./PopularMenu/PopularMenu";
import Testimonial from "./Testimonial/Testimonial";


const Home = () => {
   return (
      <div>
         <Helmet>
            <title>Bistro Boss | Home</title>
         </Helmet>
         <Banner></Banner>
         <div className="container mx-auto">
         <Category></Category>
         <PopularMenu></PopularMenu>
         <Menu></Menu>
         <Testimonial></Testimonial>
         </div>
      </div>
   );
};

export default Home;