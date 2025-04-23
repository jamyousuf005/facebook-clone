import React, { useContext } from 'react'
import { AuthContext } from '../Components/AuthContext'
import { useNavigate } from 'react-router'
import NavBar from '../Components/NavBar'
import SearchBarComp from '../Components/SearchBarComp'
import { DataContext } from '../Components/DataContext'


const Home = () => {
  
  return (
    <div className='bg-gray-200 min-h-screen overflow-hidden'>
         <div className='w-full relative'>
          <NavBar />
          {searchNewVisible && <SearchBarComp className='shadow-[0_4px_6px_-2px_rgba(0,0,0,0.2)] z-50' />}
          </div>
        
    </div>
  )
}

export default Home