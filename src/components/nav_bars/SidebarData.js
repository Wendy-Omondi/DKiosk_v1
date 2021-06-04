import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as GiIcons from 'react-icons/gi';
import * as RiIcons from 'react-icons/ri';


export const SidebarData = [
    {
        title: 'Dashboard',
        path: '/SignUp',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },

    {
        title: 'Admin',
        path: '/Admin',
        icon: <RiIcons.RiAdminFill />,
        cName: 'nav-text'
    },

    {
        title: 'Planning',
        path: '/Planning',
        icon: <RiIcons.RiTodoFill />,
        cName: 'nav-text'
    },

    {
        title: 'Accounts',
        path: '/Accounts',
        icon: <GiIcons.GiCash />,
        cName: 'nav-text'
    },

    {
        title: 'Product',
        path: '/Product',
        icon: <FaIcons.FaCartPlus />,
        cName: 'nav-text'
    },

    {
        title: 'Customers',
        path: '/Customers',
        icon: <RiIcons.RiCustomerService2Fill />,
        cName: 'nav-text'
    },

    {
        title: 'Settings',
        path: '/Settings',
        icon: <AiIcons.AiFillSetting />,
        cName: 'nav-text'
    },

    {
        title: 'Logout',
        path: '/Logout',
        icon: <AiIcons.AiOutlineLogout />,
        cName: 'nav-text'
    }

]
