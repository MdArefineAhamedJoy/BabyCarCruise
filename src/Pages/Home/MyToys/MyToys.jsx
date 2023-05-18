import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);
  const email = user?.email;
  useEffect(() => {
    fetch(`http://localhost:5000/${email}`)
      .then((res) => res.json())
      .then((data) => setMyToys(data));
  }, [email]);
  console.log(myToys)
  return (
    <div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>NO</th>
              <th>Product Image</th>
              <th>Sailor Details
              </th>
              <th>Quantity</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {myToys.map((toys,index) => (
              <tr>
                <th>
                    {index + 1}
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={toys.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{toys?.categoryName}</div>
                      <div className="text-sm opacity-50">{toys?.name}</div>
                    </div>
                  </div>
                </td>
                <td>
                  <span className="badge badge-ghost badge-sm">
                    {toys?.sellerName}
                  </span>
                  <br />
                  {toys?.email}
    
                </td>
                <td>
                    <span>Quantity :{toys?.availableQuantity}</span>
                    <br />
                    <span>Rating : {toys?.rating}</span>
                </td>
                <th>
                  <button className="btn btn-circle  bg-green-950">
                    <FaEdit  className="h-5 w-5"></FaEdit>
                  </button>
                </th>
                <th>
                  <button className="btn btn-circle bg-red-300">
                    <FaTrashAlt className="h-5 w-5"></FaTrashAlt>
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

export default MyToys;
