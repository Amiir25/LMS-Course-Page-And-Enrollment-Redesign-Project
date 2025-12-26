import React from 'react'
import Title from './Title'
import { images, instructorData } from '../assets/courseData'

const Instructor = () => {
  return (
    <section style={{ backgroundImage: `url(${ images.instructor })` }}
    className='mt-20 bg-cover lg:bg-contain bg-center'>
      <div className='w-full h-full bg-linear-to-r from-white via-white/85 to-white py-4'>

        <Title title='About the Instructor'/>
        
        <div className='flex items-center gap-4 mt-10'>
            <img src={ instructorData.image } alt="Instructor" className='w-30 rounded' />
            <div>
                <h3 className='text-lg font-bold'>{ instructorData.name }</h3>
                <p className='text-sm font-mono max-w-80'>{ instructorData.title }</p>
            </div>
        </div>

        <p className='mt-4'>{ instructorData.description }</p>
      </div>
    </section>
  )
}

export default Instructor
