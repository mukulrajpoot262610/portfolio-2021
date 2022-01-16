import React from 'react'
import { GithubOutlined, LinkOutlined } from '@ant-design/icons'
import Link from 'next/link';
import Image from 'next/image';

const Cover = ({ data, handleClose }) => {

    const { id, name, github, tech, date, link, type, image, category, completed } = data;

    return (
        <Link href={`/projects/${id}`}>
            <div className="w-100 border-1 mx-4 my-4 cursor-pointer border-secondary-900 bg-frosted rounded-xl px-4 hover:border-success hover:animate-pulse">
                <div className="justify-between items-center mx-2 flex">
                    <div className="flex my-6">
                        <span className="w-6 h-6 bg-red-500 rounded-full cursor-pointer" onClick={() => handleClose(id)} ></span>
                        <span className="w-6 h-6 mx-2 bg-info rounded-full">
                        </span>
                        <span className="w-6 h-6 bg-success rounded-full"></span>
                    </div>
                    <h1 className="text-secondary-900 my-6">{category}</h1>
                </div>
                <hr />
                {
                    link ? (
                        <a href={link} target="_blank">
                            <h1 className="text-secondary-100 text-4xl m-4 mt-6">{name}</h1>
                        </a>
                    ) : (
                        <h1 className="text-secondary-100 text-4xl m-4 my-6">{name}</h1>
                    )
                }
                <h1 className="text-secondary-900 text-xl mx-4">{completed ? "Completed" : "Currently Working on"}</h1>
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
                <Image src={image} alt="" height={200} width={330} className="h-auto object-cover w-full rounded-2xl" alt={name} />
                <div className="flex justify-between items-center my-6 mx-4">
                    <a href={github} target='_blank' className="font-semibold text-2xl">GitHub 🤜</a>
                    <a href={link} target="_blank" className="font-semibold text-2xl">Visit 🤜</a>
                </div>
            </div>
        </Link>
    )
}

export default Cover
