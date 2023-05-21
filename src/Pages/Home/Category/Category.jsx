import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList } from "react-tabs";
import { AuthContext } from "../../../Provider/AuthProvider";


const Category = () => {
  const { user } = useContext(AuthContext)
  const [categoryName, setCategoryName] = useState("Sports");
  const [queryValue , setQuery ] = useState('')
  const [categoryData, setCategoryData] = useState([]);
  useEffect(() => {
    fetch(`https://baby-car-cruise-server.vercel.app/category/${categoryName}`)
      .then((res) => res.json())
      .then((data) => setCategoryData(data));
  }, [categoryName]);

  const handleCategory = (data) => {
    setCategoryName(data);
  };

 
  return (
    <div className="my-10">
      <Tabs>
        <TabList className="text-center md:w-1/2 mx-auto my-10 flex gap-2  justify-center  py-3 ">
          <button
            className={
              categoryName === "Sports"
                ? "text-white   hover:bg-sky-500 duration-300 py-3 px-6 text-lg font-semibold bg-sky-400"
                : "py-3 px-6 border border-sky-500 text-lg font-semibold"
            }
          >
            <Tab onClick={() => handleCategory("Sports")}>Sports</Tab>
          </button>
          <button
            className={
              categoryName === "Avenger"
                ? "text-white hover:bg-sky-500 duration-300 py-3 px-6 text-lg font-semibold bg-sky-400"
                : "py-3 px-6 border border-sky-500 text-lg font-semibold"
            }
          >
            <Tab onClick={() => handleCategory("Avenger")}>Avenger</Tab>
          </button>
          <button
            className={
              categoryName === "Soldier"
                ? "text-white hover:bg-sky-500 duration-300 py-3 px-6 text-lg font-semibold bg-sky-400"
                : "py-3 px-6 border border-sky-500 text-lg font-semibold"
            }
          >
            <Tab onClick={() => handleCategory("Soldier")}>Soldier</Tab>
          </button>
        </TabList>

        <div>
          <div className="grid md:grid-cols-3 pt-10 gap-5">
            {categoryData.map((data) => (
              <div key={data._id}>
                <div className="card relative rounded-md  card-compact w-full bg-zinc-300 shadow-lg">
                  <figure className="w-full h-56">
                    <img src={data.photo} alt="Shoes" />
                  </figure>
                  <div className="">
                    <div className="p-4 pb-20">
                      <h2 className="card-title">{data.toysname}</h2>
                      <div className="flex justify-between mt-3">
                      <p>Rating : {data.rating}</p>
                      <p>Price : {data.price}</p>
                      </div>
                    </div>
                    <Link to={ `category/${data._id}`}>
                      <button  className="w-full py-3 absolute bottom-0 rounded-b-md p-0   bg-sky-400 hover:bg-sky-500 duration-500 text-white font-semibold">
                        Show Details
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Tabs>
    </div>
  );
};

export default Category;
