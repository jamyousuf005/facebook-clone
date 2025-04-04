import React, { useContext } from 'react'
import { DataContext } from '../Components/DataContext'
import SearchBarComp from '../Components/SearchBarComp'

const VideoPosts = () => {
  const {searchNewVisible}=useContext(DataContext)
  return (
    <div>
      <div>
      {searchNewVisible && 
      <SearchBarComp className='shadow-[0_4px_6px_-2px_rgba(0,0,0,0.2)] z-50' />}
      video
       </div>
    
    </div>
  
  )
}

export default VideoPosts