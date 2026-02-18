import React from 'react'
import Updates from './Updates'
import Customer from './Customer'

const Right = () => {
  return (
    <div className='text-white md:mt-4 ml-10  sm:ml-3 md:mr-10 flex flex-col justify-evenly'>
        <div>
            <h3 className='font-bold text-center'>Updates</h3>
            <Updates/>
        </div>
        <div>
            <h3 className='text-center mt-5 font-bold'>
                customer Reviews
            </h3>
            <Customer/>
        </div>
    
    
    </div>
  )
}

export default Right