import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Circle from '../components/Circle'
import SKILL_DATA from '../components/skill.data'

const About = () => {
    return (
        <div className="min-h-screen px-3">

            <Head>
                <title>About - Mukul Rajpoot</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="min-h-screen flex flex-col items-center justify-center">
                <div className="hidden h-1/4 container relative w-full md:flex justify-center items-center">
                    <h1 data-aos="fade-right" className="absolute bottom-0 text-transparent" style={{ WebkitTextStrokeWidth: '.5px', WebkitTextStrokeColor: 'var(--main-yellow)', fontSize: '15rem', zIndex: '-1' }}>&lt;About /&gt; </h1>
                    <h1 data-aos="fade-left" className="text-secondary-100 font-extrabold" style={{ fontSize: '10rem' }} >Mukul Rajpoot</h1>
                </div>
                <main className="container px-20 lg:px-56">
                    <h3 className="text-success md:text-4xl" data-aos="fade-in">About Me</h3>
                    <h3 className="text-secondary-900 text-3xl md:text-4xl max-w-6xl my-8">I am a front-end creative developer based in Barielly, India. I am a <span>Computer Science</span> undergraduate from Chandigarh University and also did some coursework in Designing and Visual Arts.</h3>
                    <h4 className="text-secondary-900 text-3xl md:text-4xl max-w-6xl my-8"> I enjoy using my skill-set to empower people to accomplish their goals. My development stack is focused on performance & accessibility with delightful interactions. I create lighting fast WebApps and Websites using <span className="font-bold text-success">MERN</span> Stack with the help of NextJS.
                    </h4>
                </main>
            </div>

            <div className="min-h-screen flex flex-col items-center justify-center">
                <div className="hidden h-1/4 container relative w-full md:flex justify-center items-center">
                    <h1 data-aos="fade-right" className="absolute bottom-0 text-transparent" style={{ WebkitTextStrokeWidth: '.5px', WebkitTextStrokeColor: 'var(--main-yellow)', fontSize: '15rem', zIndex: '-1' }}>&lt;toolbox /&gt; </h1>
                    <h1 data-aos="fade-left" className="text-secondary-100 font-extrabold" style={{ fontSize: '10rem' }} >My Weapons ⚔</h1>
                </div>
                <main className="container px-20 lg:px-56">
                    <h3 className="text-success md:text-4xl">Technologies that I use</h3>
                    <div className="flex flex-wrap justify-center items-center">
                        {
                            SKILL_DATA.map((e) => <Circle data={e} key={e.id} />)
                        }
                    </div>
                </main>
            </div>

            <div className="h-screen flex flex-col items-center justify-center">
                <div className="hidden h-1/4 container relative w-full md:flex justify-center items-center">
                    <h1 data-aos="fade-right" className="absolute bottom-0 text-transparent" style={{ WebkitTextStrokeWidth: '.5px', WebkitTextStrokeColor: 'var(--main-yellow)', fontSize: '15rem', zIndex: '-1' }}>&lt;About /&gt; </h1>
                    <h1 data-aos="fade-left" className="text-secondary-100 font-extrabold" style={{ fontSize: '10rem' }} >Why Me? </h1>
                </div>
                <main className="container px-20 lg:px-56">
                    <h3 className="text-success md:text-4xl">About Me</h3>
                    <h3 className="text-secondary-900 text-3xl md:text-4xl max-w-6xl my-8">There’s nothing I enjoy more than developing good websites and webApps for Cool people. I believe that people should do things they are good at or in which their <span className="text-success">Hearts ❤</span> lie. That's why I choose freelance web development as my career.</h3>
                    <h3 className="text-secondary-900 text-3xl md:text-4xl max-w-6xl my-8">I’ve spent many years trying to perfect what I do and while I’ll never be perfect, I do my best to come close.</h3>
                    <h4 className="text-secondary-100 font-light text-4xl md:text-5xl max-w-6xl my-8"> If you’ve got a project you’d like to work on with me just get in touch and we can get to work!
                    </h4>
                    <Link href="/contact">
                        <button className="rounded-lg border-2 px-8 py-4 my-4 border-success text-success">Contact Now</button>
                    </Link>
                </main>
            </div>

        </div>
    )
}

export default About
