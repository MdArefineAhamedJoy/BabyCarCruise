import React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import Category from '../Category/Category';
import Support from '../Section/Support';
import Discount from '../Section/Discount';




const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <Category></Category>
            <Support></Support>
            <Discount></Discount>
        </div>
    );
};

export default Home;