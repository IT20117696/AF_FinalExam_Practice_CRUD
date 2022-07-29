import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from './components/Student/RegisterStudent'
import Login from './components/Student/Login';
import Homepage from './components/Student/Homepage';
import StudentProfile from './components/Student/StudentProfile';
import StudentProfileUpdate from './components/Student/StudentProfileUpdate';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/userreg" element={<Register />} />
      <Route path="/home" element={<Homepage />} />
      <Route path="/studentprofile" element={<StudentProfile />} />
      <Route path="/update/:id" element={<StudentProfileUpdate />} />

     </Routes>
    </BrowserRouter>
  )
}

export default App;