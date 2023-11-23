import { useQuery } from "@tanstack/react-query";
import UseAuth from "../../../hooks/UseAuth";
import UseAxiosSecure from "../../../hooks/UseAxiosSecure";


const AdminDashBoard = () => {
   const { user } = UseAuth();
   const axiosSecure = UseAxiosSecure();

   const { data } = useQuery({
      queryKey: ['admin-stats'],
      queryFn: async () => {
         const res = await axiosSecure.get('/admin-stats');
         return res.data;
      }
   })
   return (
      <div>
         <h2 className="text-3xl font-bold">
            <span>Hi, Welcome!! </span>
            {
               user?.displayName ? user?.displayName : 'Back'
            }
         </h2>

      </div>
   );
};

export default AdminDashBoard;