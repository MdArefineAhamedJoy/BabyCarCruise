import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import { FaGoogle } from "react-icons/fa";
import login from "../../../assets/sign-concept-illustration_114360-5425.avif";
import ChangeTitle from "../../../Components/ChangeTitle";
const Login = () => {
  const { singInUser, loginGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    singInUser(email, password)
      .then((res) => {
        const lodgingUser = res.user;
        // console.log(lodgingUser)
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handelGoogleLogin = () => {
    loginGoogle()
      .then((res) => {
        const googleLogin = res.use;
        navigate(from, { replace: true });
        // console.log(googleLogin)
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="flex p-10">
      <ChangeTitle title='Login'></ChangeTitle>
      <div className=" bg-sky-100 w-1/2 ">
          <div className="p-14  bg-base-200 rounded    shadow-2xl">
            <div className="mb-6">
              <h3 className="text-4xl font-bold mb-3 ">Login </h3>
              <p>
                Does n't have an account yet ?{" "}
                <Link to="/singup" className="link">
                  SingUp
                </Link>
              </p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <span>Email Address</span>
                <input
                  required
                  className="block w-full  fs-2xl p-3"
                  placeholder="Enter Your Email"
                  {...register("email")}
                />
              </div>
              <br />
              <div>
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
              <input className="btn btn-accent w-full" type="submit" />
            </form>
            <div className="flex justify-center items-center py-5 ">
              <hr className=" border my-4 w-5/12 " />
              <div className="w-2/12 text-center">Or</div>
              <hr className=" border my-4 w-5/12 " />
            </div>
            <div className="w-6/12 mx-auto">
              <button
                onClick={handelGoogleLogin}
                className="btn btn-accent text-white  w-full font-3xl"
              >
                <FaGoogle className="me-2 h-8 w-10"></FaGoogle> Google
              </button>
            </div>
          </div>

      </div>
      <div className="w-1/2">
        <img src={login} alt="" />
      </div>
    </div>
  );
};

export default Login;
