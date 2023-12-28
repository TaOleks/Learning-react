
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import './styles/App.css'
import React from 'react'
import About from './pages/About'
import Posts from './pages/Posts'

function App() {
  return (
   
      <BrowserRouter>

      <div className='navbar'>
        <div className='navbar__links'>
       {/* bad practice */}
       {/* <a href='/posts'>Posts </a> */}
        {/* Good practice */}
          <Link to='/about'>About website </Link>
          <Link to='/posts'>Posts </Link>
        </div>
      </div>
      <Routes>
        <Route path="/about" element={<About/>}/> 
          
         <Route path="/posts" element={<Posts/>}/>
      </Routes>
          

        
      
      </BrowserRouter>
     
    
  )
}

export default App