import { Link } from "react-router-dom";
import MenuCard from "../../../SharedComponents/MenuCard/MenuCard";
import SectionTitle from "../../../SharedComponents/SectionTitle/SectionTitle";
import PropTypes from 'prop-types';

const MenuTabCategory = ({items}) => {
   // console.log(items)
   return (
      <div className="container mx-auto mb-20">
            <SectionTitle heading="today's offer" subHeading="Don't miss"></SectionTitle>
            <div className="grid md:grid-cols-2 gap-10">
               {
                  items.map(item => <MenuCard key={item._id} item={item}></MenuCard>)
               }
            </div>
            <div className="flex justify-center">
               <Link to='/shop'>
               <button className="mx-auto btn btn-outline border-0 border-b-4 text-center mt-10">order your favourite FOOD</button>
               </Link>
            </div>
         </div>
   );
};
MenuTabCategory.propTypes ={
   items: PropTypes.element.any
}
export default MenuTabCategory;