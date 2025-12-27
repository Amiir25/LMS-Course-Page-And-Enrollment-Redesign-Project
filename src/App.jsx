import React, { useState } from 'react'
import LargeScreen from './pages/LargeScreen'
import Navbar from './components/Navbar'
import SmallScreen from './pages/SmallScreen'

const App = () => {
  // To handle enrollment status all over the page
  const [enrollmentStatus, setEnrollmentStatus] = useState('Enroll Now');

  return (
    <section className='px-4 md:px-8 lg:px-24'>
      
      <Navbar
        status={ enrollmentStatus }
        setStatus={ setEnrollmentStatus }/>
      
      <div className='md:hidden mt-20'>
        <SmallScreen
          status={ enrollmentStatus }
          setStatus={ setEnrollmentStatus }/>
      </div>

      <div className='hidden md:block'>
        <LargeScreen
          status={ enrollmentStatus }
          setStatus={ setEnrollmentStatus }/>
      </div>

    </section>
  )
}

export default App