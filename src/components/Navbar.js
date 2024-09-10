import React, {useState} from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaMoon, FaSun } from "react-icons/fa";

function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        if (darkMode) {
        document.documentElement.classList.remove('dark');
        } else {
        document.documentElement.classList.add('dark');
        }
    };
    const hamburgerLine = `h-0.5 w-5 my-0.75 border-black rounded-full bg-black dark:bg-white transition ease transform duration-300`;
    const hiddenStyle = {
        height: "0",
        paddingTop: "0",
        paddingBottom: "0"
    }
    const toggleSlide = {
        height: "auto"
    }
  return (
    <div className='fixed flex flex-col bg-nav w-screen z-10'>
        <div className='container mx-auto p-4'>
            <div className='flex items-center justify-between'>
                <div className='flex items-center justify-start'>
                    <Link to='/' className='hover:opacity-80'><h1 className='text-2xl md:text-4xl font-bold text-blue-700 dark:text-yellow-500'>HT</h1></Link>
                </div>
                <div className='hidden sm:block'>
                    <div className='flex items-center space-x-4'>
                        <div className="flex space-x-4">
                            <NavLink to="/" className="rounded-md text-xl px-3 py-2 text-blue-700 font-medium dark:text-yellow-500 hover:bg-gray-700 nav-link hover:text-white" aria-current="page">Home</NavLink>
                            <NavLink to="/about" className="rounded-md text-xl px-3 py-2 font-medium text-blue-700 dark:text-yellow-500 hover:bg-gray-700 nav-link hover:text-white">About</NavLink>
                            <NavLink to="/project" className="rounded-md text-xl px-3 py-2 font-medium text-blue-700 dark:text-yellow-500 hover:bg-gray-700 nav-link hover:text-white">Projects</NavLink>
                        </div>
                        <div
                            className='border-l-2 pl-2 border-black hover:cursor-pointer dark:border-white'
                            onClick={toggleDarkMode}
                        >
                            <div className='p-2'>
                                {darkMode ? <FaMoon /> : <FaSun />}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='sm:hidden'>
                    <button
                        className="flex flex-col h-10 w-10 border-2 border-black dark:border-white rounded justify-center items-center group"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                    <div
                        className={`${hamburgerLine} ${
                        isOpen
                            ? "rotate-45 translate-y-2.25 opacity-50 group-hover:opacity-100"
                            : "opacity-50 group-hover:opacity-100"
                        }`}
                    />
                    <div
                        className={`${hamburgerLine} ${
                        isOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"
                        }`}
                    />
                    <div
                        className={`${hamburgerLine} ${
                        isOpen
                            ? "-rotate-45 -translate-y-2.25 opacity-50 group-hover:opacity-100"
                            : "opacity-50 group-hover:opacity-100"
                        }`}
                    />
                    </button>
                </div>
            </div>
            <div 
                className="flex flex-col justify-center items-center h-0 p-4 pb-0 overflow-hidden"
                style={ isOpen ? toggleSlide : hiddenStyle }
            >
                <Link to='/' onClick={() => setIsOpen(false)} className='text-xl font-bold'>Home</Link>
                <Link to='/about' onClick={() => setIsOpen(false)} className='text-xl font-bold'>About</Link>  
                <Link to='/project' onClick={() => setIsOpen(false)} className='text-xl font-bold'>Projects</Link>
                <div
                    className='mt-3 border-black hover:cursor-pointer dark:border-white'
                    onClick={toggleDarkMode}
                >
                    <div className='p-2'>
                        {darkMode ? <FaMoon /> : <FaSun />}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NavBar