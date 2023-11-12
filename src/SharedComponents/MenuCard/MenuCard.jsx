import PropTypes from 'prop-types';

const MenuCard = ({item}) => {
   // console.log(item)
   const {name, image, price, recipe} = item;
   return (
      <div className='flex space-x-4'>
         <img style={{borderRadius: '0 200px 200px 200px'}} className='w-[100px]'
          src={image} alt="" />
         <div>
            <h2 className="uppercase">{name} ---------------</h2>
            <p>{recipe}</p>
         </div>
         <h2 className='text-yellow-500'>${price}</h2>
      </div>
   );
};
MenuCard.propTypes ={
   item: PropTypes.element.node
}
export default MenuCard;