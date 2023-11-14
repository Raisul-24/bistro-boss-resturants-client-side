import Banner from "./Banner/Banner";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from "../../hooks/UseMenu";
import OrderTab from "./OrderTab/OrderTab";

const OurShop = () => {
   const [menu] = useMenu();
   const dessert = menu.filter(item => item.category === "dessert");
   const soups = menu.filter(item => item.category === "soup");
   const pizzas = menu.filter(item => item.category === "pizza");
   const salad = menu.filter(item => item.category === "salad");
   const drinks = menu.filter(item => item.category === "drinks");
   return (
      <div>
         <Banner></Banner>
         <div className="container mx-auto my-10">
            <Tabs >
               <TabList>
                  <Tab>SALAD</Tab>
                  <Tab>PIZZA</Tab>
                  <Tab>SOUPS</Tab>
                  <Tab>DESSERTS</Tab>
                  <Tab>DRINKS</Tab>
               </TabList>

               <TabPanel>
                  <OrderTab items={salad}></OrderTab>
               </TabPanel>
               <TabPanel>
               <OrderTab items={pizzas}></OrderTab>
               </TabPanel>
               <TabPanel>
               <OrderTab items={soups}></OrderTab>
               </TabPanel>
               <TabPanel>
               <OrderTab items={dessert}></OrderTab>
               </TabPanel>
               <TabPanel>
               <OrderTab items={drinks}></OrderTab>
               </TabPanel>
            </Tabs>
         </div>
      </div>
   );
};

export default OurShop;