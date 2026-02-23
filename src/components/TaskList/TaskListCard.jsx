import React from 'react'

const TaskListCard = ({ data, color }) => {

  return (
    <div
      className={`min-w-[220px] sm:min-w-[250px] md:min-w-[270px] h-64 sm:h-72 md:h-80 
      bg-gradient-to-br ${color} rounded-xl p-3 sm:p-4 md:p-5 text-white shadow-lg 
      hover:scale-105 transition-transform duration-300`}
    >
      <h3 className="text-base sm:text-lg md:text-xl font-semibold">
        {data?.title}
      </h3>

      <p className="text-xs sm:text-sm mt-2 opacity-90">
        {data?.description}
      </p>

      <div className="mt-3 sm:mt-4 text-xs sm:text-sm space-y-1">
        <p>📅 Due: {data?.date}</p>
        <p>📂 Category: {data?.category}</p>
      </div>

      <button
        className="mt-3 sm:mt-4 w-full bg-black/30 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm hover:bg-black/50"
      >
        View Task
      </button>

      <div className="mt-2 sm:mt-3 flex gap-2 sm:gap-3">

        <button
          className="w-1/2 bg-green-600 hover:bg-green-700 
          px-2 sm:px-3 py-1.5 sm:py-2 
          rounded-lg text-xs sm:text-sm transition-colors"
        >
          ✔ Completed
        </button>

        <button
          className="w-1/2 bg-red-600 hover:bg-red-700 
          px-2 sm:px-3 py-1.5 sm:py-2 
          rounded-lg text-xs sm:text-sm transition-colors"
        >
          ✖ Failed
        </button>
      </div>
    </div>
  )
}

export default TaskListCard