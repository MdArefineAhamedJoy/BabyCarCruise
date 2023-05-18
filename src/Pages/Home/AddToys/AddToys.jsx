import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../Provider/AuthProvider";
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
      .then((data) => console.log(data));
  };

  return (
    <div className="md:w-10/12 bg-red-600 mx-auto">
      <div className="p-10">
        <form className="ms-10 " onSubmit={handleSubmit(onSubmit)}>
          <input
            className="w-full mb-3  p-3"
            defaultValue={user?.email}
            {...register("email", { required: true })}
          />
          <div className="grid grid-cols-2 gap-5 ">
            <input
              className="p-3"
              placeholder=""
              {...register("photo", { required: true })}
            />
            <input className="p-3" {...register("name", { required: true })} />
            <input className="p-3" {...register("price", { required: true })} />

            <input className="p-3" {...register("rating", { required: true })} />
            <select className="p-3" {...register("categoryName", { required: true })}>
              <option value="sports">Sports</option>
              <option value="Avenger">Avenger</option>
              <option value="Soldier">Soldier</option>
            </select>
          </div>
          <input
            className="block btn mx-auto w-1/2 text-center mt-7 "
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default AddToys;
