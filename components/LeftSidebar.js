import React from 'react'
import { GithubOutlined, TwitterOutlined, LinkedinOutlined, MailOutlined } from '@ant-design/icons'

const LeftSidebar = () => {
    return (
        <div className="fixed bottom-16 right-16">
            <a href="https://github.com/mukulrajpoot262610">
                <h1 className="text-secondary-100 text-5xl hover:-translate-y-2 transition ease-in-out hover:text-success">
                    <GithubOutlined />
                </h1>
            </a>
            <a href="https://twitter.com/MukulRa52680412">
                <h1 className="text-secondary-100 text-5xl hover:-translate-y-2 transition ease-in-out hover:text-success">
                    <TwitterOutlined />
                </h1>
            </a>
            <a href="https://www.linkedin.com/in/mukul-rajpoot-262610/">
                <h1 className="text-secondary-100 text-5xl hover:-translate-y-2 transition ease-in-out hover:text-success">
                    <LinkedinOutlined />
                </h1>
            </a>
            <a href="mailto: mukulrajpoot262610@gmail.com">
                <h1 className="text-secondary-100 text-5xl hover:-translate-y-2 transition ease-in-out hover:text-success">
                    <MailOutlined />
                </h1>
            </a>
        </div>
    )
}

export default LeftSidebar
