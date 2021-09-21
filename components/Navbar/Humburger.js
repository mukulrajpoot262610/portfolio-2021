import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Link from 'next/link'
import { GithubOutlined, TwitterOutlined, LinkedinOutlined, MailOutlined } from '@ant-design/icons'

import {
    staggerReveal,
    staggerRevealClose
} from "./Animations";

const Humburger = ({ state, setState }) => {

    // Create varibles of our dom nodes
    let menuLayer = useRef(null);
    let reveal1 = useRef(null);
    let reveal2 = useRef(null);
    let reveal3 = useRef(null);

    useEffect(() => {
        if (state.clicked === false) {
            staggerRevealClose(reveal3, reveal2, reveal1);
            gsap.to(menuLayer, { duration: 1.5, css: { display: "none" } });
        } else if (
            state.clicked === true ||
            (state.clicked === true && state.initial === null)
        ) {
            gsap.to(menuLayer, { duration: 0, css: { display: "block" } });
            gsap.to([reveal1, reveal2, reveal3], {
                duration: 0,
                opacity: 1,
                height: "100%"
            });
            staggerReveal(reveal1, reveal2, reveal3);
        }
    }, [state]);


    return (
        <div className="hidden fixed top-0 h-screen w-full z-40" ref={el => (menuLayer = el)}>
            <div
                ref={el => (reveal1 = el)}
                className='fixed bg-info z-10 h-full w-full'></div>
            <div
                ref={el => (reveal2 = el)}
                className='fixed bg-success z-10 h-full w-full'></div>
            <div
                ref={el => (reveal3 = el)}
                className='relative z-10 bg-primary h-full w-full flex justify-center items-center overflow-hidden'>
                <div className="flex flex-col items-center h-full justify-between w-full p-12 lg:flex-row ">
                    <ul className="w-full h-1/2 flex flex-col justify-center items-center">
                        <li>
                            <Link href='/work'>
                                <h1 className="text-secondary-100 text-7xl lg:text-9xl font-bold hover:text-success cursor-pointer">
                                    Work
                                </h1>
                            </Link>
                        </li>
                        <li>
                            <Link href='/about'>
                                <h1 className="text-secondary-100 text-7xl lg:text-9xl hover:text-success font-bold cursor-pointer">About</h1>
                            </Link>
                        </li>
                        <li>
                            <Link href='/contact'>
                                <h1 className="text-secondary-100 text-7xl lg:text-9xl hover:text-success font-bold cursor-pointer">Contact</h1>
                            </Link>
                        </li>
                    </ul>
                    <div className="w-full h-1/2 flex flex-col justify-center items-center">
                        <h3 className="text-5xl lg:text-7xl text-secondary-100">Social Links</h3>
                        <div className="flex">
                            <a href="https://www.linkedin.com/in/mukul-rajpoot-262610/" target="_blan">
                                <h1 className="text-secondary-100 text-6xl mx-4 hover:text-success">
                                    <LinkedinOutlined />
                                </h1>
                            </a>
                            <a href="https://github.com/mukulrajpoot262610" target="_blan">
                                <h1 className="text-secondary-100 text-6xl mx-4  hover:text-success">
                                    <GithubOutlined />
                                </h1>
                            </a>
                            <a href={"mailto: mukulrajpoot262610@gmail.com"}>
                                <h1 className="text-secondary-100 text-6xl mx-4  hover:text-success">
                                    <MailOutlined />
                                </h1>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Humburger
