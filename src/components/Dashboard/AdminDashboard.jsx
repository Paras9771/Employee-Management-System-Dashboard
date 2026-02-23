import React from 'react'
import Header from '../other/Header'
import CreateTask from '../other/CreateTask'
import AllTask from '../other/AllTask'

const AdminDashboard = ({ data }) => {
  return (
    <div 
      className="min-h-screen w-full bg-gradient-to-br from-gray-950 via-gray-900 to-black p-4 sm:p-6 md:p-10">
      <Header data={data}/>
      <CreateTask />
      <AllTask />

    </div>
  )
}

export default AdminDashboard