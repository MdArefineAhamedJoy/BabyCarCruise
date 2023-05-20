import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";


const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);
  const email = user?.email;
  useEffect(() => {
    fetch(`http://localhost:5000/user/${email}`)
      .then((res) => res.json())
      .then((data) => setMyToys(data));
  }, [email]);
  
  const handelDelete = (_id) => {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(`http://localhost:5000/deletes/${_id}`, {
            method: "DELETE",
          })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
        }
      })
  };

  const handelShort=()=>{
    fetch(`http://localhost:5000/shortData/${email}`)
    .then((res) => res.json())
    .then((data) => {
      if(data){
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Data Short Successfully',
          showConfirmButton: false,
          timer: 1000
        })
        setMyToys(data)
      }

    });
  }
  
  return (
    <div>
      <div className="py-5 ">
        <button onClick={handelShort} className="btn w-1/4 block mx-auto">Short Data</button>
      </div>
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
            {myToys.map((toys, index) => (
              <tr key={toys._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-20 h-20">
                        <img
                          src={toys.photo}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{toys?.categoryName}</div>
                      <div className="text-sm opacity-50">{toys?.toysname}</div>
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
                  <br />
                  <span>Price : {toys?.price}</span>
                </td>
                <th>
                  <Link to={`/update/${toys._id}`}>
                    <button
                      className="btn btn-circle  bg-green-950"
                    >
                      <FaEdit className="h-5 w-5"></FaEdit>
                    </button>
                  </Link>
                </th>
                <th>
                  <button
                    onClick={() => handelDelete(toys._id)}
                    className="btn btn-circle bg-red-300"
                  >
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
