import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../SharedComponents/Navbar/Navbar";
import Footer from "../SharedComponents/Footer";

const MainLayout = () => {
   const location = useLocation();
   const noHeaderFooter =location.pathname.includes('login')
   return (
      <div>
         { noHeaderFooter || <Navbar></Navbar>}
         <Outlet></Outlet>
         { noHeaderFooter || <Footer></Footer>}
      </div>
   );
};

export default MainLayout;