import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';

const AuthLayout = () => {
    return (
        <div className='font-primary bg-[#F3F3F3]'>
            <header className='py-3 w-11/12 '>
            <Navbar></Navbar>
            </header>
        <Outlet></Outlet>
        </div>
    );
};

export default AuthLayout;