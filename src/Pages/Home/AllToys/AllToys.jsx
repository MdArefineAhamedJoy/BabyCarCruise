import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllToys = () => {
  const [allData, setAllData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/allCategories")
      .then((res) => res.json())
      .then((data) => {
        setAllData(data);
      });
  }, [allData]);
  return (
    <div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>NO</th>
              <th>Product Image</th>
              <th>Sailor Details</th>
              <th>Quantity</th>
              <th>Update</th>
              <th>Delete</th>
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
                        <img
                          src={data.photo}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{data?.categoryName}</div>
                      <div className="text-sm opacity-50">{data?.name}</div>
                    </div>
                  </div>
                </td>
                <td>
                  <span className="badge badge-ghost badge-sm">
                    {data?.sellerName}
                  </span>
                  <br />
                  {data?.email}
                </td>
                <td>
                  <span>Quantity :{data?.availableQuantity}</span>
                  <br />
                  <span>Rating : {data?.rating}</span>
                </td>
                <th>
                  <Link to="/:id">
                    <button
                      onClick={() => handelUpdate(data._id)}
                      className="btn btn-circle  bg-green-950"
                    >
                        ediot
                    </button>
                  </Link>
                </th>
                <th>
                  <button
                    onClick={() => handelDelete(data._id)}
                    className="btn btn-circle bg-red-300"
                  >
                    delete
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
