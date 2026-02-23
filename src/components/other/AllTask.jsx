import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {

  const [userData, setuserData] = useContext(AuthContext)

  return (
    <div
      id='tasklist'
      className="bg-gradient-to-br from-gray-900 via-gray-900 to-black 
      p-4 sm:p-6 mt-6 rounded-2xl shadow-lg border border-gray-800  max-h-[280px] sm:max-h-[320px]"
    >
      <div className="grid grid-cols-6 text-gray-400 text-[10px] sm:text-xs uppercase tracking-wider font-semibold mb-4 px-2 sm:px-4 
        border-b border-gray-700 pb-2 sm:pb-3 sticky top-0 bg-gray-900/90 backdrop-blur">
        <span>Assigned To</span>
        <span>New Task</span>
        <span>Active Task</span>
        <span>Completed</span>
        <span>Failed</span>
        <span className="text-right">Status</span>
      </div>

      <div className="overflow-auto max-h-[200px] sm:max-h-[230px] pr-1 sm:pr-2 space-y-2 sm:space-y-3">
        {userData?.map(function(elem, index) {
          return (
            <div
              key={index}
              className="grid grid-cols-6 items-center bg-gray-800/70 border border-gray-700
              py-2 sm:py-3 px-2 sm:px-4 rounded-xl hover:bg-gray-700/70 hover:scale-[1.01]transition-all duration-200"
            >
              <h2 className="text-white font-medium text-xs sm:text-sm truncate">
                {elem.firstName}
              </h2>

              <h3 className="text-yellow-400 truncate text-xs sm:text-sm">
                {elem.taskStats.newTask || 0}
              </h3>

              <span className="text-blue-400 font-semibold text-xs sm:text-sm">
                {elem.taskStats?.active || 0}
              </span>

              <span className="text-green-400 font-semibold text-xs sm:text-sm">
                {elem.taskStats?.completed || 0}
              </span>

              <span className="text-red-400 font-semibold text-xs sm:text-sm">
                {elem.taskStats?.failed || 0}
              </span>

              <span className="text-right">
                <span className="bg-yellow-500/20 text-yellow-400 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full 
                  text-[10px] sm:text-xs font-medium">
                  Active
                </span>
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default AllTask