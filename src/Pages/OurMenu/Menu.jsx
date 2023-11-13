import { Helmet } from "react-helmet";
import Banner from "./Banner/Banner";
import SectionCover from "../../SharedComponents/SectionCover/SectionCover";
import desserts from "../../../src/assets/menu/dessert-bg.jpeg"
import pizza from "../../../src/assets/menu/pizza-bg.jpg"
import salads from "../../../src/assets/menu/salad-bg.jpg"
import SectionTitle from "../../SharedComponents/SectionTitle";

const Menu = () => {
   return (
      <div>
         <Helmet>
            <title>Bistro Boss | Menu</title>
         </Helmet>
         <Banner></Banner>
         <div className="container mx-auto">
            <SectionTitle heading="today's offer" subHeading="Don't miss"></SectionTitle>
         </div>
         
         <SectionCover img={desserts} title="desserts" 
         description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.">
          </SectionCover>
         <SectionCover img={pizza} title="pizza" 
         description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.">
          </SectionCover>
         <SectionCover img={salads} title="salads" 
         description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.">
          </SectionCover>
      </div>
   );
};

export default Menu;