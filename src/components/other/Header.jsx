import React from 'react'
import { setLocalStorage } from '../../utils/localStorage';

const Header = ({data}) => {
  const logoutUser = () => {
    localStorage.removeItem("loggedInUser")
    window.location.reload()
  }
  return (
    <div 
      className="flex flex-col sm:flex-row items-center sm:items-center justify-between 
      bg-gray-900 p-3 sm:p-4 md:p-5 rounded-xl shadow-md gap-3 sm:gap-0">

      <h1 className="text-white text-lg sm:text-xl md:text-2xl font-medium leading-tight text-center sm:text-left">
        Hello 👋 <br />
        <span 
          className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-400 to-pink-500 
          bg-clip-text text-transparent">
          {data?.firstName}
        </span>
      </h1>

      <button 
        onClick={logoutUser} 
        className="bg-red-600 hover:bg-red-700 active:scale-95 transition-all duration-200text-white px-4 sm:px-5 
        md:px-6 py-2 rounded-lg text-sm sm:text-base md:text-lg font-medium shadow-lgw-full sm:w-auto">
        Logout
      </button>

    </div>
  )
}

export default Header