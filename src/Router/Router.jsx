import {
   createBrowserRouter,
 } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/OurMenu/Menu";
import OurShop from "../Pages/Our Shop/OurShop";
import ContactUs from "../Pages/ContactUs/ContactUs";

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
      }
     ]
     
   },
 ]);
export default router;