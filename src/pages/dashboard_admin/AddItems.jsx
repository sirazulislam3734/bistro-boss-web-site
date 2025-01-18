import React from "react";
import { FaUtensils } from "react-icons/fa6";
import SectionTItle from "../../components/SectionTItle";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMG_HOS_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const AddItems = () => {
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    // image upload to img-bb and then get an url
    const imgFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imgFile , {
        headers: {
            ' content-type': 'multipart/form-data '
        }
    });
    if(res.data.success){
        const menuInfo = {
            name: data.name,
            category: data.category,
            price: parseFloat(data.price),
            recipe: data.recipe,
            image: res.data.data.url
        }
        const menus = await axiosSecure.post('/menu', menuInfo)
            if(menus.data.insertedId){
                reset();
                Swal.fire({
                    title: "Good job!",
                    text: "Recipe Item added success!",
                    icon: "success"
                  });
            }
        
    }
  };
  return (
    <div>
      <SectionTItle
        subTitle="---How many??---"
        heading="ADD AN ITEM"
      ></SectionTItle>
      <div className="mx-auto p-12 bg-slate-200 shadow-md rounded-lg">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Recipe Name */}
          <div>
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="recipeName"
            >
              Recipe name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="recipeName"
              className="input input-bordered w-full"
              placeholder="Recipe name"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <span className="text-red-500">This Recipe Name is required</span>
            )}
          </div>

          {/* Category and Price */}
          <div className="flex space-x-4">
            <div className="w-1/2">
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="category"
              >
                Category<span className="text-red-500">*</span>
              </label>
              <select
                defaultValue={"default"}
                id="category"
                {...register("category", { required: true })}
                className="select select-bordered w-full"
              >
                <option disabled value={"default"}>
                  Category
                </option>
                <option>Drinks</option>
                <option>Pizza</option>
                <option>Salad</option>
                <option>Dessert</option>
                <option>Soups</option>
              </select>
              {errors.category && (
                <span className="text-red-500">This Category is required</span>
              )}
            </div>
            <div className="w-1/2">
              <label className="block text-sm font-medium mb-1" htmlFor="price">
                Price<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="price"
                {...register("price", { required: true })}
                className="input input-bordered w-full"
                placeholder="Price"
              />
              {errors.price && (
                <span className="text-red-500">This Price is required</span>
              )}
            </div>
          </div>

          {/* Recipe Details */}
          <div>
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="recipeDetails"
            >
              Recipe Details<span className="text-red-500">*</span>
            </label>
            <textarea
              id="recipeDetails"
              rows={5}
              {...register("recipe", { required: true })}
              className="textarea textarea-bordered w-full"
              placeholder="Recipe Details"
            ></textarea>
            {errors.recipe && (
              <span className="text-red-500">
                This Recipe Details is required
              </span>
            )}
          </div>

          {/* File Upload */}
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="file">
              Upload Image
            </label>
            <input
              type="file"
              id="file"
              {...register("image", { required: true })}
              className="file-input file-input-bordered w-full"
            />
            {errors.image && (
              <span className="text-red-500">This Image is required</span>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-yellow-600 p-3 rounded-lg w-full flex items-center justify-center text-white space-x-2"
          >
            <FaUtensils />
            <span className="text-xl text-white font-semibold">Add Item</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
