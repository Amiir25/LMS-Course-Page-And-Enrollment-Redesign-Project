import React from 'react'
import { courseObjectives, icons } from '../assets/courseData'

const CourseObjective = () => {
  return (
    <section className='mt-40'>
        <h2 className='text-3xl font-semibold mb-4'>
            By the end of this course, you'll be able to:
        </h2>
        <div className='flex items-start gap-4'>
            {
                courseObjectives.map((section) => (
                    <div className=''>
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
