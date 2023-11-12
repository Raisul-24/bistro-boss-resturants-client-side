import { useEffect, useState } from "react";
import SectionTitle from "../../SharedComponents/SectionTitle";
import MenuCard from "../../SharedComponents/MenuCard/MenuCard";


const PopularMenu = () => {
   const [menu,setMenu] = useState([])
   useEffect(()=>{
      fetch('menu.json')
      .then(res => res.json())
      .then(data =>{
         const popularItems = data.filter(item => item.category === 'popular')
         setMenu(popularItems)
      })
   } ,[])
   // console.log(menu)
   return (
      <section className="my-20">
         <SectionTitle heading="From Our menu" subHeading="Check It Out"></SectionTitle>
         <div className="grid md:grid-cols-2 gap-10">
            {
               menu.map(item =><MenuCard key={item._id} item={item}></MenuCard>)
            }
         </div>
      </section>
   );
};

export default PopularMenu;