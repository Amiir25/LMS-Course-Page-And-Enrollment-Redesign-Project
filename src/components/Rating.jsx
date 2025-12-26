import React from 'react'
import { icons } from '../assets/courseData'

const Rating = () => {
  return (
    <section className='flex items-center gap-1 mt-2'>
        {
            Array(5).fill('').map((__, i) => (
                <img key={i} src={`${ i === 4 ? icons.halfStar : icons.star }`} alt="Rating"
                className='w-3 lg:w-4' />
            )) 
        }
    </section>
  )
}

export default Rating
