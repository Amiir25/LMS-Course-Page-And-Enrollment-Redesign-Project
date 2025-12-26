import React from 'react'
import LargeScreen from './pages/LargeScreen'
import Navbar from './components/Navbar'
import SmallScreen from './pages/SmallScreen'

const App = () => {
  return (
    <section className='px-4 md:px-8 lg:px-24'>
      
      <Navbar/>
      
      <div className='md:hidden mt-20'>
        <SmallScreen/>
      </div>

      <div className='hidden md:block'>
        <LargeScreen/>
      </div>

    </section>
  )
}

export default App