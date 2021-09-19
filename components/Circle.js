import React from 'react'

const Circle = ({ data }) => {

    const { name, image } = data

    return (
        <div className=" mx-4 md:mx-8 my-4 border-success border-2 w-36 h-36 md:w-52 md:h-52 rounded-full flex flex-col justify-center items-center">
            <img src={image} alt="" className="w-12 md:w-20" />
            <h1 className="text-2xl text-secondary-100">{name}</h1>
        </div>
    )
}

export default Circle
