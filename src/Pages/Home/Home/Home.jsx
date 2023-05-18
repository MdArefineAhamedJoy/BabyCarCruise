import React from 'react';
import NavBar from '../../Shared/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../../Shared/Footer';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import Category from '../Category/Category';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <Category></Category>
        </div>
    );
};

export default Home;