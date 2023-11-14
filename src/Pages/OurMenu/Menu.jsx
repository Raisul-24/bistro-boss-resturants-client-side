import { Helmet } from "react-helmet";
import Banner from "./Banner/Banner";
import SectionCover from "../../SharedComponents/SectionCover/SectionCover";
import desserts from "../../../src/assets/menu/dessert-bg.jpeg"
import pizza from "../../../src/assets/menu/pizza-bg.jpg"
import salads from "../../../src/assets/menu/salad-bg.jpg"
import soup from "../../../src/assets/menu/soup-bg.jpg"
import useMenu from "../../hooks/UseMenu";
import MenuTabCategory from "./MenuCategory/MenuTabCategory";

const Menu = () => {
   const [menu] = useMenu();
   // console.log(menu.length)
   const offer = menu.filter(item => item.category === "offered");
   const dessert = menu.filter(item => item.category === "dessert");
   const soups = menu.filter(item => item.category === "soup");
   const pizzas = menu.filter(item => item.category === "pizza");
   const salad = menu.filter(item => item.category === "salad");
   // console.log(offer)
   return (
      <div>
         <Helmet>
            <title>Bistro Boss | Menu</title>
         </Helmet>
         <Banner></Banner>
         <MenuTabCategory items={offer}></MenuTabCategory>

         <SectionCover img={desserts} title="desserts"
            description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.">
         </SectionCover>

         <MenuTabCategory items={dessert}></MenuTabCategory>
         <SectionCover img={pizza} title="pizza"
            description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.">
         </SectionCover>
         <MenuTabCategory items={pizzas}></MenuTabCategory>
         <SectionCover img={salads} title="salads"
            description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.">
         </SectionCover>
         <MenuTabCategory items={salad}></MenuTabCategory>

         <SectionCover img={soup} title="soups"
            description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.">
         </SectionCover>
         <MenuTabCategory items={soups}></MenuTabCategory>
      </div>
   );
};

export default Menu;