import Link from 'next/link';
import React from 'react';

const Whyme = () => {
    return <div className="min-h-screen flex flex-col items-center justify-center lg:mb-32">
        <div className="hidden h-1/4 container relative w-full md:flex justify-center items-center">
            <h1 data-aos="fade-right" className="absolute bottom-0 text-transparent" style={{ WebkitTextStrokeWidth: '.5px', WebkitTextStrokeColor: 'var(--main-yellow)', fontSize: '15rem', zIndex: '-1' }}>&lt;About /&gt; </h1>
            <h1 data-aos="fade-left" className="text-secondary-100 font-extrabold" style={{ fontSize: '10rem' }} >Why Me? </h1>
        </div>
        <main className="container px-20 lg:px-56">
            <h3 className="text-success md:text-4xl">Why Me?</h3>
            <h3 className="text-secondary-900 text-3xl md:text-4xl max-w-6xl my-8">There's nothing I enjoy more than developing good websites and webApps for Cool people. I believe that people should do things they are good at or in which their <span className="text-success">Hearts ❤</span> lie. That's why I choose freelance web development as my career.</h3>
            <h3 className="text-secondary-900 text-3xl md:text-4xl max-w-6xl my-8">I've spent many years trying to perfect what I do and while I'll never be perfect, I do my best to come close.</h3>
            <h4 className="text-secondary-100 font-bold text-3xl md:text-4xl max-w-6xl my-8"> If you've got a project you'd like to work on with me just get in touch and we can get to work!
            </h4>
            <Link href="/contact">
                <button className="rounded-lg border-2 px-8 py-4 font-semibold hover:bg-success hover:text-white border-success text-success">Contact Now</button>
            </Link>
        </main>
    </div>
        ;
};

export default Whyme;
