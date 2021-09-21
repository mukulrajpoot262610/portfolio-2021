import React from 'react'
import Link from 'next/link'
import { GithubOutlined, LinkOutlined, EnvironmentOutlined } from '@ant-design/icons'

const ExCover = ({ data }) => {

    const { date, desc, name, location, post, id } = data;

    return (
        <div className="w-full border-1 mx-4 my-4 border-secondary-900 bg-frosted rounded-xl px-4">
            <div className="justify-between items-center mx-2 flex">
                <div className="flex my-6">
                    <span className="w-6 h-6 bg-red-500 rounded-full cursor-pointer"></span>
                    <span className="w-6 h-6 mx-2 bg-info rounded-full">
                    </span>
                    <span className="w-6 h-6 bg-success rounded-full"></span>
                </div>
                <h1 className="text-secondary-900 my-6">{date}</h1>
            </div>
            <hr />
            <h1 className="text-secondary-100 text-4xl mx-4 my-6">{name}</h1>
            <h2 className="text-secondary-900 text-xl mx-4 flex items-center"><EnvironmentOutlined />&nbsp;{location}</h2>
            <div className="flex flex-col md:flex">
                <p className="text-secondary-900 mx-4">{post}</p>
                <p className="text-secondary-900 text-3xl mx-4 cursor-pointer">
                    {desc}
                </p>
            </div>
        </div>
    )
}

export default ExCover
