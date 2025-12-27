import React from 'react'
import Navbar from '../components/Navbar'
import EnrollmentBar from '../components/EnrollmentBar'
import Hero from '../components/Hero'
import CourseObjective from '../components/CourseObjective'
import Requirements from '../components/Requirements'
import Instructor from '../components/Instructor'
import RelatedCourses from '../components/RelatedCourses'
import CourseContent from '../components/CourseContent'

const LargeScreen = ({ status, setStatus }) => {
  return (
    <section className='relative'>

        <div className='flex items-start justify-between gap-10 lg:gap-20 mt-10'>
            <div className='flex-2'>
                <Hero/>
                <CourseObjective/>
                <CourseContent/>
                <Requirements/>
                <Instructor/>
                <RelatedCourses/>
            </div>
            
            <div className='sticky top-2 flex-1'>
              <EnrollmentBar status={ status } setStatus={ setStatus }/>
            </div>
        </div>

    </section>
  )
}

export default LargeScreen
