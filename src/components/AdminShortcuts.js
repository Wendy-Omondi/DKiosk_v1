import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as GiIcons from 'react-icons/gi';
import * as RiIcons from 'react-icons/ri';
import * as FcIcons from 'react-icons/fc';
import * as BsIcons from 'react-icons/bs';
import { IconContext } from 'react-icons';
import './AdminShortcuts.css'

function AdminShortcuts() {

    const click = useState(false);
    const [adminShort, setAdminShort] = useState(false);
    const showAdminShortcut = () => setAdminShort(!adminShort);

    return (
        <>
            <IconContext.Provider value={{ color: '#09143c', size: 48 }}>
                <div className="admin-container">
                <ul className={click ? 'admin-shortcut active' : 'admin-shortcut'}>
                    <li className='admin-item'>
                        <Link to='/product' className='admin-links'>
                            <FaIcons.FaCartPlus />
                            <br></br>
                              Inventory
                        </Link>
                    </li>
                    <li className='admin-item'>
                        <Link to='/accounts' className='admin-links'>
                            <GiIcons.GiCash />
                            <br></br>
                           Accounts
                        </Link>
                    </li>
                    <li className='admin-item'>
                        <Link to='/planning' className='admin-links'>
                            <AiIcons.AiOutlineFundProjectionScreen />
                            <br></br>
                            Projects
                        </Link>
                    </li>
                    <li className='admin-item'>
                        <Link to='/customers' className='admin-links'>
                            <RiIcons.RiCustomerService2Fill />
                            <br></br>
                            Customers
                        </Link>
                    </li>
                    <li className='admin-item'>
                        <Link to='/staff' className='admin-links'>
                            <BsIcons.BsFillPeopleFill />
                            <br></br>
                            Staff
                        </Link>
                    </li>
                    <li className='admin-item'>
                        <Link to='/marketing' className='admin-links'>
                            <FaIcons.FaShareAlt />
                            <br></br>
                            Marketing
                        </Link>
                    </li>
                    <li className='admin-item'>
                        <Link to='/accounts' className='admin-links'>
                            <GiIcons.GiCoins />
                            <br></br>
                            Sales
                        </Link>
                    </li>
                    <li className='admin-item'>
                        <Link to='/suppliers' className='admin-links'>
                            <FaIcons.FaTruckMoving />
                            <br></br>
                            Suppliers
                        </Link>
                    </li>
                </ul>
                </div>
            </IconContext.Provider>
        </>
    )
}

export default AdminShortcuts;
