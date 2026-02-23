import React from "react";
import { useState } from "react";

const Login = ({handleLogin}) => { 

    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')

    const submitHandler = (elem) => {
        elem.preventDefault();
        handleLogin(email, password)
        setemail("")
        setpassword("")
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-200 px-4 sm:px-6">

            <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 md:p-10 w-full max-w-sm sm:max-w-md">
                <div className="text-center mb-5 sm:mb-6">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
                        Sign In
                    </h2>
                    <p className="text-gray-500 mt-1 text-sm sm:text-base">
                        Welcome back, please login
                    </p>
                </div>

                <form onSubmit={(elem) => {
                    submitHandler(elem);
                }} className="flex flex-col gap-4">

                    <div>
                        <label className="block text-sm text-gray-600 mb-1">
                            Email address
                        </label>
                        <input 
                         type="email" placeholder="you@example.com" 
                         className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 placeholder-gray-400 
                         focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm sm:text-base"
                         value={email}
                         onChange={(elem) => {
                            setemail(elem.target.value)
                         }}
                        />
                    </div>

                    <div>
                        <label className="block text-sm text-gray-600 mb-1">
                            Password
                        </label>
                        <input 
                         type="password" placeholder="••••••••" className="w-full px-4 py-2 border border-gray-300 rounded-lg 
                         text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm sm:text-base" 
                         value={password}
                         onChange={(elem) => {
                            setpassword(elem.target.value)
                         }}
                        />
                    </div>

                    <div className="flex items-center justify-between text-xs sm:text-sm">
                        <label className="flex items-center gap-2 text-gray-600">
                            <input type="checkbox" className="accent-purple-600" />
                            Remember me
                        </label>

                        <span className="text-purple-600 cursor-pointer hover:underline">
                            Forgot password?
                        </span>
                    </div>

                    <button
                        className="w-full mt-3 sm:mt-4 bg-purple-600 text-white py-2 rounded-lg 
                        hover:bg-purple-700 transition duration-300 font-semibold text-sm sm:text-base">
                        Sign In
                    </button>
                </form>

                <p className="text-xs sm:text-sm text-center text-gray-500 mt-5 sm:mt-6">
                    Don’t have an account?{" "}
                    <span className="text-purple-600 cursor-pointer hover:underline">
                        Create one
                    </span>
                </p>
            </div>
        </div>
    );
};

export default Login;