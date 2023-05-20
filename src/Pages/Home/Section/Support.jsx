import React from "react";
import { FaMoneyBillAlt, FaRegClock, FaShippingFast } from "react-icons/fa";

const Support = () => {
  return (
    <div className="grid grid-cols-1 md:mx-20 mx-10 md:grid-cols-3 gap-5 mt-28 md:mb-32 mb-10">
      <div className="text-center relative duration-700 rounded-md p-8 py-10 border-4 bg-slate-100 hover:shadow-xl hover:border-sky-400 ">
        <FaShippingFast className="h-10 w-16 text-center mx-auto"></FaShippingFast>
        <h2 className="font-extrabold text-2xl text-zinc-700 py-4 ">
          Free Shipping
        </h2>
        <p>Enjoy Free Shipping on Every Order Today!"</p>
        <FaShippingFast className="h-10  w-16 bottom-0 text-center mx-auto absolute right-1 opacity-10"></FaShippingFast>
      </div>

      <div className="text-center duration-700 rounded-md relative p-8 py-10 border-4 bg-slate-100 hover:border-sky-400 hover:shadow-xl">
        <FaRegClock className="h-10 w-16 text-center mx-auto"></FaRegClock>
        <h2 className="font-extrabold text-2xl text-zinc-700 py-4">
          Support 24/7
        </h2>
        <p>24/7 Support, Ready to Assist Anytime, Anywhere!"</p>
        <FaRegClock className="h-10 w-16 text-center mx-auto absolute bottom-0 right-1 opacity-10"></FaRegClock>
      </div>

      <div className="relative rounded-md duration-700 text-center p-8 py-10 border-4 bg-slate-100  hover:shadow-xl hover:border-sky-400">
        <FaMoneyBillAlt className="h-10 w-16 text-center mx-auto"></FaMoneyBillAlt>
        <h2 className="font-extrabold text-2xl text-zinc-700 py-4">
          Money Return
        </h2>
        <p>Get Your Money Back, No Questions Asked!"</p>
        <FaMoneyBillAlt className="h-10 w-16 text-center mx-auto absolute bottom-0 right-1 opacity-10"></FaMoneyBillAlt>
      </div>
    </div>
  );
};

export default Support;
