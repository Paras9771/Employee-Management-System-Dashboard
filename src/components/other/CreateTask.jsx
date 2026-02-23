import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {

  const [userData, setuserData] = useContext(AuthContext)

  const [taskTitle, settaskTitle] = useState('')
  const [taskDescription, settaskDescription] = useState('')
  const [taskDate, settaskDate] = useState('')
  const [assignTo, setassignTo] = useState('')
  const [category, setcategory] = useState('')

  const [newTask, setnewTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()

    const taskObj = {
      title: taskTitle,
      description: taskDescription,
      date: taskDate,
      assignTo,
      category,
      active: false,
      newTask: true,
      failed: false,
      completed: false
    }

    setnewTask([...newTask, taskObj])

    const data = userData || []

    data.forEach((elem) => {
      if (assignTo === elem.firstName) {
        elem.tasks.push(taskObj)
        elem.taskStats.newTask = elem.taskStats.newTask + 1
      }
    })

    setuserData(data)
    localStorage.setItem("employees", JSON.stringify(data))

    settaskTitle('')
    settaskDescription('')
    settaskDate('')
    setassignTo('')
    setcategory('')

    alert("Task Created Successfully ")
  }

  return (
    <div className="flex justify-center items-center mt-10 sm:mt-16 px-4">
      <div className="w-full max-w-2xl bg-gray-800/80 backdrop-blur-md rounded-2xl p-5 sm:p-8 shadow-xl border border-gray-700">
        <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-4 sm:mb-6 text-center">
          Create New Task
        </h2>
        <form className="space-y-4 sm:space-y-5" onSubmit={submitHandler}>
          <div>
            <label className="block text-gray-300 mb-1 text-sm sm:text-base">
              Task Title
            </label>
            <input
              value={taskTitle}
              onChange={(e) => settaskTitle(e.target.value)}
              type="text"placeholder="Make a UI Design"
              required
              className="w-full bg-gray-900 border border-gray-700 rounded-lg px-3 sm:px-4 py-2 text-white text-sm sm:text-base
              focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-1 text-sm sm:text-base">
              Description
            </label>
            <textarea
              value={taskDescription}
              onChange={(e) => settaskDescription(e.target.value)}
              rows="4" placeholder="Enter the Description"
              required
              className="w-full bg-gray-900 border border-gray-700 rounded-lg px-3 sm:px-4 py-2 text-white text-sm sm:text-base
              focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-1 text-sm sm:text-base">
              Due Date
            </label>
            <input
              value={taskDate}
              onChange={(e) => settaskDate(e.target.value)}
              type="date" required
              className="w-full bg-gray-900 border border-gray-700 rounded-lg px-3 sm:px-4 py-2 text-white text-sm sm:text-base
              focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-1 text-sm sm:text-base">
              Assign To
            </label>
            <input
              value={assignTo}
              onChange={(e) => setassignTo(e.target.value)}
              type="text" placeholder="Employee Name"
              required
              className="w-full bg-gray-900 border border-gray-700 rounded-lg px-3 sm:px-4 py-2 text-white text-sm sm:text-base
              focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-1 text-sm sm:text-base">
              Category
            </label>
            <input
              value={category}
              onChange={(e) => setcategory(e.target.value)}
              type="text" placeholder="Design, Development, etc" required
              className="w-full bg-gray-900 border border-gray-700 rounded-lg px-3 sm:px-4 py-2 text-white text-sm sm:text-base
              focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <button
            type="submit"
            className="w-full mt-5 sm:mt-6 bg-indigo-600 hover:bg-indigo-700 text-white py-2.5 sm:py-3 rounded-lg font-medium 
            text-base sm:text-lg transition shadow-md">
            Create Task
          </button>
        </form>
      </div>
    </div>
  )
}

export default CreateTask