
const Banner = () => {
   return (
      <div className="">
         <div className="hero h-[600px]" style={{ backgroundImage: 'url(/src/assets/shop/banner2.jpg)' }}>
            <div className="hero-content text-center text-neutral-content w-9/12 h-2/5 ">
               <div className="hero-overlay bg-opacity-70 text-white p-10">
                  <h1 className="mb-5 text-7xl font-bold">OUR SHOP</h1>
                  <p className="mb-5">Would you like to try a dish?</p>
               </div>
            </div>
         </div>

      </div>
   );
};

export default Banner;