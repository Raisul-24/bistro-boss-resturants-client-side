import { Helmet } from "react-helmet";
import SectionTitle from "../../../SharedComponents/SectionTitle/SectionTitle";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import UseAxiosPublic from "../../../hooks/UseAxiosPublic";
import UseAxiosSecure from "../../../hooks/UseAxiosSecure";
import { useForm } from "react-hook-form";
import { FaUpload } from "react-icons/fa";



const image_hosting_key = import.meta.env.VITE_IMAGE_BB_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`


const UpdateItem = () => {
   const { _id, name, category, recipe, image, price } = useLoaderData();
   // console.log(item)
   const { register, handleSubmit, reset } = useForm();
   const axiosPublic = UseAxiosPublic();
   const axiosSecure = UseAxiosSecure();
   const onSubmit = async (data) => {
      // console.log(data)
      // image upload to imgbb and then get an url
      const imageFile = { image: data.image[0] }
      const res = await axiosPublic.post(image_hosting_api, imageFile, {
         headers: {
            'content-type': 'multipart/form-data'
         }
      });
      console.log(res.data);
      if (res.data.success) {
         // now send the menu item data to the server with the image url
         const menuItem = {
            name: data.name,
            category: data.category,
            price: parseFloat(data.price),
            recipe: data.recipe,
            image: res.data.data.display_url
         }

         const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
         console.log(menuRes.data)
         if (menuRes.data.modifiedCount > 0) {
            // show success popup
            reset();
            Swal.fire({
               position: "top-end",
               icon: "success",
               title: `${data.name} is updated to the menu.`,
               showConfirmButton: false,
               timer: 1500
            });
         }
      }
      console.log('with image url', res.data);
   };
   return (
      <div>
         <Helmet>
            <title>Bistro Boss | Dashboard | Add Items</title>
         </Helmet>
         <SectionTitle heading='Update Item' subHeading="Modify??"></SectionTitle>
         <div className="bg-[#F3F3F3] py-4 rounded-xl text-black font-bold px-16">
            <form onSubmit={handleSubmit(onSubmit)}>
               <div className="form-control w-full my-6">
                  <label className="label">
                     <span className="label-text text-black font-bold">Recipe Name*</span>
                  </label>
                  <input
                     type="text"
                     placeholder="Recipe Name"
                     defaultValue={name}
                     {...register('name', { required: true })}
                     required
                     className="input input-bordered w-full bg-white" />
               </div>
               <div className="flex gap-6">
                  {/* category */}
                  <div className="form-control w-full my-6">
                     <label className="label">
                        <span className="label-text text-black font-bold">Category*</span>
                     </label>
                     <select defaultValue={category} {...register('category', { required: true })}
                        className="select select-bordered w-full bg-white">
                        <option disabled value="default">Select a category</option>
                        <option value="salad">Salad</option>
                        <option value="pizza">Pizza</option>
                        <option value="soup">Soup</option>
                        <option value="dessert">Dessert</option>
                        <option value="drinks">Drinks</option>
                     </select>
                  </div>

                  {/* price */}
                  <div className="form-control w-full my-6">
                     <label className="label">
                        <span className="label-text text-black font-bold">Price*</span>
                     </label>
                     <input
                        type="number"
                        defaultValue={price}
                        placeholder="Price"
                        {...register('price', { required: true })}
                        className="input input-bordered w-full bg-white" />
                  </div>

               </div>
               {/* recipe details */}
               <div className="form-control">
                  <label className="label">
                     <span className="label-text text-black font-bold">Recipe Details</span>
                  </label>
                  <textarea {...register('recipe')}
                     defaultValue={recipe}
                     className="textarea textarea-bordered h-24 bg-white"
                     placeholder="Bio"></textarea>
               </div>
               {/* img */}
               <div className="flex gap-10 items-center">
               <div className="form-control w-1/2 my-6">
                  <input {...register('image', { required: true })}
                     type="file"
                     className="file-input w-full max-w-xs bg-white" />
               </div>
               <div className="avatar items-center gap-4 ">
               <h2 className="text-sm">Previous Image:</h2>
                  <div className="mask mask-squircle w-16 h-16">
                     <img src={image} alt="Avatar Tailwind CSS Component" />
                  </div>
               </div>
               </div>

               <button className="btn text-white" style={{ background: 'linear-gradient(90deg, #835D23 0%, #B58130 100%)' }}>
                  Update Item <FaUpload className="ml-4"></FaUpload>
               </button>
            </form>
         </div>
      </div>
   );
};

export default UpdateItem;