import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <nav className="fixed z-50 h-32 top-0 w-full flex items-center justify-around transition ease-in-out backdrop-blur-md">
            <Link href="/">
                <h1 className="text-secondary-100 font-extrabold text-6xl cursor-pointer m-0">MR</h1>
            </Link>
            <a href='https://mukulrajpoot.com/' rel='noreferrer' target="_blank">
                <button className="p-3 rounded-lg px-6 border-2 border-white text-secondary-100 font-normal text-xl hover:bg-white hover:text-primary">Visit My Website</button>
            </a>
        </nav>
    )
}

export default Navbar