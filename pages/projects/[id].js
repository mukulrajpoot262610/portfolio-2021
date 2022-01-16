import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import PROJECTS_DATA from '../../public/assets/projects'
import { Spin } from 'antd';
import Circle from '../../components/Circle';

export const getStaticProps = async ({ params }) => {
  const project = PROJECTS_DATA.find(p => p.id.toString() === params.id)

  return {
    props: {
      project: project
    }
  }
}

export const getStaticPaths = async () => {
  const paths = PROJECTS_DATA.map(project => ({
    params: { id: project.id.toString() }
  }))

  return {
    paths,
    fallback: true,
  }
}

const ProjectDetail = ({ project }) => {
  const [data] = useState(project)

  return (
    <div className="min-h-screen px-3 overflow-hidden">
      {
        data ? (
          <div className="flex items-center justify-center mt-40 flex-col">
            <Head>
              <title>Project {data.name}</title>
            </Head>

            <div className='flex justify-center items-center'>
              <h1 className="font-black text-8xl mb-20 md:my-40 md:text-xxl m-0 babus text-center leading-tight text-secondary-100">{data.name}</h1>
            </div>
            <img src={data.image} alt="" className="w-11/12 rounded-xl h-auto" />

            <div className='my-40 w-11/12 md:w-9/12'>
              <h1 className='uppercase text-3xl text-success font-bold'>{data.category}</h1>
              <h1 className='text-secondary-100 text-6xl'>{data.name}</h1>
              <p className='text-secondary-900 text-4xl w-full lg:w-2/3'>{data.desc}</p>

              <h1 className='uppercase text-3xl text-success font-bold mt-28'>Tech Used</h1>
              <div className='flex flex-wrap'>
                {
                  data.tech.map((e) => <Circle image={e.image} text={e.name} key={e.id} />)
                }
              </div>
              <h1 className='uppercase text-3xl text-success font-bold mt-28'>Project Url<span className='text-lg'>(s)</span></h1>
              <div className='flex flex-wrap'>
                <Circle image={'/icons/github.svg'} text="Github" />
                <Circle image={'/icons/chrome.svg'} text="Live" />
              </div>

              {
                data.category === 'Freelance' ? (
                  <div className=''>
                    <h1 className='uppercase text-3xl text-success font-bold mt-28 mb-10'>Testimonial</h1>
                    <img src='/worthpad.png' alt="" className='rounded-lg my-4' />
                  </div>
                ) : ""
              }
            </div>

          </div>
        ) : <div className="h-screen flex flex-col items-center justify-center">
          <Spin size="large" />
        </div>
      }
    </div>
  )
}

export default ProjectDetail
