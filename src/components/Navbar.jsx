import React from 'react'
import { icons, images } from '../assets/courseData'

const Navbar = () => {
  return (
    <nav className='py-4 flex items-center justify-between'>
        {/* Profile */}
        <img src={ images.user } alt="User" className='w-12 rounded-full' />

        {/* Shoping Cart */}
        <img src={ icons.shoppingCart } alt="Shopping Cart" className='w-12' />

        {/* Enroll Now Button */}
        <button className='md:hidden bg-[#5E0261] text-white px-2 py-1 rounded'>
            Enroll Now
        </button>
    </nav>
  )
}

export default Navbar
