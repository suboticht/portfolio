import React from 'react'

export default function ProjectCard({image, name, description, link}) {
  return (
    <div className='p-6'>
        <div className='flex flex-col justify-between shadow-lg shadow-indigo-500/50 rounded h-full border border-indigo-600'>
            <div className='flex justify-center items-center m-4 max-h-40 overflow-hidden relative'>
                <img src={image} className=''></img>
            </div>
            <div className='p-4'>
                <h3 className='text-2xl font-medium text-center text-blue-700 dark:text-yellow-500 mb-2'>{name}</h3>
                <p className='text-xl font-normal text-justify'>{description}</p>
            </div>
            <div className='p-4 text-center'>
                <button className='rounded text-white bg-blue-600 hover:opacity-80'><a href={link} className='min-w-24 p-2 inline-block' target='_blank'>Link</a></button>
            </div>
        </div>
    </div>
  )
}
