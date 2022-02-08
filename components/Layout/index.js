import Head from 'next/head';
import React from 'react';

const Layout = ({ children }) => {
    return <div>


        <Navbar />
        <LeftSidebar />
        {children}
        <Footer />
    </div>;
};

export default Layout;
