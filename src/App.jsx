import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { setLocalStorage } from './utils/localStorage'
import { AuthContext } from './context/AuthProvider'

const App = () => {

  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)


  useEffect(() => {
    setLocalStorage()
  }, [])

  const [userData, setuserData] = useContext(AuthContext)

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser")

    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      setLoggedInUserData(userData.data)
    }
  }, [])

  const handleLogin = (email, password) => {
    if (email === "parastomar851@gmail.com" && password === "paras@123") {

      const adminUser = {
        id: 1,
        firstName: "Paras Tomar",
        email: "parastomar851@gmail.com"
      }

      setUser("admin")
      setLoggedInUserData(adminUser)

      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({
          role: "admin",
          data: adminUser
        })
      )
    }
    else if (
      userData?.find(
        (emp) => emp.email === email && emp.password === password
      )
    ) {

      const emp = userData.find(
        (emp) => emp.email === email && emp.password === password
      )

      setUser("employees")
      setLoggedInUserData(emp)

      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({
          role: "employees",
          data: emp
        })
      )
    }

    else {
      alert("Invalid Candidate")
    }
  }

  return (
    <>
      {!user && <Login handleLogin={handleLogin} />}

      {user === "admin" && (
        <AdminDashboard changeUser = {setUser} data={loggedInUserData} />
      )}

      {user === "employees" && (
        <EmployeeDashboard changeUser = {setUser} data={loggedInUserData} />
      )}
    </>
  )
}

export default App