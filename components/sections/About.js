import React from 'react';
import { DownloadOutlined } from '@ant-design/icons'
import Link from 'next/link';


const About = () => {
    return <div className="relative min-h-screen flex flex-col items-center justify-center lg:mb-32">
        <div className="hidden h-1/4 container relative w-full md:flex justify-center items-center">
            <h1 data-aos="fade-right" className="absolute bottom-0 text-transparent" style={{ WebkitTextStrokeWidth: '.5px', WebkitTextStrokeColor: 'var(--main-yellow)', fontSize: '15rem', zIndex: '-1' }}>&lt;About /&gt; </h1>
            <h1 data-aos="fade-left" className="text-secondary-100 font-extrabold" style={{ fontSize: '10rem' }} >Mukul Rajpoot</h1>
        </div>
        <main className="container px-20 lg:px-56">
            <h3 className="text-success md:text-4xl" data-aos="fade-in">About Me</h3>
            <h3 className="text-secondary-900 text-3xl md:text-4xl max-w-6xl my-8" data-aos="fade-in">I am a Full-Stack creative developer based in Barielly, India. I am a <span>Computer Science</span> undergraduate from Chandigarh University and also did some coursework in Designing and Visual Arts.</h3>
            <h4 className="text-secondary-900 text-3xl md:text-4xl max-w-6xl my-8" data-aos="fade-in">I enjoy using my skill-set to empower people to accomplish their goals. My development stack is focused on performance & accessibility with delightful interactions. I create lighting fast WebApps and Websites using <span className="font-bold text-success">MERN</span> Stack with the help of NextJS.
            </h4>
            <h3 className="text-success md:text-3xl mt-6" data-aos="fade-in">Want to know more?</h3>
            <div className='flex'>
                <Link href="/about">
                    <button className="rounded-lg border-2 px-8 py-4 font-semibold hover:bg-success hover:text-white border-success text-success">Know More</button>
                </Link>
                {/* <a href="/assets/resume.pdf" target="_blank">
                    <button data-aos="fade-in" className="rounded-lg border-2 px-8 py-4 mx-4 flex items-center justify-between font-semibold hover:bg-info hover:text-white border-info text-info">
                        <DownloadOutlined /> &nbsp;
                        Download Resume</button>
                </a> */}
            </div>
        </main>
    </div>;
};

export default About;
