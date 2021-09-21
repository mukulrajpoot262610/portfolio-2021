import React from 'react'
import Head from 'next/head'
import Link from 'next/link';

const Work = () => {
    return (
        <div className="min-h-screen px-3 overflow-hidden">

            <Head>
                <title>Work - Mukul Rajpoot</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="min-h-screen flex flex-col items-center justify-center">
                <div className="hidden h-1/4 container relative w-full md:flex justify-center items-center">
                    <h1 data-aos="fade-right" className="absolute bottom-0 text-transparent" style={{ WebkitTextStrokeWidth: '.5px', WebkitTextStrokeColor: 'var(--main-yellow)', fontSize: '15rem', zIndex: '-1' }}>&lt;Work /&gt; </h1>
                    <h1 data-aos="fade-left" className="text-secondary-100 font-extrabold" style={{ fontSize: '10rem' }} >Some Projects</h1>
                </div>
                <main className="container px-20 lg:px-56 flex flex-col items-center justify-center">
                    <h3 className="text-success md:text-4xl self-start">All Projects</h3>
                    <div className="flex flex-wrap items-center justify-center my-12 transition ease-in-out">
                    </div>
                </main>
            </div>

        </div>
    )
}

export default Work
