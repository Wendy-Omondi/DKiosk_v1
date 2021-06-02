import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './NavbarAll.css';
import { IconContext } from 'react-icons';
import { Button } from './Button';

function NavbarAll() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar-all'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                DKiosk <i className="fab fa-typo3"></i>
            </Link>
            <Link to='#' className='menu-bars'>
                <FaIcons.FaBars onClick={showSidebar} />
            </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
          {Button && <Button buttonStyle='btn--outline'>Profile</Button>}
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default NavbarAll;
