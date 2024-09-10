import React from 'react'
import imageHome from '../../Assets/home_main.png'
import avata from '../../Assets/avatar.png'
import Type from './Type'
import { FaGithub, FaTwitter, FaFacebook } from 'react-icons/fa'
function Home() {
  return (
    <div className='home-page mx-auto'>
      <div className='pt-36 pb-8 home-bg'>
        <div className='pl-10 mb-6 flex flex-col items-center justify-between sm:flex-row'>
          <div>
            <h2 className='text-4xl mb-4'>Hi There!</h2>
            <h2 className="text-4xl mb-8">I'M<strong className="main-name text-blue-700 dark:text-yellow-500"> HO DANG THANG</strong></h2>
            <div className='text-4xl'><Type /></div>
          </div>
          <div className='px-4 flex items-center justify-center'>
            <img src={imageHome} className="" width={500} height={500} alt="home main" />
          </div>
        </div>
        <div className="mt-24 container mx-auto px-4">
          <div className='center flex justify-center items-center'>
            <h2 className="text-4xl mb-16 text-center">
              LET ME <br className='block sm:hidden' /><strong className="main-name text-blue-700 dark:text-yellow-500">INTRODUCE</strong> <br className='block sm:hidden' />MYSELF
            </h2>
          </div>
          <div className='mb-24'>
            <p className='text-xl'>
              Hello! I am a <i><b className="text-blue-700 dark:text-yellow-500">front-end developer</b></i> specializing in creating user-friendly and visually appealing interfaces for websites and applications.<br />
              I use technologies like <i><b className="text-blue-700 dark:text-yellow-500">HTML, CSS, and JavaScript</b></i> to build responsive and interactive experiences.<br />
              My goal is to ensure that users have a seamless and enjoyable experience when interacting with digital products.
              <br />
              <br />
              Languages & Frameworks: &nbsp;
              <i><b className="text-blue-700 dark:text-yellow-500">HTML, CSS, JavaScript, React</b></i><br />
              Styling: &nbsp;
              <i><b className="text-blue-700 dark:text-yellow-500">SASS, LESS, Bootstrap, Tailwind CSS</b></i><br />
              Tools & Platforms: &nbsp;
              <i><b className="text-blue-700 dark:text-yellow-500">Git, Webpack, npm</b></i><br />
              Design Tools: &nbsp;
              <i><b className="text-blue-700 dark:text-yellow-500">Adobe XD, Photoshop, Figma</b></i><br />
            </p>
          </div>
          <div className='px-4 flex items-center justify-center'>
            <img src={avata} className="" width={300} height={300} alt="Avatar" />
          </div>
        </div>
        <div className='mt-24 container mx-auto px-4'>
          <ul className='flex items-center justify-center gap-4'>
            <li className='bg-blue-700 dark:bg-yellow-500 text-white rounded-full hover:shadow-lg hover:shadow-indigo-500/50'>
              <a 
                href='#' 
                className='w-10 h-10 flex items-center justify-center' 
                target='_blank'>
                <FaGithub className='w-5 h-5' />
              </a>
            </li>
            <li className='bg-blue-700 dark:bg-yellow-500 text-white rounded-full hover:shadow-lg hover:shadow-indigo-500/50'>
              <a 
                href='#' 
                className='w-10 h-10 flex items-center justify-center' 
                target='_blank'>
                  <FaTwitter className='w-5 h-5' />
                </a>
                </li>
            <li className='bg-blue-700 dark:bg-yellow-500 text-white rounded-full hover:shadow-lg hover:shadow-indigo-500/50'>
              <a 
                href='#' 
                className='w-10 h-10 flex items-center justify-center' 
                target='_blank'>
                <FaFacebook className='w-5 h-5' />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Home