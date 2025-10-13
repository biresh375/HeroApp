import React from 'react';
import Navbar from '../Navbar/navbar';
import { Outlet } from 'react-router';
import Footer from '../Footer/Footer';

const Roots = () => {
    return (
        <div className='max-w-[1400px] mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Roots;