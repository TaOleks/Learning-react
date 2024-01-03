
import React, { useContext } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
// import About from '../pages/About'
// import Posts from '../pages/Posts'
// import Errors from '../pages/Errors'
// import PostIdPage from '../pages/PostIdPage'
import { privateRoutes, publicRoutes } from '../router'
import { AuthContext } from '../context'
import Loader from './UI/loader/Loader'

function AppRouter() {

    const {isAuth, isLoading} = useContext(AuthContext)
    if (isLoading){
      return <Loader/>
    }
  return (
    isAuth
    ?
    <Routes>
        {privateRoutes.map(route =>
        <Route 
          element={<route.element/>}
            path={route.path}
            exact={route.exact}
            key = {route.path}
          />  
        )}



     {/* <Route path="/about" element={<About/>}/>  
     <Route exact path="/posts" element={<Posts/>}/>
     <Route path="/error" element={<Errors/>}/>
     <Route exact path="/posts/:id" element={<PostIdPage/>}/> */}
     
     <Route path="*" element={<Navigate to="/posts"/>}/>
   </Routes>
   :
   <Routes>
       
{publicRoutes.map(route =>
        <Route 
          element={<route.element/>}
            path={route.path}
            exact={route.exact}
            key = {route.path}
          />  
        )}
     <Route path="*" element={<Navigate to="/login"/>}/>
   </Routes>
  )
}

export default AppRouter