import React from 'react'
import { getPagesArray } from '../../../utils/pages'


function Pagination({...arg} ) {
    let pagesArray = getPagesArray(arg.totalPages)
    
  return (
    
     <div className='page__wraper'>
    {pagesArray.map(p =>
   <span 
    onClick={()=> arg.changePage(p)}
    key = {p}
    className={arg.page === p? 'page page__current':'page'}>
     {p}</span>
   )}
   
  </div>
  )
}

export default Pagination