import React from 'react'

const Cover = ({ data }) => {

    const { name, tech, date, link, type, image } = data;

    return (
        <div className="w-100 h-100 border-1 mx-8 my-8 border-secondary-900 bg-frosted rounded-xl p-4">
            <div className="flex justify-between items-center m-2">
                <h1 className="text-secondary-900">{type}</h1>
                <div className="flex">
                    <span className="w-6 h-6 bg-success rounded-full"></span>
                    <span className="w-6 h-6 mx-2 bg-info rounded-full cursor-pointer"></span>
                    <span className="w-6 h-6 bg-red-500 rounded-full"></span>
                </div>
            </div>
            <hr />
            <h1 className="text-secondary-100 text-4xl mx-4 my-6">{name}</h1>
            <p className="text-secondary-900 mx-4 my-6">{date}</p>
            <img src={image} alt="" className="h-auto w-full rounded-2xl my-6" />
            <div className="flex flex-wrap justify-start items-center my-6">
                {
                    tech.map((e) => <img src={e.class} alt="" className="w-8 mx-2" />)
                }
            </div>
        </div>
    )
}

export default Cover
