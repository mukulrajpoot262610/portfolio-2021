import React, { useEffect, useState } from 'react'
import Humburger from './Humburger'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image'

const Navbar = () => {
    const router = useRouter()
    const [state, setState] = useState({
        initial: false,
        clicked: false,
        menuName: "Menu",
    });
    const [disabled, setDisabled] = useState(false);

    useEffect(() => {
        const handleRouteChange = () => {
            setState({ clicked: false, menuName: "Menu" })
        }
        router.events.on('routeChangeStart', handleRouteChange)
        return () => {
            router.events.off('routeChangeStart', handleRouteChange)
        }
    }, [])

    const handleMenu = () => {
        disableMenu();
        if (state.initial === false) {
            setState({
                initial: null,
                clicked: true,
                menuName: "Close",
            });
        } else if (state.clicked === true) {
            setState({
                clicked: !state.clicked,
                menuName: "Menu",
            });
        } else if (state.clicked === false) {
            setState({
                clicked: !state.clicked,
                menuName: "Close",
            });
        }
    };

    const disableMenu = () => {
        setDisabled(!disabled);
        setTimeout(() => {
            setDisabled(false);
        }, 1200);
    };

    return (
        <>
            <nav className="fixed top-0 z-50 h-32 w-full flex items-center justify-around transition ease-in-out backdrop-blur-md">
                <Link href="/">
                    <Image src="/logo.svg" height={50} width={100} alt="" />
                </Link>
                <button disabled={disabled} onClick={handleMenu} className="text-secondary-100 text-3xl rounded-lg border-2 px-8 py-2 my-4 border-secondary hover:border-info hover:text-info" >
                    {state.menuName}
                </button>
            </nav>
            <Humburger state={state} setState={setState} />
        </>
    )
}

export default Navbar
