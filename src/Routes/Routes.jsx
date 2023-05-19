import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Home/Login/Login";
import SingUp from "../Pages/Home/Login/SingUp";
import ErrorPage from "../Components/ErrorPage";
import Main from "../LayOut/Main";
import MyToys from "../Pages/Home/MyToys/MyToys";
import AddToys from "../Pages/Home/AddToys/AddToys";
import AllToys from "../Pages/Home/AllToys/AllToys";
import Blog from "../Pages/Home/Blog/Blog";
import PrivateRouts from "./PrivateRouts";
import Details from "../Pages/Home/Details/Details";
import UpdateData from "../Components/UpdateData";

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
          path:'alltoys',
          element:<AllToys></AllToys>,
        },
        {
          path:'addtoys',
          element:<PrivateRouts><AddToys></AddToys></PrivateRouts>
        },
        {
            path:'singup',
            element:<SingUp></SingUp>
        },
        {
          path:'mytoys',
          element:<MyToys></MyToys>
        },
        {
          path:'blog',
          element:<Blog></Blog> 
        },
        {
          path:'category/:_id',
          element:<Details></Details>,
          loader: ({params}) => fetch(`http://localhost:5000/category/${params._id}`)
        },
        {
          path:'/:id',
          element:<UpdateData></UpdateData>
        }
      ]
    },
  ]);


export default router;