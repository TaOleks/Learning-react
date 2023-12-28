import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
   
    <div className='navbar'>
    <div className='navbar__links'>
   {/* bad practice */}
   {/* <a href='/posts'>Posts </a> */}
    {/* Good practice */}
      <Link to='/about'>About website </Link>
      <Link to='/posts'>Posts </Link>
    </div>
  </div>
  )
}

export default Navbar