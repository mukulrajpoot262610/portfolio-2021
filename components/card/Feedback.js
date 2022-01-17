import { Rate } from 'antd'
import Image from 'next/image'
import React from 'react'

const Feedback = ({ text, user, file }) => {
    return (
        <div className="mx-4 my-4 border-secondary-900 border-2 p-8 rounded-lg flex flex-col hover:border-info">
            <Rate disabled />
            {
                text && <h1 className="text-3xl my-2 text-secondary-100">{text}</h1>
            }
            <h1 className='self-end uppercase text-secondary-900'>~ {user}</h1>
        </div>
    )
}

export default Feedback
