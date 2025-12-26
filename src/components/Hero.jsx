import React from 'react'
import { courseDescription, courseTitle } from '../assets/courseData'
import Title from './Title'

const Hero = () => {
  return (
    <section className='lg:h-[70vh] flex flex-col gap-10 md:gap-20'>

        <div>
            {/* Title */}
            <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold'>
                { courseTitle.title }
            </h1>

            {/* Subtitle */}
            <p className='text-md md:text-lg lg:text-xl mt-4'>
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
