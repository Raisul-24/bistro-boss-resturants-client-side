import {
   createBrowserRouter,
 } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/OurMenu/Menu";
import OurShop from "../Pages/Our Shop/OurShop";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import DashBoardLayout from "../Layout/DashBoardLayout";
import Cart from "../Pages/DashBoard/Cart/Cart";
import PrivateRoute from "./PrivateRoute";
import AllUsers from "../Pages/DashBoard/AllUsers/AllUsers";

const router = createBrowserRouter([
   {
     path: "/",
     element: <MainLayout></MainLayout>,
     children: [
      {
         path: '/',
         element: <Home></Home>
      },
      {
         path: 'menu',
         element: <Menu></Menu>
      },
      {
         path: 'shop',
         element: <OurShop></OurShop>
      },
      {
         path: 'contact',
         element: <ContactUs></ContactUs>
      },
      {
         path: 'login',
         element: <Login></Login>
      }
     ],     
   },
   {
      path: '/register',
      element: <Register></Register>
   },
   {
      path: 'dashboard',
      element: <DashBoardLayout></DashBoardLayout>,
      children: [
         {
            path: 'cart',
            element: <PrivateRoute><Cart></Cart></PrivateRoute>
         },
         {
            path: 'allUsers',
            element: <AllUsers></AllUsers>
         }
      ]
   }
 ]);
export default router;