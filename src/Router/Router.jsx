import {
   createBrowserRouter,
 } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/OurMenu/Menu";

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
      }
     ]
     
   },
 ]);
export default router;