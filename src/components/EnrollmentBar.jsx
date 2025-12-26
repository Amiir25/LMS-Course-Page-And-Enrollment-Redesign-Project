import React from 'react'
import { icons, images } from '../assets/courseData'
import Preview from './Preview'
import Rating from './Rating'
import CourseData from './CourseData'
import EnrollNow from './EnrollNow'

const EnrollmentBar = () => {
  return (
    <section className='border border-gray-400 md:w-[220px] lg:w-[360px]
    rounded-xl p-4'>
        <Preview/>
        <Rating/>
        <CourseData/>
        <EnrollNow/>
    </section>
  )
}

export default EnrollmentBar
