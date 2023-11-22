import { Helmet } from "react-helmet";
import SectionTitle from "../../../SharedComponents/SectionTitle/SectionTitle";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import useMenu from "../../../hooks/UseMenu";
import Swal from "sweetalert2";
import UseAxiosSecure from "../../../hooks/UseAxiosSecure";
import { Link } from "react-router-dom";


const ManageItems = () => {
   const [menu, loading, refetch ] = useMenu();
   const axiosSecure = UseAxiosSecure();
   // console.log(menu)
   if (loading) {
      return <div className="flex justify-center">
         <span className="loading loading-bars loading-xs"></span>
         <span className="loading loading-bars loading-sm"></span>
         <span className="loading loading-bars loading-md"></span>
         <span className="loading loading-bars loading-lg"></span>
      </div>
   }
   const handleDelete = (data) =>{
      // console.log(data)
      Swal.fire({
         title: "Are you sure?",
         text: "You won't be able to revert this!",
         icon: "warning",
         showCancelButton: true,
         confirmButtonColor: "#3085d6",
         cancelButtonColor: "#d33",
         confirmButtonText: "Yes, delete it!"
       }).then(async (result) => {
         if (result.isConfirmed) {
            const res = await axiosSecure.delete(`/menu/${data._id}`);
            if(res.data.deletedCount > 0){
               refetch();
               Swal.fire({
                  title: "Deleted!",
                  text: `${data.name} has been deleted.`,
                  icon: "success"
                });
            }
           
         }
       });
   }
   return (
      <div>
         <Helmet>Dashboard | Admin | ManageItems </Helmet>
         <SectionTitle heading='MANAGE ALL ITEMS' subHeading='Hurry Up!'></SectionTitle>
         <div className="bg-white py-4 rounded-xl text-black font-bold">
            <div className="overflow-x-auto rounded-t-xl mx-16">
               <table className="table">
                  {/* head */}
                  <thead className="bg-[#D1A054] rounded-t-xl text-base text-white font-semibold">
                     <tr>
                        <th>
                        </th>
                        <th>Item Image</th>
                        <th>Item Name</th>
                        <th> Price</th>
                        <th>Action</th>
                        <th>Action</th>
                     </tr>
                  </thead>
                  <tbody className="text-base font-normal">
                     {
                        menu.map((item, index) => <tr key={item._id}>
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
                           <td>{item.price}</td>
                           <td>
                              <Link to={`/dashboard/updateItem/${item._id}`}>
                              <div className="bg-[#D1A054] w-12 h-12 text-white text-3xl rounded-xl flex justify-center items-center">
                                 <button>
                                    <FaEdit />
                                 </button>
                              </div>
                              </Link>
                           </td>
                           <th>
                              <div className="bg-[#B91C1C] w-12 h-12 text-white text-3xl rounded-xl flex justify-center items-center">
                                 <button onClick={() => handleDelete(item)}
                                 >
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
   );
};

export default ManageItems;