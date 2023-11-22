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
import AddItems from "../Pages/DashBoard/AddItems/AddItems";
import AdminRoute from "./AdminRoute";
import ManageItems from "../Pages/DashBoard/ManageItems/ManageItems";
import UpdateItem from "../Pages/DashBoard/UpdateItems/UpdateItem";
import Payment from "../Pages/DashBoard/Payment/Payment";
import PaymentHistory from "../Pages/DashBoard/PaymentHistory/PaymentHistory";

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
   // dashboard
   {
      path: 'dashboard',
      element: <PrivateRoute><DashBoardLayout></DashBoardLayout></PrivateRoute>,
      children: [
         // normal user
         {
            path: 'cart',
            element: <Cart></Cart>
         },
         {
            path: 'payment',
            element: <Payment></Payment>
         },
         {
            path: 'paymentHistory',
            element: <PaymentHistory></PaymentHistory>
         },
         // admin only routes
         {
            path: 'addItems',
            element: <AdminRoute><AddItems></AddItems></AdminRoute>
         },
         {
            path: 'allUsers',
            element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
         },
         {
            path: 'manageItems',
            element: <AdminRoute><ManageItems></ManageItems></AdminRoute>
         },
         {
            path: 'updateItem/:id',
            element: <AdminRoute><UpdateItem></UpdateItem></AdminRoute>,
            loader: ({params}) => fetch(`http://localhost:5007/menu/${params.id}`)
         },
      ]
   }
 ]);
export default router;