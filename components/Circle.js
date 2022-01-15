import React from 'react'

const Circle = ({ text, image, link }) => {

    return (
        <a href={link}>
            <div className="mx-4 md:mx-8 my-4 border-secondary-900 border-2 w-40 p-8 md:w-52 md:h-52 rounded-lg flex flex-col justify-center items-center hover:border-info">
                <img src={image} alt="" className="w-16 h-16 object-contain md:w-40" />
                <h1 className="text-2xl mb-0 text-center text-secondary-100 uppercase mt-4">{text}</h1>
            </div>
        </a>
    )
}

export default Circle
