import React from 'react'
import Title from './Title'
import { relatedCourses } from '../assets/courseData'
import Rating from './Rating'

const RelatedCourses = () => {
  return (
    <section className='my-20'>
        <Title title='Related Courses You May Like' />

        <div className='md:mt-10 flex flex-col md:flex-row items-start gap-4 md:gap-10'>
            {
                relatedCourses.map((course, i) => (
                    <div key={i} className='border border-white p-2 rounded cursor-pointer
                    flex md:block items-center gap-4
                    hover:border-gray-200 hover:shadow-xl transition-all duration-300'>
                        
                        <img src={ course.image } alt={`${ course.name } Course`}
                        className='w-40 rounded' />
                        
                        <div>
                            <h2 className='max-w-40 text-sm font-semibold'>{ course.name }</h2>
                            <Rating/>
                        </div>

                    </div>
                ))
            }
        </div>
    </section>
  )
}

export default RelatedCourses
