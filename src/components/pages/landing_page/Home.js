import React from 'react';
import '../../../App.css';
import HomeHero from '../../hero_sections/HomeHero';
import HomeFooter from '../../footers/HomeFooter';
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
