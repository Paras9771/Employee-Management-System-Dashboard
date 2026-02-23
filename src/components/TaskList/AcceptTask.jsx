import React from "react";

const AcceptTask = ({ data }) => {
  return (
    <div 
      className="min-w-[200px] sm:min-w-[220px] md:min-w-[260px]h-56 sm:h-64 md:h-72 
      bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl p-3 sm:p-4 md:p-5 text-white">

      <h3 className="text-base sm:text-lg md:text-xl font-semibold">
        {data.title}
      </h3>

      <p className="mt-2 text-[11px] sm:text-xs md:text-sm">
        {data.description}
      </p>

      <p className="mt-2 sm:mt-3 text-xs sm:text-sm md:text-base">
        📅 {data.date}
      </p>

      <span 
        className="inline-block mt-3 sm:mt-4 bg-black/30 px-2 sm:px-3 py-1 rounded text-[10px] sm:text-xs md:text-sm">
        Accepted
      </span>
    </div>
  );
};

export default AcceptTask;