import Image from 'next/image'
import React from 'react'

const Card = () => {
    return (
        <div className='w-full h-200 rounded-3xl hover:border-2 border-success bg-frosted p-10'>
            <div className='relative w-full h-1/2 rounded-3xl'>
                <Image src={"https://res.cloudinary.com/practicaldev/image/fetch/s--wH1dVZ-f--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/u7gdf59l93hleaenclhu.png"} alt="" layout='fill' objectFit='cover' className='rounded-3xl' />
            </div>

            <div className='p-4'>
                <p className='text-secondary-900 mt-6 mb-3'>Web Dev</p>
                <h1 className='font-semibold text-5xl'>Building a new app using Next.js</h1>
                <div className='flex items-center my-6'>
                    <Image src={"https://res.cloudinary.com/practicaldev/image/fetch/s--wH1dVZ-f--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/u7gdf59l93hleaenclhu.png"} alt="" height={50} width={50} objectFit='cover' className='rounded-full' />
                    <div className='ml-4'>
                        <h2 className='font-medium text-2xl'>Mukul Rajpoot</h2>
                        <p className='text-secondary-900'>Feburary 12, 2022</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card