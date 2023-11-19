import PropTypes from 'prop-types';
import UseAuth from '../../../hooks/UseAuth';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import UseAxiosSecure from '../../../hooks/UseAxiosSecure';
import UseCart from '../../../hooks/UseCart';

const SingleItem = ({ item }) => {
   const { _id, name, image, recipe, price } = item;
   const { user } = UseAuth();
   // console.log(user)
   const navigate = useNavigate();
   const location = useLocation();
   const axiosSecure = UseAxiosSecure();
   const [, refetch] = UseCart();

   const handleAddToCart = () => {
      if (user && user.email) {
         //send cart item to the database
         const cartItem = {
            menuId: _id,
            email: user.email,
            name,
            image,
            price
         }
         axiosSecure.post('/carts', cartItem)
             .then(res => {
               //   console.log(res.data)
                 if (res.data.insertedId) {
                     Swal.fire({
                         position: "top-end",
                         icon: "success",
                         title: `${name} added to your cart`,
                         showConfirmButton: false,
                         timer: 1500
                     });
                     // refetch cart to update the cart items count
                     refetch();
                 }

             })
      }
      else {
         Swal.fire({
            title: "You are not Logged In",
            text: "Please login to add to the cart?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, login!"
         }).then((result) => {
            if (result.isConfirmed) {
               //   send the user to the login page
               navigate('/login', { state: { from: location } })
            }
         });
      }
   }
   return (
      <div>
         <div className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
            <div className="relative mx-4 mt-4 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
               <img
                  src={image}
               />
               <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
               <button
                  className="!absolute top-4 right-4 h-8 max-h-[32px] bg-black text-white px-3 rounded-xl"
               >
                  ${price}
               </button>
            </div>
            <div className="p-6">
               <div className="flex items-center justify-between mb-3">
                  <h5 className="block text-xl  font-medium leading-snug tracking-normal text-blue-gray-900">
                     {name}
                  </h5>
               </div>
               <p className="block font-light leading-relaxed text-gray-700 h-16">
                  {recipe}
               </p>
            </div>
            <div className="p-6 pt-3 flex justify-center">
               <button onClick={handleAddToCart}
                  className="block border-o border-b-2 select-none rounded-lg border-[#BB8506] py-3.5 px-7 text-center text-black font-bold shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                  data-ripple-light="true"
               >
                  Add To Cart
               </button>
            </div>
         </div>
      </div>
   );
};
SingleItem.propTypes = {
   item: PropTypes.element.any
}
export default SingleItem;