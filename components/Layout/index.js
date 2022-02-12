import Head from 'next/head';
import React from 'react';
import LeftSidebar from './LeftSidebar';
import Footer from './Footer'
import Navbar from './Navbar';

const Layout = ({ children }) => {
    return <div>

        <Head>
            <title>Blogs - Mukul Rajpoot</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        </Head>

        <Navbar />
        <LeftSidebar />
        {children}
        <Footer />
    </div>;
};

export default Layout;