import React from 'react'
import Header from '../components/Header'
import StatsSection from '../components/StatsSection'
import ChartSection from '../components/ChartSection'
import TableSection from '../components/Table Section'


const Customers = () => {
  return (
    <div>
<div className="bg-black min-h-screen container max-w-7xl mx-auto ">
      <Header />

      <StatsSection />
    
<ChartSection />
      <TableSection />
    
     
    </div>
    </div>
  )
}

export default Customers;