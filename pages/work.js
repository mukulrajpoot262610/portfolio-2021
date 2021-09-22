import React from 'react'
import Head from 'next/head'
import Link from 'next/link';
import LIST_DATA from '../components/project.list';
import WorkCover from '../components/WorkCover';

const Work = () => {
    return (
        <div className="min-h-screen px-3 overflow-hidden">

            <Head>
                <title>Work - Mukul Rajpoot</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="min-h-screen flex flex-col items-center justify-center">
                <div className="hidden h-1/4 mt-96 container relative w-full md:flex justify-center items-center">
                    <h1 data-aos="fade-right" className="absolute bottom-0 text-transparent" style={{ WebkitTextStrokeWidth: '.5px', WebkitTextStrokeColor: 'var(--main-yellow)', fontSize: '15rem', zIndex: '-1' }}>&lt;Work /&gt; </h1>
                    <h1 data-aos="fade-left" className="text-secondary-100 font-extrabold" style={{ fontSize: '10rem' }} >More Projects</h1>
                </div>
                <main className="container px-20 lg:px-56 flex flex-col items-center justify-center">
                    <h3 className="text-success md:text-4xl self-start">All Projects</h3>
                    <h2 className="self-start text-secondary-900 text-3xl max-w-5xl">A collection of front-end, full-stack coding. These are a mix of freelance, contest, practice and side projects.</h2>
                    <div className="w-full min-h-screen my-12 transition ease-in-out">
                        {
                            LIST_DATA.map((e) => <WorkCover data={e} key={e.id} />)
                        }
                    </div>
                </main>
            </div>

        </div>
    )
}

export default Work
