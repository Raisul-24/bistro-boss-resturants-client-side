import SingleItem from "../SingleItem/SingleItem";
import PropTypes from 'prop-types';


const OrderTab = ({items}) => {
   return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
         {
            items.map(item => <SingleItem key={item._id} item={item}></SingleItem>)
         }
      </div>
   );
};

OrderTab.propTypes ={
   items: PropTypes.element.any
}
export default OrderTab;