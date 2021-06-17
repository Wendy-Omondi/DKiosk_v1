import React from 'react';
import '../../../App.css';
import NavbarAll from '../../nav_bars/NarvbarAll';
import AdminShortcuts from './AdminShortcuts';

function Admin () {
    return (
        <>
            <NavbarAll/>
            <h1 className='admin'>ADMIN</h1>
            <AdminShortcuts />
        </>
    )
}

export default Admin;
