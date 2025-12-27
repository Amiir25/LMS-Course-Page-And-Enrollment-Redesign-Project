import React, { useState } from 'react'
import { icons, images } from '../assets/courseData'
import Preview from './Preview'
import Rating from './Rating'
import CourseData from './CourseData'
import EnrollNow from './EnrollNow'

const EnrollmentBar = ({ status, setStatus }) => {

  // To handle enrollment status all over the page
  const [enrollmentStatus, setEnrollmentStatus] = useState('Enroll Now');

  return (
    <section className='border border-gray-400 md:w-[220px] lg:w-[360px]
    rounded-xl p-4'>
        <Preview/>
        <Rating/>
        <CourseData/>
        <EnrollNow status={ status } setStatus={ setStatus }/>
    </section>
  )
}

export default EnrollmentBar
