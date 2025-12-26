import React, { useState } from 'react'
import Title from './Title';
import { courseContent, icons } from '../assets/courseData';

const CourseContent = () => {

    const [activeCourse, setActiveCourse] = useState(1);

    const toggleCourse = (id) => {
        setActiveCourse(activeCourse === id ? 0 : id);
    }

    return (
        <section className='mt-20'>
            <Title title='Course Content' />

            <div className='border border-gray-300 rounded-lg overflow-hidden'>
                {
                    courseContent.map((course, i) => (
                        <div key={i}>
                            {/* Header */}
                            <div
                            onClick={ () => toggleCourse(course.id) }
                            className='flex items-start gap-4 px-2 py-4 bg-[#DBB1FF] cursor-pointer -my-1'>
                                
                                <img src={ activeCourse === course.id ? icons.arrowUp : icons.arrowDown } alt="Arrow"
                                className='w-6' />

                                <div className='flex flex-col lg:flex-row items-start lg:items-center justify-between w-full'>
                                    <h1 className='font-semibold'>
                                        Module { course.id } : { course.title }
                                    </h1>
                                    <p className='text-gray-800'>
                                        { course.lectures.length } Lectures | { course.duration }
                                    </p>
                                </div>
                            </div>

                            {/* Lectures */}
                            <div className={`p-2 transition-all duration-300 ease-in-out
                            ${ activeCourse === course.id ? 'max-h-400 opacity-100' : 'max-h-0 opacity-0' }`}>
                                {
                                    course.lectures.map((lecture, i) => (
                                        <div key={i} className='flex items-center gap-3 my-2 cursor-pointer group'>
                                            <img src={ icons.onlineVideo } alt="Video Icon"
                                            className='w-4' />
                                            <div className='flex flex-col lg:flex-row items-start lg:items-center justify-between w-full'>
                                                <h2 className='group-hover:underline'>
                                                    { lecture.title }
                                                </h2>
                                                <p className='text-gray-800'>
                                                    { lecture.duration }
                                                </p>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default CourseContent
