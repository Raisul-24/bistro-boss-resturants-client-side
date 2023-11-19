import UseCart from "../../../hooks/UseCart";


const Cart = () => {
   const [cart] = UseCart();
   console.log(cart)
   const totalPrice = cart.reduce((total, item) => total + item.price, 0);
   return (
      <div className="flex justify-evenly">
         <h2 className="text-4xl">Items: {cart.length}</h2>
         <h2 className="text-4xl">Total Price: ${totalPrice}</h2>
         <button className="btn btn-outline btn-success">Pay</button>
      </div>
   );
};

export default Cart;