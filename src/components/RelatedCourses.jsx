import React from 'react'
import Title from './Title'
import { relatedCourses } from '../assets/courseData'
import Rating from './Rating'

const RelatedCourses = () => {
  return (
    <section className='my-20'>
        <Title title='Related Courses You May Like' />

        <div className='mt-10 flex items-start gap-10'>
            {
                relatedCourses.map((course, i) => (
                    <div key={i} className='cursor-pointer border border-white p-2 rounded
                    hover:border-gray-200 hover:shadow-xl transition-all duration-300'>
                        <img src={ course.image } alt={`${ course.name } Course`}
                        className='w-40' />
                        <h2 className='max-w-40 text-sm font-semibold'>{ course.name }</h2>
                        <Rating/>
                    </div>
                ))
            }
        </div>
    </section>
  )
}

export default RelatedCourses
