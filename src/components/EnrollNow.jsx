import React, { useState } from 'react'
import { icons } from '../assets/courseData';

const EnrollNow = ({ status, setStatus }) => {

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
    <section className='flex justify-center'>
      
      {/* Enrollment success message */}
      <div className={`fixed left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 rounded
      bg-green-100 border-b-2 text-green-600 font-semibold tracking-wide transition-all duration-300
      ${ showPopup ? 'top-2 opacity-100 z-10' : '-top-10 opacity-0' }`}>
        <p className=''>
          You successfully enrolled for this course
        </p>
      </div>

      <button
      onClick={ handleEnrollment }
      className={`mt-10 bg-[#5E0261] text-white text-3xl lg:text-5xl font-bold
      px-12 md:px-3 lg:px-8 py-4 rounded-2xl cursor-pointer active:opacity-100
      ${ status === 'Enrolling...' ? 'opacity-70 cursor-not-allowed' : 'hover:opacity-90' }
      ${ status === 'Enrolled' && 'hidden md:block bg-gray-800' } transition-all duration-500`} >
          { status }
      </button>

    </section>
  )
}

export default EnrollNow
