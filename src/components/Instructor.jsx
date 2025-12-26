import React from 'react'
import Title from './Title'
import { instructorData } from '../assets/courseData'

const Instructor = () => {
  return (
    <section className='mt-20'>
        <Title title='About the Instructor'/>
        
        <div className='flex items-center gap-4 mt-10'>
            <img src={ instructorData.image } alt="Instructor" className='w-40 rounded' />
            <div>
                <h3 className='text-xl font-bold'>{ instructorData.name }</h3>
                <p className='text-sm font-mono max-w-80'>{ instructorData.title }</p>
            </div>
        </div>

        <p className='mt-4'>{ instructorData.description }</p>
    </section>
  )
}

export default Instructor
