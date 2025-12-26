import React from 'react'
import { requirements } from '../assets/courseData'

const Requirements = () => {
  return (
    <section className='mt-20'>
        <h2 className='text-3xl font-semibold mb-4'>Requirements</h2>
        <div>
            {
                requirements.map((requirement, i) => (
                    <p key={i}>⦿ { requirement }</p>
                ))
            }
        </div>
    </section>
  )
}

export default Requirements
