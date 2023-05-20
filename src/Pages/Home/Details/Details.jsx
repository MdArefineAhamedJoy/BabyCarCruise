import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Details = () => {
  const details = useLoaderData();
  const {
    availableQuantity,
    photo,
    toysname,
    categoryName,
    description,
    email,
    rating,
    sellerName,
    price,
  } = details;

  console.log(details);
  return (
    <div className="px-10 pb-20 pt-10 bg-slate-400">
      <h2 className="text-center text-3xl underline-offset-2 text-zinc-700 pb-8 font-bold">
        {categoryName}
      </h2>
      <div className="card lg:card-side bg-base-300 shadow-xl">
        <figure className="w-1/2">
          <img className="w-full" src={photo} alt="Album" />
        </figure>
        <div className="card-body  pt-7">
          <h2 className="card-title pb-3">
            <span className="text-zinc-700 font-semibold">Toys Name :</span>{" "}
            {toysname}
          </h2>
          <p>
            <span className="text-zinc-700 font-semibold">Quantity :</span>{" "}
            {availableQuantity}
          </p>
          <p>
            <span className="text-zinc-700 font-semibold">Price :</span> {price}
          </p>
          <p>
            <span className="text-zinc-700 font-semibold">Email :</span> {email}
          </p>
          <p>
            <span className="text-zinc-700 font-semibold">Rating :</span>{" "}
            {rating}
          </p>
          <p>
            <span className="text-zinc-700 font-semibold"> sellerName :</span>{" "}
            {sellerName}
          </p>
          <p>
            <span className="text-zinc-700 font-semibold"> Description :</span>{" "}
            {description}
          </p>

          <div className=" pt-4">
            <Link to='/'>
              <button className="bg-sky-400 hover:bg-sky-700 py-3 px-8 rounded shadow-md duration-500 font-bold text-purple-50">
                Back To Home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
