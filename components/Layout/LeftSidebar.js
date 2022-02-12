import React from 'react'

const LeftSidebar = () => {
    return (
        <div className="fixed bottom-16 right-16">
            <a target="_blank" href="https://github.com/mukulrajpoot262610" rel='noreferrer' >
                <h1 className="text-secondary-100 text-5xl hover:-translate-y-2 transition ease-in-out hover:text-success hover:animate-bounce">
                    <i className="fa-brands fa-github"></i>
                </h1>
            </a>
            <a target="_blank" href="https://twitter.com/MukulRa52680412" rel='noreferrer'>
                <h1 className="text-secondary-100 text-5xl hover:-translate-y-2 transition ease-in-out hover:text-normal hover:animate-bounce">
                    <i className="fa-brands fa-twitter"></i>
                </h1>
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/mukul-rajpoot-262610/" rel='noreferrer'>
                <h1 className="text-secondary-100 text-5xl hover:-translate-y-2 transition ease-in-out hover:text-info hover:animate-bounce">
                    <i className="fa-brands fa-linkedin-in"></i>
                </h1>
            </a>
            <a target="_blank" href="mailto: mukulrajpoot262610@gmail.com" rel='noreferrer'>
                <h1 className="text-secondary-100 text-5xl hover:-translate-y-2 transition ease-in-out hover:text-danger hover:animate-bounce">
                    <i className="fa-solid fa-envelope"></i>
                </h1>
            </a>
        </div>
    )
}

export default LeftSidebar
