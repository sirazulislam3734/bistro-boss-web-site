import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const MainLoayOut = () => {
    const location = useLocation();

    const noHeader = location.pathname.includes('signin') || location.pathname.includes('signup')
    return (
        <div className='container mx-auto'>
            
            {noHeader || <Navbar></Navbar>}
            <Outlet />
            {noHeader || <Footer />}
        </div>
    );
};

export default MainLoayOut;