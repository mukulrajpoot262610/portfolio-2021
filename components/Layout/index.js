import { AOS } from 'aos';
import Head from 'next/head';
import React, { useEffect } from 'react';

const Layout = ({ children }) => {

    useEffect(() => {
        AOS.init({
            duration: 1000
        })
    }, []);

    return <div>
        <Navbar />
        <LeftSidebar />
        {children}
        <Footer />
    </div>;
};

export default Layout;
