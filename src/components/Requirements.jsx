import React from 'react'
import { requirements } from '../assets/courseData'

const Requirements = () => {
  return (
    <section className='mt-20'>
        <h2 className='text-3xl font-semibold mb-4'>Requirements</h2>
        <div>
            {
                requirements.map((requirement, i) => (
                    <div key={i} className='flex items-start gap-2 my-2'>
                      <p>⦿</p>
                      <p key={i}>{ requirement }</p>
                    </div>
                ))
            }
        </div>
    </section>
  )
}

export default Requirements
