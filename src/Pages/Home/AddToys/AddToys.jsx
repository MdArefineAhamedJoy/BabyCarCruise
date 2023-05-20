import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";
const AddToys = () => {
  const { user } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    fetch(`http://localhost:5000/category`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if(data.acknowledged){
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Product Add Successfully',
                showConfirmButton: false,
                timer: 1800
              })
        }
      });
  };

  return (
    <div className="md:w-10/12 bg-slate-600 mx-auto rounded">
      <h1 className="text-center pt-12 text-4xl font-semibold text-white">
        ADDED PRODUCTS
      </h1>
      <div className="p-10 shadow-lg">
        <form className=" pb-10 " onSubmit={handleSubmit(onSubmit)}>
          <input
            className="p-3 w-full mb-3"
            placeholder="Photo URL"
            {...register("photo", { required: true })}
          />
          <div className="grid grid-cols-2 gap-5 ">
            <input
              className="  p-3"
              defaultValue={user?.email}
              {...register("email", { required: true })}
            />
            <input
              className="p-3"
              placeholder="Toys Name"
              {...register("toysname", { required: true })}
            />
            <input
              className="p-3"
              placeholder="Seller Name"
              {...register("sellerName", { required: true })}
            />
            <input
              className="p-3"
              placeholder="Price"
              {...register("price", { required: true })}
            />
            <input
              className="p-3"
              placeholder="Available Quantity"
              {...register("availableQuantity", { required: true })}
            />
            <input
              className="p-3"
              placeholder="Rating"
              {...register("rating", { required: true })}
            />
            <select
              className="p-3"
              placeholder="Sub Category Name"
              {...register("categoryName", { required: true })}
            >
              <option value="Sports">Sports</option>
              <option value="Avenger">Avenger</option>
              <option value="Soldier">Soldier</option>
            </select>
            <textarea
              className=" w-full "
              placeholder="Description"
              {...register("description", { required: true })}
            />
          </div>
          <input
            className="block btn mx-auto  w-full text-center mt-7 "
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default AddToys;
