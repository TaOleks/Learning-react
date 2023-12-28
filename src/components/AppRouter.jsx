import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import About from '../pages/About'
import Posts from '../pages/Posts'
import Errors from '../pages/Errors'

function AppRouter() {
  return (
    
    <Routes>
     <Route path="/about" element={<About/>}/>  
     <Route path="/posts" element={<Posts/>}/>
     <Route path="/error" element={<Errors/>}/>
     <Route path="*" element={<Navigate to="/error"/>}/>
   </Routes>
  )
}

export default AppRouter