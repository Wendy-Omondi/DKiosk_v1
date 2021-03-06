import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../buttons/Button';
import '../nav_bars/styles/HomeNavbar.css';
import * as ImIcons from 'react-icons/im';

function HomeNavbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <>
            <nav className='navbar'>
               <div className='navbar-container'>
                   <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                       <ImIcons.ImLocation /> | DKiosk <i className="fab fa-typo3"></i>
                   </Link>
                   <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                       <li className='nave-item'>
                           <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                               Home
                           </Link>
                       </li>
                       <li className='nave-item'>
                           <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                               About
                           </Link>
                       </li>
                       <li className='nave-item'>
                           <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                               Contact
                           </Link>
                       </li>
                       <li className='nave-item'>
                           <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                               Sign Up
                           </Link>
                       </li>
                   </ul>
                   {Button && <Button buttonStyle='btn--outline'>Sign In</Button>}
                </div> 
            </nav>
        </>
    )
}

export default HomeNavbar;
