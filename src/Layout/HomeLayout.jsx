import React from 'react';
import Header from '../components/Header';
import LatestNews from '../components/LatestNews';
import Navbar from '../components/Navbar';
import AllCategories from '../components/Layout-Components/AllCategories';
import RightNavbar from '../components/Layout-Components/RightNavbar';
import { Outlet } from 'react-router';

const HomeLayout = () => {
    return (
        <div className='font-primary'>
            <header><Header></Header></header>
            <section className='lg:w-11/12 lg:mx-auto w-full'><LatestNews></LatestNews> </section>
            <nav className='lg:w-11/12 mx-auto my-2 '>
            <Navbar></Navbar>
            </nav>
            <main className="w-11/12 mx-auto  grid grid-cols-12 gap-4">
                <aside className='col-span-3'><AllCategories/></aside>

                <section className='col-span-6'>
                   <Outlet />
                </section>

                <aside className='col-span-3'><RightNavbar></RightNavbar></aside>
            </main>
        </div>
    );
};

export default HomeLayout;