const PROJECTS_DATA = [
    {
        id: 1,
        name: 'Ethereum Transfer Dapp',
        desc: 'Ethereum Transfer is a decentralised application built on ethereum blockchain.It let people to transfer etheruem peer to peer without need of any middle man like Banks. This is my first project in the WEB 3.0 space, I\'m still learning all the exciting WEB 3.0 Technologies.',
        image: 'https://res.cloudinary.com/mukulrajpoot/image/upload/v1642315800/portfolio/Untitled_design_noivyf.png',
        tech: [{ image: '/icons/nextjs.svg', name: 'Next.js' }, { image: '/icons/tailwind.svg', name: 'Tailwind' }, { image: '/icons/ethers.svg', name: 'Ethers.js' }, { image: '/icons/vercel.svg', name: 'Vercel' }],
        date: '2022',
        link: 'https://eth-transfer-dapp.vercel.app/',
        github: 'https://github.com/mukulrajpoot262610/eth-transfer-dapp',
        type: 'WebApp',
        category: 'Personal'
    },
    {
        id: 2,
        name: 'Worthpad DeFi',
        desc: 'Worthpad is an innovative, decentralized, multi-chain DeFi platform that makes investing in DeFi and crypto projects easy and accessible for the masses. Worthpad empowers high growth potential crypto projects with the ability to raise liquidity in a fair manner while also developing dedicated communities behind them.Worthpad platform comprises of six building blocks – Worth IDO Launchpad, Worth DVC Fund, Worth Smart Contract Foundry, Worth DEX, and Worth Insurance Treasury.Worth IDO Launchpad is a decentralized accelerator and incubation platform that connects early stage innovators and projects with $WORTH investors.We will provide $WORTH holders early access and guaranteed allocation to seed rounds, presales and private sales of top tier crypto projects incubated and accelerated on the Worth IDO Launchpad.',
        image: 'https://res.cloudinary.com/mukulrajpoot/image/upload/v1642316263/portfolio/Untitled_design_1_ognszz.png',
        tech: [{ image: '/icons/nextjs.svg', name: 'Next.js' }, { image: '/icons/tailwind.svg', name: 'Tailwind' }, { image: '/icons/ethers.svg', name: 'Ethers.js' }, { image: '/icons/vercel.svg', name: 'Vercel' }],
        date: '2021',
        link: 'https://worthpad.org/',
        github: 'NA',
        type: 'WebApp',
        category: 'Freelance',
        review: '5',
        feedback: 'Mukul has done excellent work. Client was extremely happy with quality of deliverables. Looking to buy his services for more projects.',
        client: 'fiverr buyer'
    },
    {
        id: 3,
        name: 'Subira 2.0 - DocSigner',
        desc: 'Based in Atlantic Canada, Subira was set up to help its customers improve and accelerate their business processes by delivering documents digitally. With our tools customers can sign legally binding documents online and deliver them faster. From firsthand experience, we know that dealing with manual files can be tedious and time-consuming, therefore, we add value by helping customers eliminate manual legacy and paper-based agreement processes which are slow, expensive, and error-prone. We aim to journey with our users from their early engagements in their business process to the point when the agreements are formalized.',
        image: 'https://res.cloudinary.com/mukulrajpoot/image/upload/v1642316709/portfolio/smartmockups-ky48sky2-1194x896_iidnan.jpg',
        tech: [{ image: '/icons/react.svg', name: 'React.js' }, { image: '/icons/tailwind.svg', name: 'Tailwind' }, { image: '/icons/redux.svg', name: 'Redux' }],
        date: '2021',
        link: 'https://app.subirapro.com/',
        github: 'NA',
        type: 'WebApp',
        category: 'Intership'
    },
    {
        id: 4,
        name: 'Adidas Online Store',
        desc: 'adidas designs for and with athletes of all kinds. Creators, who love to change the game. Challenge conventions. Break the rules and define new ones. Then break them again. We supply teams and individuals with athletic clothing pre-match. To stay focussed. We design sports apparel that get you to the finish line. To win the match. We support women, with bras and tights made for purpose. From low to high support. Maximum comfort. We design, innovate and itterate. Testing new technologies in action. On the pitch, the tracks, the court, the pool. Retro workout clothes inspire new streetwear essentials. Like NMD, Ozweego and our Firebird tracksuits. Classic sports models are brought back to life. Like Stan Smith. And Superstar. Now seen on the streets and the stages.',
        image: 'https://res.cloudinary.com/mukulrajpoot/image/upload/v1640495655/portfolio/Untitled_design_2_malm4g.png',
        tech: [{ image: '/icons/nextjs.svg', name: 'Next.js' }, { image: '/icons/tailwind.svg', name: 'Tailwind' }, { image: '/icons/redux.svg', name: 'Redux' }, { image: '/icons/nodejs.svg', name: 'Node' }, { image: '/icons/expressjs.svg', name: 'Express' }, { image: '/icons/mongodb.svg', name: 'MongoDB' },],
        date: '2022',
        link: 'https://adidas-clone.vercel.app/',
        github: 'https://github.com/mukulrajpoot262610/adidas-clone',
        type: 'WebApp',
        category: 'Personal'
    },
    {
        id: 5,
        name: 'Dev Community Clone',
        desc: 'DEV is a community of software developers getting together to help one another out. The software industry relies on collaboration and networked learning. We provide a place for that to happen.DEV is built on Forem: open source software designed to empower communities.Because our application is open source, you can inspect every little detail of the code, or chip in yourself! Forem is available for anyone interested in creating similar communities in any niche or passion.Visit our meta Forem, forem.dev for more information.We believe in transparency and adding value to the ecosystem.We hope you enjoy poking around and participating!',
        image: 'https://res.cloudinary.com/mukulrajpoot/image/upload/v1632318796/portfolio/1_r6odw9.jpg',
        tech: [{ image: '/icons/react.svg', name: 'React.js' }, { image: '/icons/styled.svg', name: 'Styled' }, { image: '/icons/redux.svg', name: 'Redux' }, { image: '/icons/nodejs.svg', name: 'Node' }, { image: '/icons/expressjs.svg', name: 'Express' }, { image: '/icons/firebase.svg', name: 'Firebase' }, { image: '/icons/mongodb.svg', name: 'MongoDB' },],
        date: '2021',
        link: 'http://blog-website-mr.herokuapp.com/',
        github: 'https://github.com/mukulrajpoot262610/Blog-website',
        type: 'WebApp',
        category: 'Personal'
    },
    {
        id: 6,
        name: 'GitHub Profiler',
        desc: 'DEV is a community of software developers getting together to help one another out. The software industry relies on collaboration and networked learning. We provide a place for that to happen.DEV is built on Forem: open source software designed to empower communities.Because our application is open source, you can inspect every little detail of the code, or chip in yourself! Forem is available for anyone interested in creating similar communities in any niche or passion.Visit our meta Forem, forem.dev for more information.We believe in transparency and adding value to the ecosystem.We hope you enjoy poking around and participating!',
        image: 'https://res.cloudinary.com/mukulrajpoot/image/upload/v1637670521/portfolio/Untitled_design_1_xox2jt.png',
        tech: [{ image: '/icons/nextjs.svg', name: 'Next.js' }, { image: '/icons/tailwind.svg', name: 'tailwind' }, { image: '/icons/github.svg', name: 'Github' }, { image: '/icons/vercel.svg', name: 'vercel' },],
        date: '2021',
        link: 'https://dev-profiler.vercel.app/',
        github: 'https://github.com/mukulrajpoot262610/github_profiler',
        type: 'WebApp',
        category: 'Personal'
    },
    {
        id: 7,
        name: 'Firebase Authentication',
        desc: 'DEV is a community of software developers getting together to help one another out. The software industry relies on collaboration and networked learning. We provide a place for that to happen.DEV is built on Forem: open source software designed to empower communities.Because our application is open source, you can inspect every little detail of the code, or chip in yourself! Forem is available for anyone interested in creating similar communities in any niche or passion.Visit our meta Forem, forem.dev for more information.We believe in transparency and adding value to the ecosystem.We hope you enjoy poking around and participating!',
        image: 'https://res.cloudinary.com/mukulrajpoot/image/upload/v1642320058/portfolio/Untitled_design_2_bp4lqq.png',
        tech: [{ image: '/icons/nextjs.svg', name: 'Next.js' }, { image: '/icons/tailwind.svg', name: 'tailwind' }, { image: '/icons/firebase.svg', name: 'Firebase' }, { image: '/icons/vercel.svg', name: 'vercel' }, { image: '/icons/mongodb.svg', name: 'MongoDB' },],
        date: '2021',
        link: 'https://fireabse-auth.vercel.app/',
        github: 'https://github.com/mukulrajpoot262610/dev-case-app',
        type: 'WebApp',
        category: 'Personal'
    },
]

export default PROJECTS_DATA
