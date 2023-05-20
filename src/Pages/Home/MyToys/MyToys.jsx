import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import ChangeTitle from "../../../Components/ChangeTitle";


const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);
  const email = user?.email;
  useEffect(() => {
    fetch(`https://baby-car-cruise-server.vercel.app/user/${email}`)
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
          fetch(`https://baby-car-cruise-server.vercel.app/deletes/${_id}`, {
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
    fetch(`https://baby-car-cruise-server.vercel.app/shortData/${email}`)
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
    <div >
      <ChangeTitle title='My Toys'></ChangeTitle>
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
                  </div>
                </td>
                <td>
                <div className="font-bold">Name : {toys?.toysname}</div>
                  <span>Email : {toys?.email}</span>
                </td>
                <td>
                  <span>Price : {toys?.price}</span>
                  <br />
                  <span>Rating : {toys?.price}</span>
                </td>
                <th>
                  <Link to={`/update/${toys._id}`}>
                    <button
                      className="btn btn-circle  btn-accent"
                    >
                      <FaEdit className="h-5 w-5"></FaEdit>
                    </button>
                  </Link>
                </th>
                <th>
                  <button
                    onClick={() => handelDelete(toys._id)}
                    className="btn btn-circle btn-error text-white"
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
