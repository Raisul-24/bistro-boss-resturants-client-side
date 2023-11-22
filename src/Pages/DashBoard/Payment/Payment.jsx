import { Helmet } from "react-helmet";
import SectionTitle from "../../../SharedComponents/SectionTitle/SectionTitle";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm";


// todo add publishable key
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PAYMENT_GATEWAY_KEY);


const Payment = () => {
   return (
      <div>
         <Helmet>
            <title>Bistro Boss | Dashboard | Payment</title>
         </Helmet>
         <SectionTitle heading='PAYMENT' subHeading='pay'></SectionTitle>
         <div className="">
            <Elements stripe={stripePromise}>
               <CheckOutForm />
            </Elements>
         </div>
      </div>
   );
};

export default Payment;