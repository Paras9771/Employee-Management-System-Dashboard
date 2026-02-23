import React from 'react'

const TaskNumber = ({ data }) => {

  return (
    <div className="flex mt-5 sm:mt-6 md:mt-10 w-full gap-3 sm:gap-4 md:gap-6 
      overflow-x-auto overflow-y-hidden scrollbar-hide">

      <div className="min-w-[220px] sm:min-w-[260px] md:min-w-[350px] bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl 
        py-4 sm:py-5 md:py-6 px-5 sm:px-6 md:px-9 text-white shadow-lg flex flex-col justify-center items-center 
        hover:scale-105 transition-transform duration-300">

        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold">
          {data?.taskStats?.newTask || 0}
        </h2>
        <h3 className="text-sm sm:text-base md:text-lg font-medium mt-1 sm:mt-2">
          New Tasks
        </h3>
      </div>

      <div className="min-w-[220px] sm:min-w-[260px] md:min-w-[350px] bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl 
        py-4 sm:py-5 md:py-6 px-5 sm:px-6 md:px-9 text-white shadow-lg flex flex-col justify-center items-center 
        hover:scale-105 transition-transform duration-300">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold">
          {data?.taskStats?.completed || 0}
        </h2>
        <h3 className="text-sm sm:text-base md:text-lg font-medium mt-1 sm:mt-2">
          Completed
        </h3>
      </div>

      <div className="min-w-[220px] sm:min-w-[260px] md:min-w-[350px] bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl 
        py-4 sm:py-5 md:py-6 px-5 sm:px-6 md:px-9 text-white shadow-lg flex flex-col justify-center items-center 
        hover:scale-105 transition-transform duration-300">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold">
          {data?.taskStats?.active || 0}
        </h2>
        <h3 className="text-sm sm:text-base md:text-lg font-medium mt-1 sm:mt-2">
          Active
        </h3>
      </div>

      <div className="min-w-[220px] sm:min-w-[260px] md:min-w-[350px] bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl 
        py-4 sm:py-5 md:py-6 px-5 sm:px-6 md:px-9 text-white shadow-lg flex flex-col justify-center items-center
        hover:scale-105 transition-transform duration-300">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold">
          {data?.taskStats?.failed || 0}
        </h2>
        <h3 className="text-sm sm:text-base md:text-lg font-medium mt-1 sm:mt-2">
          Failed
        </h3>
      </div>
    </div>
  )
}

export default TaskNumber