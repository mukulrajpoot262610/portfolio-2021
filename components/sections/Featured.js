import Link from 'next/link';
import React, { useState } from 'react';
import Cover from '../Cover';

const Featured = ({ projects }) => {

    const [data, setData] = useState(projects)

    const handleClose = (id) => {
        const newData = data.filter((e) => e.id !== id)
        setData(newData)
    }

    return <div className="min-h-screen flex flex-col items-center justify-center lg:my-64">
        <div className="hidden h-1/4 container relative w-full md:flex justify-center items-center">
            <h1 data-aos="fade-right" className="absolute bottom-0 text-transparent" style={{ WebkitTextStrokeWidth: '.5px', WebkitTextStrokeColor: 'var(--main-yellow)', fontSize: '15rem', zIndex: '-1' }}>&lt;Work /&gt; </h1>
            <h1 data-aos="fade-left" className="text-secondary-100 font-extrabold" style={{ fontSize: '10rem' }} >Featured Projects</h1>
        </div>
        <main className="container px-20 lg:px-56 flex flex-col items-center justify-center">
            <h3 className="text-success md:text-4xl self-start">Some Selected Projects</h3>
            <div className="flex flex-wrap items-center justify-center my-12 transition ease-in-out">
                {
                    data.length === 0 ? (
                        <div className="flex flex-col justify-center items-center">
                            <img src="/noData.svg" alt="" className="w-1/2 h-auto my-12" />
                            <h3 className="text-success md:text-4xl" data-aos="fade-in">No Projects Opened</h3>
                        </div>
                    ) : data.map((e) => <Cover data={e} key={e.id} handleClose={handleClose} />)
                }
            </div>
            {
                <Link href="/work" passHref>
                    <button className="rounded-lg border-2 px-8 py-4 font-semibold hover:bg-success hover:text-white border-success text-success">View More</button>
                </Link>
            }
        </main>
    </div>;
};

export default Featured;
