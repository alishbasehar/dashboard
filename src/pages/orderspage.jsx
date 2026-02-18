import React from 'react'
import Sidebar from '../components/Sidebar'
import Enhancedorders from '../components/Enhancedorders'
const orderspage = () => {
  return (
    <div className='flex min-h-screen'>
        <Sidebar/>
     <Enhancedorders/>
    </div>
  )
}

export default orderspage