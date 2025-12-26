import React from 'react'
import { icons, images } from '../assets/courseData'

const Preview = () => {
  return (
    <section className='relative w-full'>
        {/* Web Development Image */}
        <img src={ images.webDevelopment } alt="Web Development Course"
        className='w-full opacity-80 rounded' />

        {/* Play Icon */}
        <img src={ icons.playButton } alt="Play Button"
        className='w-8 lg:w-12 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer' />

        <p className='absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-[10px] lg:text-lg tracking-wide'>
            Preview this course
        </p>
    </section>
  )
}

export default Preview
