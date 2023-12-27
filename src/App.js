
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './styles/App.css'
import React from 'react'
import About from './pages/About'
import Posts from './pages/Posts'

function App() {
  return (
   // <About></About>
    //<Posts></Posts>
    
      <BrowserRouter>
      <Routes>
        <Route path="/about" element={<About/>}/> 
          
         <Route path="/posts" element={<Posts/>}/>
      </Routes>
          

        
      
      </BrowserRouter>
     
    
  )
}

export default App