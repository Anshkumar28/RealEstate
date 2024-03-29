/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar";
function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<Signin/>} />
          <Route path="/sign-up" element={<Signup/>}/>
          <Route path="/profile" element={<Profile/>} />
          <Route path="/about" element ={<About/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
