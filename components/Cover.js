import React from 'react'
import Link from 'next/link'
import { GithubOutlined, LinkOutlined } from '@ant-design/icons'

const Cover = ({ data, handleClose }) => {

    const { id, name, desc, github, tech, date, link, type, image } = data;

    return (
        <div className="w-100 h-100 border-1 mx-4 my-4 border-secondary-900 bg-frosted rounded-xl px-4">
            <div className="justify-between items-center mx-2 flex">
                <div className="flex my-6">
                    <span className="w-6 h-6 bg-red-500 rounded-full cursor-pointer" onClick={() => handleClose(id)} ></span>
                    <span className="w-6 h-6 mx-2 bg-info rounded-full">
                    </span>
                    <span className="w-6 h-6 bg-success rounded-full"></span>
                </div>
                <h1 className="text-secondary-900 my-6">{type}</h1>
            </div>
            <hr />
            <h1 className="text-secondary-100 text-4xl mx-4 my-6">{name}</h1>
            <div className="flex items-center justify-between">
                <p className="text-secondary-900 mx-4">{date}</p>
                <div className="flex">
                    <p className="text-secondary-900 text-3xl mx-4 cursor-pointer">
                        {
                            link && <a href={link} target="_blank">
                                <LinkOutlined />
                            </a>
                        }

                    </p>
                    <p className="text-secondary-900 text-3xl mx-4 cursor-pointer">
                        {
                            github && <a href={github} target="_blank">
                                <GithubOutlined />
                            </a>
                        }

                    </p>
                </div>
            </div>
            <img src={image} alt="" className="h-auto w-full rounded-2xl my-6" />
            <div className="flex flex-wrap justify-start items-center my-6">
                {
                    tech.map((e, i) => <img src={e.class} key={i} alt="" className="w-8 mx-2" />)
                }
            </div>
        </div>
    )
}

export default Cover
