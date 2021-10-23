import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import PROJECTS_DATA from '../../components/projects.data'
import { Spin } from 'antd';

const ProjectDetail = () => {

  const router = useRouter()
  const { id } = router.query

  const [data, setData] = useState()

  useEffect(() => {
    setData(PROJECTS_DATA.find((e) => e.id == id))
  }, [id])

  return (
    <div className="min-h-screen px-3 overflow-hidden">
      {
        data ? (
          <div className="relative h-screen flex items-center justify-center">
            <Head>
              <title>Project {data.name}</title>
            </Head>

            <h1 className="font-extrabold text-9xl text-secondary-100 z-50 absolute">{data.name}</h1>
            <img src={data.image} alt="" className="w-1/2 z-30 h-auto absolute" />
            <h1 className="font-extrabold text-9xl text-secondary-100 z-10 absolute">{data.name}</h1>

          </div>
        ) : <div className="h-screen flex flex-col items-center justify-center">
          <Spin size="large" />
        </div>
      }
    </div>
  )
}

export default ProjectDetail
