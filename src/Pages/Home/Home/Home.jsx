import React from 'react';
import NavBar from '../../Shared/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../../Shared/Footer';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
        </div>
    );
};

export default Home;