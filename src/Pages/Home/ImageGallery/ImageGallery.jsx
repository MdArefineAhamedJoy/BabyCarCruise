import React, { useEffect, useState } from "react";

const ImageGallery = () => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    fetch("gallery.json")
      .then((res) => res.json())
      .then((data) => setImages(data));
  }, []);
  return (
    <div>
      <h1
        data-aos="fade-up"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        className="mb-5  text-center font-extrabold text-zinc-700 text-3xl"
      >
        Product Coming Gallery
      </h1>
      <div className="md:columns-3 columns-1 gap-3 w-full space-y-3 pb-28  ">
        {images.map((img) => (
          <div
            key={img.id}
            data-aos="fade-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <img
              className="bg-slate-200 rounded break-inside-avoid hover:opacity-70 duration-300 "
              src={img.photo}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
