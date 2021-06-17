import React from 'react';
import '../../../App.css';
import HomeHero from './HomeHero';
import HomeFooter from './HomeFooter';
import HomeNavbar from '../../nav_bars/HomeNavbar';

function Home () {
    return(
        <>
            <HomeNavbar />
            <HomeHero />
            <HomeFooter />
        </>
    )
};

export default Home;
