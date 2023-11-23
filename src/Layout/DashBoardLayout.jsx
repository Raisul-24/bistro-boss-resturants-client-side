// import React from 'react';
import { FaAd, FaCalendar, FaHome, FaList, FaSearch, FaShoppingCart } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import UseCart from "../hooks/UseCart";
import { FaBook, FaEnvelope, FaUsers, FaUtensils } from "react-icons/fa6";
import UseAdmin from "../hooks/UseAdmin";

const DashBoardLayout = () => {
   const [cart] = UseCart();

   // TODO get isAdmin value from the database
   const [isAdmin, isAdminLoading] = UseAdmin();
   if (isAdminLoading) {
      <div className="">
         <span className="loading loading-spinner text-primary"></span>
      </div>
   }

   return (
      <div className="flex">
         {/* dashboard side bar  */}
         <div className="w-64 min-h-screen bg-[#D1A054]">
            <ul className="menu p-4 text-black text-lg font-semibold">
               {
                  isAdmin ? <>
                     <li>
                        <NavLink to="/dashboard/adminDashBoard">
                           <FaHome></FaHome>
                           Admin Home</NavLink>
                     </li>
                     <li>
                        <NavLink to="/dashboard/addItems">
                           <FaUtensils></FaUtensils>
                           Add Items</NavLink>
                     </li>
                     <li>
                        <NavLink to="/dashboard/manageItems">
                           <FaList></FaList>
                           Manage Items
                        </NavLink>
                     </li>
                     <li>
                        <NavLink to="/dashboard/paymentHistory">
                           <FaBook></FaBook>
                           Payment History</NavLink>
                     </li>
                     <li>
                        <NavLink to="/dashboard/allUsers">
                           <FaUsers></FaUsers>
                           All Users</NavLink>
                     </li>
                  </>
                     :
                     <>
                        <li>
                           <NavLink to="/dashboard/userDashBoard">
                              <FaHome></FaHome>
                              User Home</NavLink>
                        </li>
                        <li>
                           <NavLink to="/dashboard/reservation">
                              <FaCalendar></FaCalendar>
                              Reservation</NavLink>
                        </li>
                        <li>
                           <NavLink to="/dashboard/cart">
                              <FaShoppingCart></FaShoppingCart>
                              My Cart
                              ({cart.length})
                           </NavLink>
                        </li>
                        <li>
                           <NavLink to="/dashboard/review">
                              <FaAd></FaAd>
                              Add a Review</NavLink>
                        </li>
                        <li>
                           <NavLink to="/dashboard/paymentHistory">
                              <FaList></FaList>
                              Payment History</NavLink>
                        </li>

                     </>
               }
               <div className="divider"></div>
               {/* common */}
               <li>
                  <NavLink to="/">
                     <FaHome></FaHome>
                     Home</NavLink>
               </li>
               <li>
                  <NavLink to="/shop">
                     <FaSearch></FaSearch>
                     Menu</NavLink>
               </li>
               <li>
                  <NavLink to="/order/contact">
                     <FaEnvelope></FaEnvelope>
                     Contact</NavLink>
               </li>
            </ul>
         </div>
         {/* dashboard content */}
         <div className="flex-1 p-8 bg-[#F6F6F6]">
            <Outlet></Outlet>
         </div>
      </div>
   );
};

export default DashBoardLayout;