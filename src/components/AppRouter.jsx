
import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
// import About from '../pages/About'
// import Posts from '../pages/Posts'
// import Errors from '../pages/Errors'
// import PostIdPage from '../pages/PostIdPage'
import { routes } from '../router/rout'

function AppRouter() {
  return (
    
    <Routes>
        {routes.map(route =>
        <Route 
          element={<route.element/>}
            path={route.path}
            exact={route.exact}
          />
          
        )}
      
     {/* <Route path="/about" element={<About/>}/>  
     <Route exact path="/posts" element={<Posts/>}/>
     <Route path="/error" element={<Errors/>}/>
     <Route exact path="/posts/:id" element={<PostIdPage/>}/> */}
     
     <Route path="*" element={<Navigate to="/posts"/>}/>
   </Routes>
  )
}

export default AppRouter