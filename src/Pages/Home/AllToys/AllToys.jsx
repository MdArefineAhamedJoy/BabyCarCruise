import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import ChangeTitle from "../../../Components/ChangeTitle";

const AllToys = () => {
  const [allData, setAllData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/allCategories")
      .then((res) => res.json())
      .then((data) => {
        const showData = data.slice(0, 20);
        setAllData(showData);
      });
  }, []);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    fetch(`http://localhost:5000/searchByName/${data.search}`)
      .then((res) => res.json())
      .then((data) => setAllData(data));
  };

  return (
    <div>
      <ChangeTitle title='All Toys'></ChangeTitle>
      <div className="w-9/12  my-16  mx-auto ">
        <form className="flex w-8/12 mx-auto" onSubmit={handleSubmit(onSubmit)}>
          <input
            className="bg-zinc-400 text-center px-4 outline-red-300 w-10/12 py-2  font-semibold text-lg mx-auto block"
            {...register("search", { required: true })}
          />
          <input
            className=" w-2/12 outline-sky-400 py-3 border-e-2 border-b-2 border-t-2 border-sky-400 font-lg rounded-e-md ms-[-5px] text-white font-semibold bg-red-400"
            type="submit"
            value="Search"
          />
        </form>
      </div>
      <div className=" w-full hover:bg-slate-500">
        <table className="table w-full ">
          {/* head */}
          <thead>
            <tr>
              <th className="text-lg">NO</th>
              <th className="text-lg"> Image & Name</th>
              <th className="text-lg">Sailor Details</th>
              <th className="text-lg">Quantity</th>
              <th className="text-lg">View Details</th>
            </tr>
          </thead>
          <tbody>
            {allData.map((data, index) => (
              <tr key={data._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={data.photo} alt="Avatar " />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{data?.toysname}</div>
                      <div className="text-sm opacity-50">{data?.name}</div>
                    </div>
                  </div>
                </td>
                <td>
                  <span className="">Name : {data?.sellerName}</span>
                  <br />
                  Email : {data?.email}
                </td>
                <td>
                  <span>Quantity :{data?.availableQuantity}</span>
                  <br />
                  <span>Rating : {data?.rating}</span>
                </td>

                <td>
                  <Link to={`/category/${data._id}`}>
                    <button className="py-3 px-8 rounded-md hover:bg-zinc-500 duration-500  text-white bg-zinc-700">
                      <FaArrowRight></FaArrowRight>
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
