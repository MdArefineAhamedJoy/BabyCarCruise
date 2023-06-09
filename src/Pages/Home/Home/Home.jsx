import React from "react";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Support from "../Section/Support";
import Discount from "../Section/Discount";
import ImageGallery from "../ImageGallery/ImageGallery";
import ChangeTitle from "../../../Components/ChangeTitle";

const Home = () => {
  return (
    <div>
      <ChangeTitle title="Home"></ChangeTitle>
      <Banner></Banner>
      <ImageGallery></ImageGallery>
      <Category></Category>
      <Support></Support>
      <Discount></Discount>
    </div>
  );
};

export default Home;
