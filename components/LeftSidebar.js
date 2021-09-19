import React from 'react'
import { GithubOutlined, TwitterOutlined, LinkedinOutlined, MailOutlined } from '@ant-design/icons'

const LeftSidebar = () => {
    return (
        <div className="fixed bottom-16 right-16">
            <h1 className="text-secondary-100 text-5xl hover:-translate-y-2 transition ease-in-out hover:text-success">
                <GithubOutlined />
            </h1>
            <h1 className="text-secondary-100 text-5xl hover:-translate-y-2 transition ease-in-out hover:text-success">
                <TwitterOutlined />
            </h1>
            <h1 className="text-secondary-100 text-5xl hover:-translate-y-2 transition ease-in-out hover:text-success">
                <LinkedinOutlined />
            </h1>
            <h1 className="text-secondary-100 text-5xl hover:-translate-y-2 transition ease-in-out hover:text-success">
                <MailOutlined />
            </h1>
        </div>
    )
}

export default LeftSidebar
