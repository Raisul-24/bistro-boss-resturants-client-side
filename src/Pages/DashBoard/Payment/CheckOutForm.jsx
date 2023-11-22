import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import UseAxiosSecure from "../../../hooks/UseAxiosSecure";
import UseCart from "../../../hooks/UseCart";
import UseAuth from "../../../hooks/UseAuth";


const CheckOutForm = () => {
   const [error, setError] = useState('');
   const [transactionId, setTransactionId] =useState('')

   const [clientSecret, setClientSecret] = useState("");

   const stripe = useStripe();
   const elements = useElements();
   const axiosSecure = UseAxiosSecure();
   const [cart] = UseCart();
   const { user } = UseAuth();
   const totalPrice = cart.reduce((total, item) => total + item.price, 0)

   useEffect(() => {
      axiosSecure.post('/create-payment-intent', { price: totalPrice })
         .then(res => {
            // console.log(res.data.clientSecret);
            setClientSecret(res.data.clientSecret);
         })
   }, [axiosSecure, totalPrice])


   const handleSubmit = async (event) => {
      // Block native form submission.
      event.preventDefault();

      if (!stripe || !elements) {
         // Stripe.js has not loaded yet. Make sure to disable
         // form submission until Stripe.js has loaded.
         return;
      }

      // Get a reference to a mounted CardElement. Elements knows how
      // to find your CardElement because there can only ever be one of
      // each type of element.
      const card = elements.getElement(CardElement);

      if (card == null) {
         return;
      }


      // Use your card Element with other Stripe.js APIs
      const { error, paymentMethod } = await stripe.createPaymentMethod({
         type: 'card',
         card,
      });

      if (error) {
         console.log('[error]', error);
         setError(error.message);
      } else {
         console.log('[PaymentMethod]', paymentMethod);
         setError('');
      }

      // confirm payment
      const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
         payment_method: {
            card: card,
            billing_details: {
               email: user?.email || 'anonymous',
               name: user?.displayName || 'anonymous'
            }
         }
      })

      if (confirmError) {
         console.log('confirm error')
      }
      else {
         console.log('payment intent', paymentIntent)
         if(paymentIntent.status === 'succeeded'){
            console.log('transaction id', paymentIntent.id)
            setTransactionId(paymentIntent.id)
         }
      }
   };
   return (
      <form onSubmit={handleSubmit}>
         <CardElement
            options={{
               style: {
                  base: {
                     fontSize: '16px',
                     color: '#424770',
                     '::placeholder': {
                        color: '#aab7c4',
                     },
                  },
                  invalid: {
                     color: '#9e2146',
                  },
               },
            }}
         />
         <button className="btn-sm btn-primary rounded-xl" type="submit"
            disabled={!stripe || !clientSecret}>
            Pay
         </button>
         <p className="text-red-400 text-center font-bold">{error}</p>
         {
            transactionId && <p className="text-green-400 text-center font-bold">
               Your transaction id: {transactionId}
            </p>
         }
      </form>
   );
};

export default CheckOutForm;