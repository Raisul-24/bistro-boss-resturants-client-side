import Swal from "sweetalert2";
import SectionTitle from "../../../SharedComponents/SectionTitle/SectionTitle";
import UseAxiosSecure from "../../../hooks/UseAxiosSecure";
import UseCart from "../../../hooks/UseCart";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Cart = () => {
   const [cart, refetch] = UseCart();
   // console.log(cart)
   const totalPrice = cart.reduce((total, item) => total + item.price, 0);
   const axiosSecure = UseAxiosSecure();

   const handleDelete = id => {
      // console.log(id)
      Swal.fire({
         title: "Are you sure?",
         text: "You won't be able to revert this!",
         icon: "warning",
         showCancelButton: true,
         confirmButtonColor: "#3085d6",
         cancelButtonColor: "#d33",
         confirmButtonText: "Yes, delete it!"
      }).then((result) => {
         if (result.isConfirmed) {
            axiosSecure.delete(`/carts/${id}`)
               .then(res => {
                  if (res.data.deletedCount > 0) {
                     refetch();
                     Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                     });
                  }
               })
         }
      });
   }
   return (
      <div >
         <Helmet>
            <title>Bistro Boss | Dashboard | Cart</title>
         </Helmet>
         <SectionTitle heading='WANNA ADD MORE?' subHeading='My Cart'></SectionTitle>
         <div className=" bg-white py-4 rounded-xl text-black">
            <div className="flex justify-evenly mb-8 items-center">
               <h2 className="text-4xl">Items: {cart.length}</h2>
               <h2 className="text-4xl">Total Price: ${totalPrice}</h2>
               {
                  cart.length ? 
                  <Link to='/dashboard/payment'><button className="btn btn-outline btn-sm py-2 bg-[#D1A054] border-0 text-white">Pay</button></Link>
                  :
                  <button disabled className="btn btn-outline btn-sm py-2 bg-[#D1A054] border-0 text-white">Pay</button>
               }
            </div>
            <div>
               <div className="overflow-x-auto rounded-t-xl mx-16">
                  <table className="table">
                     {/* head */}
                     <thead className="bg-[#D1A054] rounded-t-xl text-base text-white font-semibold">
                        <tr>
                           <th>
                           </th>
                           <th>Item Image</th>
                           <th>Item Name</th>
                           <th>Price</th>
                           <th>Action</th>
                        </tr>
                     </thead>
                     <tbody className="text-base font-normal">
                        {
                           cart.map((item, index) => <tr key={item._id}>
                              <th>
                                 {index + 1}
                              </th>
                              <td>
                                 <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                       <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                 </div>
                              </td>
                              <td>
                                 {item.name}
                              </td>
                              <td>${item.price}</td>
                              <th>
                                 <div className="bg-[#B91C1C] w-12 h-12 text-white text-3xl rounded-xl flex justify-center items-center">
                                    <button onClick={() => handleDelete(item._id)}>
                                       <RiDeleteBin5Fill />
                                    </button>
                                 </div>
                              </th>
                           </tr>)
                        }
                     </tbody>

                  </table>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Cart;