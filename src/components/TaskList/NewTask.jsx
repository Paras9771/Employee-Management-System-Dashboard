import React from "react";

const NewTask = ({ data }) => {
  return (
    <div 
      className="min-w-[200px] sm:min-w-[260px] md:min-w-[300px] h-56 sm:h-64 md:h-72
      bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl p-3 sm:p-4 md:p-5 text-white">

      <h3 className="text-base sm:text-lg md:text-xl font-semibold">
        {data.title}
      </h3>

      <p className="mt-2 text-[11px] sm:text-xs md:text-sm">
        {data.description}
      </p>

      <p className="mt-2 sm:mt-3 text-xs sm:text-sm md:text-base">
        📅 {data.date}
      </p>

      <button 
        className="mt-3 sm:mt-4 md:mt-5 bg-black/30 px-3 sm:px-4 py-1.5 sm:py-2 rounded text-xs sm:text-sm md:text-base">
        Accept Task
      </button>
    </div>
  );
};

export default NewTask;