import React from 'react'
import { GithubOutlined, LinkOutlined } from '@ant-design/icons'

const WorkCover = ({ data }) => {

    const { id, name, github, tech, link } = data;

    return (
        <div className="w-full border-1 mx-4 my-4 border-secondary-900 bg-frosted rounded-xl px-4">
            <div className="justify-between items-center mx-2 flex">
                <div className="flex my-6">
                    <span className="w-6 h-6 bg-red-500 rounded-full cursor-pointer"></span>
                    <span className="w-6 h-6 mx-2 bg-info rounded-full">
                    </span>
                    <span className="w-6 h-6 bg-success rounded-full"></span>
                </div>
                <div className="flex my-6">
                    <p className="text-secondary-900 my-0 text-3xl mx-4 cursor-pointer">
                        {
                            link && <a href={link} target="_blank">
                                <LinkOutlined />
                            </a>
                        }

                    </p>
                    <p className="text-secondary-900 my-0 text-3xl mx-4 cursor-pointer">
                        {
                            github && <a href={github} target="_blank">
                                <GithubOutlined />
                            </a>
                        }

                    </p>
                </div>
            </div>
            <hr />
            <h1 className="text-secondary-100 text-4xl mx-4 my-6">{name}</h1>
            <div className="flex md:flex my-6">
                {
                    tech.map((e) => <h1 className="text-secondary-900 mx-4">{e}</h1>)
                }
            </div>
        </div>
    )
}

export default WorkCover
