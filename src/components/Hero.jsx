import React from 'react'
import { courseDescription, courseTitle } from '../assets/courseData'
import Title from './Title'

const Hero = () => {
  return (
    <section className='mt-10 lg:h-[70vh] flex flex-col gap-20'>

        <div>
            {/* Title */}
            <h1 className='md:text-4xl lg:text-5xl font-bold'>
                { courseTitle.title }
            </h1>

            {/* Subtitle */}
            <p className='md:text-lg lg:text-xl mt-4'>
                { courseTitle.subtitle }
            </p>
        </div>

        {/* Description */}
        <div>
            <Title title='Description' />
            {
                courseDescription.map((text, i) => (
                    <p key={i} className='my-4'>{ text }</p>
                ))
            }
        </div>
    </section>
  )
}

export default Hero
