import SectionTitle from "../../../SharedComponents/SectionTitle/SectionTitle";
import "./Menu.css";

const Menu = () => {
   return (
      <div className="featured-items bg-fixed pt-8 my-20">
         <SectionTitle heading="From our menu" subHeading="Check It Out"></SectionTitle>
         <div className="flex justify-center items-center space-x-10 pb-20 pt-12 px-36">
            <img src="/src/assets/home/featured.jpg" className="w-[500px] h-96" alt="" />
            <div className="text-white">
            <p>March 20, 2023 <br />
               WHERE CAN I GET SOME? <br />
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
               <button className=" border-b-2 mt-3">Read More</button>
            </div>
          </div>

      </div>
   );
};

export default Menu;