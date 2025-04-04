import React, { useContext } from 'react'
import { DataContext } from '../Components/DataContext'
import SearchBarComp from '../Components/SearchBarComp'

const ShopPosts = () => {
  
  
    const {searchNewVisible}=useContext(DataContext)

  return (
    <div>
        {searchNewVisible && 
      <SearchBarComp className='shadow-[0_4px_6px_-2px_rgba(0,0,0,0.2)] z-50' />}
    
    </div>
  )
}

export default ShopPosts