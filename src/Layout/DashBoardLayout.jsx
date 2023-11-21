// import React from 'react';
import { FaAd, FaCalendar, FaHome, FaList, FaSearch, FaShoppingCart } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import UseCart from "../hooks/UseCart";
import { FaBook, FaUsers, FaUtensils } from "react-icons/fa6";
import UseAdmin from "../hooks/UseAdmin";

const DashBoardLayout = () => {
   const [cart] = UseCart();

   // TODO get isAdmin value from the database
   const [isAdmin] = UseAdmin()

   return (
      <div className="flex">
         {/* dashboard side bar  */}
         <div className="w-64 min-h-screen bg-[#D1A054]">
            <ul className="menu p-4 text-black text-lg font-semibold">
               {
                  isAdmin ? <>
                     <li>
                        <NavLink to="/dashboard/adminHome">
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
                        <NavLink to="/dashboard/manageBookings">
                           <FaBook></FaBook>
                           Manage Bookings</NavLink>
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
                           <NavLink to="/dashboard/userHome">
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
                           <NavLink to="/dashboard/bookings">
                              <FaList></FaList>
                              My Bookings</NavLink>
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
                  <NavLink to="/order/salad">
                     <FaSearch></FaSearch>
                     Menu</NavLink>
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