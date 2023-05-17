import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Home/Login/Login";
import SingUp from "../Pages/Home/Login/SingUp";
import ErrorPage from "../Components/ErrorPage";
import Main from "../LayOut/Main";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'login',
            element:<Login></Login>
        },
        {
            path:'singup',
            element:<SingUp></SingUp>
        }
      ]
    },
  ]);


export default router;