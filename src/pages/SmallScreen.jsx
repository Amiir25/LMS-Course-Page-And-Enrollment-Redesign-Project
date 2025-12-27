import React, { useState } from 'react'
import Preview from '../components/Preview'
import Rating from '../components/Rating'
import Hero from '../components/Hero'
import CourseObjective from '../components/CourseObjective'
import CourseData from '../components/CourseData'
import EnrollNow from '../components/EnrollNow'
import CourseContent from '../components/CourseContent'
import Requirements from '../components/Requirements'
import Instructor from '../components/Instructor'
import RelatedCourses from '../components/RelatedCourses'

const SmallScreen = ({ status, setStatus }) => {
  return (
    <section>

        <div>
            <Preview/>
            <Rating/>
            <Hero/>
            <CourseObjective/>
            <CourseData/>
            <EnrollNow status={ status } setStatus={ setStatus }/>
            <CourseContent/>
            <Requirements/>
            <Instructor/>
            <EnrollNow status={ status } setStatus={ setStatus }/>
            <RelatedCourses/>
        </div>

    </section>
  )
}

export default SmallScreen
