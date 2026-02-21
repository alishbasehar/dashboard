import React from 'react'
import ChartSection from '../components/ChartSection'
import Sidebar from '../components/Sidebar'
import CustomerAnalyticsChart from '../components/CustomerAnalyticsChart '
import CustomerOrdersChart from '../components/customerorder'
import CustomerOrdersTable from '../components/CustomerOrdersTable '
const Analysis = () => {
  return (
    <div className="container max-w-7xl mx-auto p-4 ">
        
      {/* Charts row */}
      <div className=' md:mr-0 grid grid-cols-1 w-full  md:grid-cols-2 lg:grid-cols-3 gap-10 mb-5'>
  <CustomerAnalyticsChart />
  <CustomerOrdersChart />
    <CustomerAnalyticsChart />

</div>

      {/* Table row - full width */}
      <div className=' mr-40 w-full'>
        <CustomerOrdersTable />
      </div>
    </div>
  )
}

export default Analysis