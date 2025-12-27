import React, { useState } from 'react'
import { icons, images } from '../assets/courseData'

const Navbar = ({ status, setStatus }) => {

  // To show a popup message on success
  const [showPopup, setShowPopup] = useState(false);

  // Enrollment
  const handleEnrollment = () => {
    if (status !== 'Enroll Now') return;

    setStatus('Enrolling...');

    setTimeout(() => {
      setStatus('Enrolled');
      setShowPopup(true);

      setTimeout(() => {
        setShowPopup(false);
      }, 3000);

    }, 3000);
    
  }

  return (
    <nav className='fixed md:static top-0 left-0 right-0 bg-white/90 md:bg-transparent z-10
    px-4 md:px-0 py-4 flex items-center justify-between'>

      {/* Enrollment success message */}
      <div className={`fixed left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 rounded
      text-xs text-center bg-green-100 border-b-2 text-green-600 font-semibold tracking-wide
      ${ showPopup ? 'top-2 opacity-100 z-20' : '-top-10 opacity-0' } transition-all duration-300`}>
        
        You successfully enrolled for this course

      </div>

      {/* Logo */}
      <img src={ images.logo2 } alt="Logo" className='w-18 md:w-32' />

      <div className='flex items-center gap-2'>

        {/* Enroll Now Button */}
        <button
        onClick={ handleEnrollment }
        className={`md:hidden bg-[#5E0261] text-white px-2 py-1 rounded
        ${ status === 'Enrolling...' ? 'opacity-70 cursor-not-allowed' : 'hover:opacity-90' }
        ${ status === 'Enrolled' && 'bg-gray-800' } transition-all duration-500`} >
          { status }
        </button>
        
        {/* Profile */}
        <img src={ images.user } alt="User" className='w-8 md:w-12 rounded-full' />

      </div>

    </nav>
  )
}

export default Navbar
