/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const [formdata, setFormdata] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [disable, setDisable] = useState(true);
  const [msg, setMsg] = useState(null); // Updated state for messages

  useEffect(() => {
    setDisable(!isFormValid()); // Toggle disable state based on form validity
  }, [formdata]);

  const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.id]: e.target.value });
  };

  function isFormValid() {
    const { username, email, password } = formdata;
    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})/;
    let message = "";
    setError(null);
    if (!username) {
      message = "Please fill in the username.";
    } else if (!email) {
      message = "Please fill in the email.";
    } else if (!password) {
      message = "Please fill in the password.";
    } else if (!passwordRegex.test(password)) {
      message = "Password must contain at least one uppercase letter, one special character, and be at least 8 characters long.";
    }
    setMsg(message); // Set the message state
    return message === ""; // Form is valid if message is empty
  }
  useEffect(() => {
    if (error === "Unexpected token '<', \"<!DOCTYPE \"... is not valid JSON") {
      setMsg("Username or Email already exists.");
    }
  }, [error]);
  const handleSubmit = async (e) => {
    setError(null); // Reset error state
    e.preventDefault();
    try {
      setLoading(true);

      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formdata),
      });
      const data = await res.json();
      if (data.success === false) {
        setError(data.message);
        setLoading(false);
        return;
      }
      setLoading(false);
      setError(false);
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center font-sans">
      <div className="container mx-auto mt-[-50px] max-w-md  sm:max-w-lg md:max-w-2xl md:py-[1.5rem]  rounded-lg  overflow-hidden shadow-md bg-white">
        <div className="grid md:grid-cols-2   gap-0">
          <div className="p-6">
            <div className="flex flex-col justify-center items-center">
              <h1 className="font-bold text-3xl mb-2">Create an Account</h1>
              <p className="text-gray-600">Sign up to stay connected with us</p>
              <form onSubmit={handleSubmit} className="mt-4 w-full max-w-sm">
                <div className="mb-4">
                  <input
                    onChange={handleChange}
                    type="text"
                    id="username"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Username"
                  />
                </div>
                <div className="mb-4">
                  <input
                    onChange={handleChange}
                    type="email"
                    id="email"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Email"
                  />
                </div>
                <div className="mb-6">
                  <input
                    onChange={handleChange}
                    type="password"
                    id="password"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Password"
                  />
                </div>
                <div className="flex items-center justify-between  ">
                  <button
                    disabled={disable || loading}
                    className={`bg-blue-500 disabled:bg-slate-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline ${
                      loading ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                    type="submit"
                  >
                    {loading ? "Signing Up..." : "Sign Up"}
                  </button>
                  <a
                    className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                    href="#"
                  >
                    Forgot your password?
                  </a>
                </div>
                {msg && <p className="text-red-500 text-center text-sm mt-2">{msg}</p>} {/* Display validation message */}
              </form>
            
              <Link to="/sign-in">
                <div className="inline-block align-baseline text-sm text-blue-500 hover:text-blue-800 mt-2 hover:cursor-pointer">
                  Already have an account?
                  <span className="font-bold">Sign In</span>
                </div>
              </Link>
            </div>
          </div>
          <div className="hidden md:flex md:flex-col text-white font-bold text-8xl scale-[128%] bg-gradient-to-br from-blue-500 to-blue-900 translate-x-[120px]">
            <span className="text-lg max-w-32 ml-8 mt-12 text-center">
              A Gateway to Find Your
            </span>
            <span className="ml-10">HO</span>
            <span className="ml-6">ME</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
