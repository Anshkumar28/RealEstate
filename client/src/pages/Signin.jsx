/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
function Signin() {
  const navigate = useNavigate();
  const [error, setError] = useState(null); // Initialize useNavigate hook
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        setError(data.message);
        return;
      }
    navigate('/'); }catch (error) {
     console.log(error.message);
    }// Example navigation to dashboard page upon successful authentication
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center font-sans">
      <div className="container mx-auto mt-[-50px] max-w-md sm:max-w-lg md:max-w-2xl md:py-[1.5rem] rounded-lg overflow-hidden shadow-md bg-white">
        <div className="grid md:grid-cols-2 gap-0">
          <div className="p-6">
            <div className="flex flex-col justify-center items-center">
              <h1 className="font-bold text-3xl mb-2">Sign In</h1>
              <p className="text-gray-600">Welcome back! Sign in to your account</p>
              <form onSubmit={handleSubmit} className="mt-4 w-full max-w-sm">
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                  <input 
                    onChange={handleChange}
                    value={formData.email}
                    type="email" 
                    id="email" 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    placeholder="Email" 
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                  <input 
                    onChange={handleChange}
                    value={formData.password}
                    type="password" 
                    id="password" 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    placeholder="Password" 
                  />
                </div>
                <div className="flex items-center justify-between">
                  <button 
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline" 
                    type="submit"
                  >
                    Sign In
                  </button>
                  <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                    Forgot your password?
                  </a>
                </div>
              </form>
              {error && <p className="text-red-500 text-center text-sm mt-2">{error}</p>} {/* Display validation message */}

              <Link to='/sign-up'>
                <div className="inline-block align-baseline text-sm text-blue-500 hover:text-blue-800 mt-2 hover:cursor-pointer">
                  New User? <span className='font-bold'>Sign Up</span>
                </div>
              </Link>
            </div>
          </div>
          <div className="hidden md:flex md:flex-col text-white font-bold text-8xl scale-[128%] bg-gradient-to-br from-blue-700 to-blue-500 translate-x-[120px]">
            <span className="text-lg max-w-32 ml-8 mt-12 text-center">Unlock Your Way To A New  </span>
            <span className='ml-10'>HO</span>
            <span className='ml-6'>ME</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;
