import React from 'react'
import Analysis from './Analysis'
import Sidebar from '../components/Sidebar'

const Analysicfinal = () => {
  return (
    <div className='flex gap-5 min-h-screen'>
      {/* Sidebar */}
      <Sidebar className="h-full"/>

      {/* Main content */}
      <div className="flex-1 p-4">
        {/* Page Heading */}
        <h1 className="ml-10  p-6 space-y-8 bg-gray-900  text-3xl font-bold mb-6 text-white">
          Customer & Orders Analytics
        </h1>

        {/* Analysis content */}
        <Analysis />
      </div>
    </div>
  )
}

export default Analysicfinal