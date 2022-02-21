import React from 'react';
import { GithubOutlined } from '@ant-design/icons'
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
    return <div className="relative min-h-screen flex flex-col items-center justify-center lg:mb-32">
        <main className="container px-20 lg:px-56">
            <h3
                className="text-success md:text-4xl"
                data-aos="fade-in"
            >
                👋 Hi, I am
            </h3>
            <h1
                className="text-secondary-100 text-9xl tracking-tighter md:text-9xl font-bold"
            >Mukul Rajpoot</h1>

            <h1 className="text-secondary-900 text-4xl md:text-7xl">I speak in <span className="text-info">&lt;code /&gt;</span> so you don't have to</h1>
            <p className="text-secondary-900 text-3xl md:text-4xl max-w-6xl" data-aos="fade-in" data-aos-delay={1500}>I'm a <span className="font-bold">Full-Stack Developer</span> based in Barielly, India specializing in building exceptional digital experiences. I enjoy using my skill-set to empower people to accomplish their goals.</p>
            <div className='flex items-center'>
                <Link href="/contact">
                    <button className="rounded-lg border-2 px-8 py-4 font-medium my-4 border-success text-success hover:bg-success hover:text-white">Contact Now</button>
                </Link>
                <a href="https://github.com/mukulrajpoot262610" target="_blank">
                    <button data-aos="fade-in" className="rounded-lg font-semibold border-2 px-8 py-4 my-4 mx-4 flex items-center justify-between border-normal hover:text-white text-normal hover:bg-normal">
                        <GithubOutlined />
                        <span className="mx-2">GitHub</span>
                    </button>
                </a>
            </div>
        </main>
    </div>
};

export default Header;
