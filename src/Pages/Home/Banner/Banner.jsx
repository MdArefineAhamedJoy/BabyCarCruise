import React from "react";
import banner from "../../../assets/scene-with-happy-boy-playing-room_1308-38724.avif";

const Banner = () => {
  return (
    <div
      className="hero mb-28 min-h-screen md:h-full h-1/2"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="hero-overlay bg-opacity-40"></div>
      <div className="hero-content text-center text-neutral-content">
        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="max-w-md"
        >
          <h1 className="md:mb-5 text-3xl   md:text-5xl font-bold">
            Best Kids STore and Online Shop{" "}
          </h1>
          <p className="mb-5 ">
            {" "}
            The Ultimate Online Shop and Store for Everything Your Child Needs!"
          </p>
          <button className="btn btn-primary">Get Shopping</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
