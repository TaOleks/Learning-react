import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import About from '../pages/About'
import Posts from '../pages/Posts'
import Errors from '../pages/Errors'
import PostIdPage from '../pages/PostIdPage'

function AppRouter() {
  return (
    
    <Routes>
     <Route path="/about" element={<About/>}/>  
     <Route exact path="/posts" element={<Posts/>}/>
     <Route path="/error" element={<Errors/>}/>
     <Route exact path="/posts/:id" element={<PostIdPage/>}/>
     
     <Route path="*" element={<Navigate to="/error"/>}/>
   </Routes>
  )
}

export default AppRouter