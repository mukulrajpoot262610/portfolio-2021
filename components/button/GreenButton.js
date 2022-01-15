import React from 'react'

const GreenButton = ({ text }) => {
    return (
        <button className="rounded-lg border-2 px-8 py-4 font-semibold hover:bg-success hover:text-white border-success text-success">{text}</button>
    )
}

export default GreenButton
