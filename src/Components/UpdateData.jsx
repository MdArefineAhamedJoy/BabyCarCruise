import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
const UpdateData = () => {
  const details = useLoaderData();
  const [updateData, setUpdateData] = useState(null);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    fetch(`http://localhost:5000/update/${details._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Product Add Successfully",
            showConfirmButton: false,
            timer: 1800,
          });
        }
      });
  };

  return (
    <div className="w-8/12 mx-auto py-14 ">
      <h2 className="pb-12 text-2xl font-bold text-zinc-800 text-center">
        Update : {details.toysname}
      </h2>
      <form className="" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex gap-5 mb-5  items-center">
          <div className=" w-6/12 ">
            <span className="text-zinc-800">Price :</span>
            <br />
            <input
              className=" w-full  outline-sky-400 py-2 bg-slate-300 text-center"
              defaultValue={details.price}
              {...register("price", { required: true })}
            />
          </div>
          <div className="w-1/2 ">
            <span className="text-zinc-800">Quantity :</span>
            <br />
            <input
              defaultValue={details.availableQuantity}
              className="w-full bg-slate-300 py-2 outline-sky-400 text-center"
              {...register("availableQuantity", { required: true })}
            />
          </div>
        </div>
        <div className="w-8/12 mx-auto">
          <span className="text-zinc-800">Description :</span>
          <textarea
            defaultValue={`${details.description}`}
            className="bg-slate-300 w-full outline-sky-400  py-2 text-center block"
            {...register("description", { required: true })}
          />
        </div>
        {/* errors will return when field validation fails  */}

        <input
          className="bg-sky-400 hover:text-white w-full text-zinc-800 font-semibold py-3 hover:bg-sky-600 duration-500 my-4 mx-auto block"
          type="submit"
          value="Confirm Update"
        />
      </form>
    </div>
  );
};

export default UpdateData;
