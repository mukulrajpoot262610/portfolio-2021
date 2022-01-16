import React from 'react'
import { GithubOutlined, TwitterOutlined, LinkedinOutlined, MailOutlined } from '@ant-design/icons'

const LeftSidebar = () => {
    return (
        <div className="fixed bottom-16 right-16">
            <a target="_blank" href="https://github.com/mukulrajpoot262610">
                <h1 className="text-secondary-100 text-5xl hover:-translate-y-2 transition ease-in-out hover:text-success hover:animate-bounce">
                    <GithubOutlined />
                </h1>
            </a>
            <a target="_blank" href="https://twitter.com/MukulRa52680412">
                <h1 className="text-secondary-100 text-5xl hover:-translate-y-2 transition ease-in-out hover:text-normal hover:animate-bounce">
                    <TwitterOutlined />
                </h1>
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/mukul-rajpoot-262610/">
                <h1 className="text-secondary-100 text-5xl hover:-translate-y-2 transition ease-in-out hover:text-info hover:animate-bounce">
                    <LinkedinOutlined />
                </h1>
            </a>
            <a target="_blank" href="mailto: mukulrajpoot262610@gmail.com">
                <h1 className="text-secondary-100 text-5xl hover:-translate-y-2 transition ease-in-out hover:text-danger hover:animate-bounce">
                    <MailOutlined />
                </h1>
            </a>
        </div>
    )
}

export default LeftSidebar
