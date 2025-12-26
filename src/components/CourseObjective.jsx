import React from 'react'
import { courseObjectives, icons } from '../assets/courseData'
import Title from './Title'

const CourseObjective = () => {
  return (
    <section className='relative mt-40 border-t border-gray-300 px-1 py-4 rounded-2x shadow-2xl'>

        <Title title="By the end of this course, you'll be able to:" />

        {/*  */}
        <div className='border border-gray-300 w-fit p-1 rounded-full absolute -top-3 left-1/2 -translate-x-1/2'>
            <p className='w-4 h-4 bg-gray-300 rounded-full'></p>
        </div>

        <div className='flex items-start gap-4'>
            {
                courseObjectives.map((section, i) => (
                    <div key={i} className=''>
                        {
                            section.map((objective, i) => (
                                <div key={i} className='flex items-start gap-2 my-2'>
                                    <img src={ icons.check } alt="Check Icon" className='w-7 p-2' />
                                    <p>{ objective }</p>
                                </div>
                            ))
                        }
                    </div>
                ))
            }
        </div>
    </section>
  )
}

export default CourseObjective
