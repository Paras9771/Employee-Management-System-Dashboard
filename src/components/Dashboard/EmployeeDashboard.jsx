import React from 'react'
import Header from '../other/Header'
import TaksNumber from '../other/TaksNumber'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = ({ data }) => {

  return (
    <div>
      <div className='p-4 sm:p-6 md:p-10 bg-[#1C1C1C] min-h-screen'>
        <Header data={data} />
        <TaksNumber data={data} />
        <TaskList data={data} />
      </div>
    </div>
  )
}

export default EmployeeDashboard