import React from 'react'
import { courseObjectives, icons } from '../assets/courseData'
import Title from './Title'

const CourseObjective = () => {
  return (
    <section className='mt-40'>
        
        <Title title="By the end of this course, you'll be able to:" />

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
