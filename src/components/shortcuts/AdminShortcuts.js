import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import Card from "@material-ui/core/Card";
import * as GiIcons from 'react-icons/gi';
import * as RiIcons from 'react-icons/ri';
import * as BsIcons from 'react-icons/bs';
import { IconContext } from 'react-icons';
import '../shortcuts/styles/AdminShortcuts.css'


function AdminShortcuts() {

    const click = useState(false);
    const [adminShort, setAdminShort] = useState(false);
    const showAdminShortcut = () => setAdminShort(!adminShort);

    return (
        <>
            <IconContext.Provider value={{ color: '#09143c', size: 48 }}>
                <div className="admin-container">
                <ul className={click ? 'admin-shortcut active' : 'admin-shortcut'}>
                    <Card className='admin-item'>
                        <Link to='/product' className='admin-links'>
                            <FaIcons.FaCartPlus />
                            <br></br>
                              Inventory
                        </Link>
                    </Card>
                    <Card className='admin-item'>
                        <Link to='/accounts' className='admin-links'>
                            <GiIcons.GiCash />
                            <br></br>
                           Accounts
                        </Link>
                    </Card>
                    <Card className='admin-item'>
                        <Link to='/planning' className='admin-links'>
                            <AiIcons.AiOutlineFundProjectionScreen />
                            <br></br>
                            Projects
                        </Link>
                    </Card>
                    <Card className='admin-item'>
                        <Link to='/customers' className='admin-links'>
                            <RiIcons.RiCustomerService2Fill />
                            <br></br>
                            Customers
                        </Link>
                    </Card>
                    <Card className='admin-item'>
                        <Link to='/staff' className='admin-links'>
                            <BsIcons.BsFillPeopleFill />
                            <br></br>
                            Staff
                        </Link>
                    </Card>
                    <Card className='admin-item'>
                        <Link to='/marketing' className='admin-links'>
                            <FaIcons.FaShareAlt />
                            <br></br>
                            Marketing
                        </Link>
                    </Card>
                    <Card className='admin-item'>
                        <Link to='/accounts' className='admin-links'>
                            <GiIcons.GiCoins />
                            <br></br>
                            Sales
                        </Link>
                    </Card>
                    <Card className='admin-item'>
                        <Link to='/suppliers' className='admin-links'>
                            <FaIcons.FaTruckMoving />
                            <br></br>
                            Suppliers
                        </Link>
                    </Card>
                </ul>
                </div>
            </IconContext.Provider>
        </>
    )
}

export default AdminShortcuts;
