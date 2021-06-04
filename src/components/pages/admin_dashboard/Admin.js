import React from 'react';
import '../../../App.css';
import NavbarAll from '../../nav_bars/NavbarAll';
import AdminShortcuts from '../../shortcuts/AdminShortcuts';

function Admin () {
    return (
        <>
            <NavbarAll/>
            <h1 className='admin'>ADMIN</h1>;
        </>
    )
}

export default Admin;
