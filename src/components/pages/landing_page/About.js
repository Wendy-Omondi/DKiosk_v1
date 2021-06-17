import React from 'react';
import '../../../App.css';
import HomeNavbar from '../../nav_bars/HomeNavbar';
import HomeFooter from './HomeFooter';

function About () {
    return (
        <>
            <HomeNavbar />
            <h1 className='about'>ABOUT</h1>
            <HomeFooter />
        </>
    )
}

export default About;

