import React from "react";
import imag1 from "../../../assets/istockphoto-1069933778-170667a.jpg";
import imag2 from "../../../assets/istockphoto-1359811855-170667a.jpg";
const Discount = () => {
  return (
    <div className="md:flex mx-auto  pt-10 pb-32">
      <div className=" w-1/2 mx-auto  ">
        <div className=" w-11/12 m-5  overflow-hidden relative  cursor-pointer shadow-sm">
          <img
            className="w-full h-full md:h-[500px]  bg-cover hover:scale-110 rounded transition-all duration-300"
            src={imag2}
            alt=""
          />
          <div className="absolute top-20 right-8">
            <p className="text-3xl font-bold">
              <span className="font-extrabold">Collation</span>
              <span className="block mt-3">Flat 20% off</span>
            </p>
            <button className="btn btn-sm mt-5 ">shop now</button>
          </div>
        </div>
      </div>
      <div className=" w-1/2 mx-auto  ">
        <div className=" w-11/12 m-5  overflow-hidden relative  cursor-pointer shadow-sm">
          <img
            className="w-full md:h-[500px] h-full bg-cover hover:scale-110 rounded transition-all duration-300"
            src={imag1}
            alt=""
          />
          <div className="absolute top-20 right-8">
            <p className="text-3xl font-bold">
              <span className="font-extrabold">Collation</span>
              <span className="block mt-3">Flat 30% off</span>
            </p>
            <button className="btn btn-sm mt-5 ">shop now</button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Discount;
