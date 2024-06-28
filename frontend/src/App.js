import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from './Pages/home/Index';
import Courses from './Pages/courses/Courses';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Index/>}/>
        <Route path='/courses' element={<Courses/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App