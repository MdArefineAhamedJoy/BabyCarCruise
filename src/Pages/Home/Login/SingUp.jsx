import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../Provider/AuthProvider";
const SingUp = () => {
    const {singUpUser} = useContext(AuthContext)
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm();
      const onSubmit = (data) => {
        const email = data.email ;
        const password = data.password;
        singUpUser(email,password)
        .then(res =>{
            const currentUser = res.user ;
            console.log(currentUser)
            
        })
        .catch(error =>{
            console.log(error.message)
        })
      };
  return (
    <div>
      <div className="py-4">
        <div className="p-10 md:w-1/2 bg-base-200 rounded   md:m-5 shadow-2xl">
          <div className="mb-6">
            <h3 className="text-4xl font-bold ">Login </h3>
            <p>
              Does n't have an account yet ?{" "}
              <Link to='/login' className="link ">Login</Link>
            </p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="pb-4">
              <span>Name</span>
              <input
                required
                className="block w-full  fs-2xl p-3"
                placeholder="Enter Your Email"
                {...register("name")}
              />
            </div>
            <div className="pb-4">
              <span>Photo URL</span>
              <input
                required
                className="block w-full  fs-2xl p-3"
                placeholder="Enter Your Email"
                {...register("photo")}
              />
            </div>
            <div className="pb-4">
              <span>Email Address</span>
              <input
                required
                className="block w-full  fs-2xl p-3"
                placeholder="Enter Your Email"
                {...register("email")}
              />
            </div>
            <div className="pb-4">
              <div className="flex justify-between pb-1">
                <span>Password</span>
                <span className=" link ">Forget Password ?</span>
              </div>
              <input
                required
                className="block w-full fs-2xl p-3"
                placeholder="Enter Your Password"
                {...register("password", { required: true })}
              />
            </div>
            {errors.password && <span>This field is required</span>}
            <br />
            <input className="btn btn-success w-full" type="submit" />
          </form>
          <div className="flex justify-center items-center py-5 ">
            <hr className=" border my-4 w-5/12 " />
            <div className="w-2/12 text-center">Or</div>
            <hr className=" border my-4 w-5/12 " />
          </div>
          <div className="flex justify-between">
            <button className="btn btn-success w-5/12 ">Success</button>
            <button className="btn btn-success w-5/12">Success</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingUp;
