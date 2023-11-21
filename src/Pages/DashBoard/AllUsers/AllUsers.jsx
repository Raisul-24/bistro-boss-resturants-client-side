import { Helmet } from "react-helmet";
import SectionTitle from "../../../SharedComponents/SectionTitle/SectionTitle";
import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../../hooks/UseAxiosSecure";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { FaUsers } from "react-icons/fa6";
import Swal from "sweetalert2";


const AllUsers = () => {
   const axiosSecure = UseAxiosSecure()
   const { data: user = [], refetch } = useQuery({
      queryKey: ['users'],
      queryFn: async () => {
         const res = await axiosSecure.get('/users');
         return res.data;
      }
   })
   // console.log(user)

   const handleMakeAdmin = user => {
      axiosSecure.patch(`/users/admin/${user._id}`)
         .then(res => {
            // console.log(res.data)
            if (res.data.modifiedCount > 0) {
               refetch();
               Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: `${user.name} is an Admin Now!`,
                  showConfirmButton: false,
                  timer: 1500
               });
            }
         })
   }

   const handleDeleteUser = user => {
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
            axiosSecure.delete(`/users/${user._id}`)
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
      <div>
         <Helmet>
            <title>Bistro Boss | Dashboard | All Users</title>
         </Helmet>
         <SectionTitle heading='MANAGE ALL USERS' subHeading='How Many??'></SectionTitle>
         <div className="bg-white py-4 rounded-xl text-black font-bold">
            <div className="pl-16 mb-8">
               <h2 className="text-4xl">Total Users: {user.length} </h2>
            </div>
            <div className="overflow-x-auto rounded-t-xl mx-16">
               <table className="table">
                  {/* head */}
                  <thead className="bg-[#D1A054] rounded-t-xl text-base text-white font-semibold">
                     <tr>
                        <th>
                        </th>
                        <th> Name</th>
                        <th> Email</th>
                        <th>Role</th>
                        <th>Action</th>
                     </tr>
                  </thead>
                  <tbody className="text-base font-normal">
                     {
                        user.map((user, index) => <tr key={user._id}>
                           <th>
                              {index + 1}
                           </th>

                           <td>
                              {user.name}
                           </td>
                           <td>{user.email}</td>
                           <td>
                              {user.role === 'admin' ? 'Admin' : <button
                                 onClick={() => handleMakeAdmin(user)}
                                 className="w-12 h-12 text-white text-3xl rounded-xl flex justify-center items-center bg-[#D1A054]">
                                 <FaUsers className="text-white 
                                        text-2xl"></FaUsers>
                              </button>}
                           </td>
                           <th>
                              <div className="bg-[#B91C1C] w-12 h-12 text-white text-3xl rounded-xl flex justify-center items-center">
                                 <button onClick={() => handleDeleteUser(user)}>
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

export default AllUsers;