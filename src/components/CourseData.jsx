import React from 'react'
import { courseData, icons } from '../assets/courseData'

const CourseData = () => {

  const data = [
    `${ courseData.students }+ Students Enrolled`,
    `${ courseData.rate } Rating`,
    'Certificate of Complition',
  ];

  return (
    <section className='mt-8'>
      {
        data.map((d, i) => (
          <div key={i} className='flex items-center gap-2 my-2'>
            <img src={ icons.checkMark } alt="Checkmark Icon" className='w-6' />
            <p>{ d }</p>
          </div>   
        ))
      }
    </section>
  )
}

export default CourseData
