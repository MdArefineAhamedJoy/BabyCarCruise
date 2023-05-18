import React from "react";
import img from '../../../assets/istockphoto-534507755-170667a.jpg'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
const Banner = () => {
  return (
    <div>
      {/* <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src={img1}
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <div className="w-8/12">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, esse qui, aliquid minima, placeat id enim harum ratione tempore eligendi sapiente vel omnis tenetur dolorem maxime odio quam velit quos?</p>
            </div>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src={img2}
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="/images/stock/photo-1414694762283-acccc27bca85.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="/images/stock/photo-1665553365602-b2fb8e5d1707.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div> */}
       <Carousel>
                <div>
                    <img src={img} />
                    <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, laborum, ad eligendi maiores incidunt doloremque ab dignissimos doloribus mollitia ratione cum porro facere! Ullam, iste fugiat. Aliquam nemo ex soluta.</div>
                </div>
                <div>
                    <img src={img} />

                </div>
                <div>
                    <img src={img} />

                </div>
            </Carousel>
    </div>
  );
};

export default Banner;
