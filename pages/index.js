import Head from 'next/head'
import Link from 'next/link';
import { useState } from 'react';
import { Steps } from 'antd';
import Cover from '../components/Cover';
import PROJECTS_DATA from '../components/projects.data';
import { GithubOutlined, TwitterOutlined, LinkedinOutlined, MailOutlined } from '@ant-design/icons'
import ExCover from '../components/ExCover';
import EXP_DATA from '../components/experience.data';

export default function Home() {

  const { Step } = Steps;

  const [data, setData] = useState(PROJECTS_DATA)

  const handleClose = (id) => {
    const newData = data.filter((e) => e.id !== id)
    setData(newData)
  }

  const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

  return (
    <div className="min-h-screen px-3 overflow-hidden">

      <Head>
        <title>Mukul Rajpoot</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="h-screen flex flex-col items-center justify-center">
        <main className="container px-20 lg:px-56">
          <h3
            className="text-success md:text-4xl"
            data-aos="fade-in"
          >
            👋 Hi, I am
          </h3>
          <h1
            className="text-secondary-100 text-9xl md:text-9xl font-bold"
            data-aos="fade-in"
            data-aos-delay={500}
          >Mukul Rajpoot</h1>
          <h1 className="text-secondary-900 text-4xl md:text-8xl" data-aos="fade-in" data-aos-delay={1000}>I speak in <span className="text-info">&lt;code /&gt;</span> so you don't have to</h1>
          <p className="text-secondary-900 text-3xl md:text-4xl max-w-6xl" data-aos="fade-in" data-aos-delay={1500}>I’m a <span className="font-bold">Front-End Developer</span> based in Barielly, India specializing in building exceptional digital experiences. I enjoy using my skill-set to empower people to accomplish their goals.</p>
          <Link href="/contact">
            <button className="rounded-lg border-2 px-8 py-4 my-4 border-success text-success" data-aos="fade-in" data-aos-delay={2000}>Contact Now</button>
          </Link>
        </main>
      </div>

      <div className="min-h-screen flex flex-col items-center justify-center">
        <div className="hidden h-1/4 container relative w-full md:flex justify-center items-center">
          <h1 data-aos="fade-right" className="absolute bottom-0 text-transparent" style={{ WebkitTextStrokeWidth: '.5px', WebkitTextStrokeColor: 'var(--main-yellow)', fontSize: '15rem', zIndex: '-1' }}>&lt;About /&gt; </h1>
          <h1 data-aos="fade-left" className="text-secondary-100 font-extrabold" style={{ fontSize: '10rem' }} >Mukul Rajpoot</h1>
        </div>
        <main className="container px-20 lg:px-56">
          <h3 className="text-success md:text-4xl" data-aos="fade-in">About Me</h3>
          <h3 className="text-secondary-900 text-3xl md:text-4xl max-w-6xl my-8" data-aos="fade-in">I am a Front-end creative developer based in Barielly, India. I am a <span>Computer Science</span> undergraduate from Chandigarh University and also did some coursework in Designing and Visual Arts.</h3>
          <h4 className="text-secondary-900 text-3xl md:text-4xl max-w-6xl my-8" data-aos="fade-in">I enjoy using my skill-set to empower people to accomplish their goals. My development stack is focused on performance & accessibility with delightful interactions. I create lighting fast WebApps and Websites using <span className="font-bold text-success">MERN</span> Stack with the help of NextJS.
          </h4>
          <Link href="/about">
            <button data-aos="fade-in" className="rounded-lg border-2 px-8 py-4 my-4 border-success text-success">Learn More</button>
          </Link>
        </main>
      </div>

      <div className="min-h-screen flex flex-col items-center justify-center">
        <div className="hidden h-1/4 container relative w-full md:flex justify-center items-center">
          <h1 data-aos="fade-right" className="absolute bottom-0 text-transparent" style={{ WebkitTextStrokeWidth: '.5px', WebkitTextStrokeColor: 'var(--main-yellow)', fontSize: '15rem', zIndex: '-1' }}>&lt;Work /&gt; </h1>
          <h1 data-aos="fade-left" className="text-secondary-100 font-extrabold" style={{ fontSize: '10rem' }} >Experience</h1>
        </div>
        <main className="container px-10 lg:px-56">
          <h3 className="text-success md:text-4xl" data-aos="fade-in">Where I've Worked <span className="text-xl text-secondary-900">( Selected )</span></h3>
          <div className="flex flex-wrap items-center justify-center my-12 transition ease-in-out">
            {
              EXP_DATA.map((e) => <ExCover data={e} key={e.id} />)
            }
          </div>
        </main>
      </div>

      <div className="min-h-screen flex flex-col items-center justify-center my-64">
        <div className="hidden h-1/4 container relative w-full md:flex justify-center items-center">
          <h1 data-aos="fade-right" className="absolute bottom-0 text-transparent" style={{ WebkitTextStrokeWidth: '.5px', WebkitTextStrokeColor: 'var(--main-yellow)', fontSize: '15rem', zIndex: '-1' }}>&lt;Work /&gt; </h1>
          <h1 data-aos="fade-left" className="text-secondary-100 font-extrabold" style={{ fontSize: '10rem' }} >Featured Projects</h1>
        </div>
        <main className="container px-20 lg:px-56 flex flex-col items-center justify-center">
          <h3 className="text-success md:text-4xl self-start">Some Selected Projects</h3>
          <div className="flex flex-wrap items-center justify-center my-12 transition ease-in-out">
            {
              data.length === 0 ? (
                <div className="flex flex-col justify-center items-center">
                  <img src="/noData.svg" alt="" className="w-1/2 h-auto my-12" />
                  <h3 className="text-success md:text-4xl" data-aos="fade-in">No Projects Opened</h3>
                </div>
              ) : data.map((e) => <Cover data={e} key={e.id} handleClose={handleClose} />)
            }
          </div>
          {
            data.length === 0 && <button className="rounded-lg border-2 px-8 py-4 my-4 border-info text-info self-center" onClick={() => setData(PROJECTS_DATA)}>Load All Again</button>
          }
          {
            data.length !== 0 && <Link href="/work"><button className="rounded-lg border-2 px-8 py-4 my-4 border-success text-success self-center">View More</button></Link>
          }
        </main>
      </div>

      <div className="h-screen flex flex-col items-center justify-center">
        <div className="hidden h-1/4 container relative w-full md:flex justify-center items-center">
          <h1 data-aos="fade-right" className="absolute bottom-0 text-transparent" style={{ WebkitTextStrokeWidth: '.5px', WebkitTextStrokeColor: 'var(--main-yellow)', fontSize: '15rem', zIndex: '-1' }}>&lt;About /&gt; </h1>
          <h1 data-aos="fade-left" className="text-secondary-100 font-extrabold" style={{ fontSize: '10rem' }} >Why Me? </h1>
        </div>
        <main className="container px-20 lg:px-56">
          <h3 className="text-success md:text-4xl">Why Me?</h3>
          <h3 className="text-secondary-900 text-3xl md:text-4xl max-w-6xl my-8">There’s nothing I enjoy more than developing good websites and webApps for Cool people. I believe that people should do things they are good at or in which their <span className="text-success">Hearts ❤</span> lie. That's why I choose freelance web development as my career.</h3>
          <h3 className="text-secondary-900 text-3xl md:text-4xl max-w-6xl my-8">I’ve spent many years trying to perfect what I do and while I’ll never be perfect, I do my best to come close.</h3>
          <h4 className="text-secondary-100 font-light text-4xl md:text-5xl max-w-6xl my-8"> If you’ve got a project you’d like to work on with me just get in touch and we can get to work!
          </h4>
          <Link href="/contact">
            <button className="rounded-lg border-2 px-8 py-4 my-4 border-success text-success">Contact Now</button>
          </Link>
        </main>
      </div>

      <div className="min-h-screen flex flex-col items-center justify-center">
        <div className="hidden h-1/4 container relative w-full md:flex justify-center items-center">
          <h1 data-aos="fade-right" className="absolute bottom-0 text-transparent" style={{ WebkitTextStrokeWidth: '.5px', WebkitTextStrokeColor: 'var(--main-yellow)', fontSize: '15rem', zIndex: '-1' }}>&lt;Contact /&gt; </h1>
          <h1 data-aos="fade-left" className="text-secondary-100 font-extrabold" style={{ fontSize: '10rem' }} >Say Hello</h1>
        </div>
        <main className="container px-20 lg:px-56">
          <h3 className="text-success md:text-4xl" data-aos="fade-in">Get in Touch</h3>
          <h2 className="text-secondary-900 text-3xl md:text-4xl max-w-6xl my-8" data-aos="fade-in">I’m available for freelance projects. Let’s work together to create something worth sharing.</h2>
          <div className="md:flex">
            <a href="mailto: mukulrajpoot262610@gmail.com" target="_blank">
              <button data-aos="fade-in" className="rounded-lg border-2 px-8 py-4 my-4 mx-4 flex items-center justify-between border-success text-success">
                <MailOutlined />
                <span className="mx-2">Mail</span>
              </button>
            </a>
            <a href="https://www.linkedin.com/in/mukul-rajpoot-262610/" target="_blank">
              <button data-aos="fade-in" className="rounded-lg border-2 px-8 py-4 my-4 mx-4 flex items-center justify-between border-info text-info">
                <LinkedinOutlined />
                <span className="mx-2">LinkedIn</span>
              </button>
            </a>
            <a href="https://github.com/mukulrajpoot262610" target="_blank">
              <button data-aos="fade-in" className="rounded-lg border-2 px-8 py-4 my-4 mx-4 flex items-center justify-between border-normal text-normal">
                <GithubOutlined />
                <span className="mx-2">GitHub</span>
              </button>
            </a>
          </div>
        </main>
      </div>

    </div>
  )
}
