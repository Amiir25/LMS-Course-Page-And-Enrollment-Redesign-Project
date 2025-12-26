import React from 'react'
import { icons, images } from '../assets/courseData'

const Navbar = () => {
  return (
    <nav className='fixed md:static top-0 left-0 right-0 bg-white/90 md:bg-transparent z-10
    px-4 md:px-0 py-4 flex items-center justify-between'>

      {/* Logo */}
      <img src={ images.logo2 } alt="Logo" className='w-18 md:w-32' />

      <div className='flex items-center gap-2'>

        {/* Enroll Now Button */}
        <button className='md:hidden bg-[#5E0261] text-white px-2 py-1 rounded'>
            Enroll Now
        </button>
        
        {/* Profile */}
        <img src={ images.user } alt="User" className='w-8 md:w-12 rounded-full' />

      </div>

    </nav>
  )
}

export default Navbar
