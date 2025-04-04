import React from 'react'
import dp from '../../Assets/dp.jpg'
import { FaVideo } from "react-icons/fa";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";
import { IoHappyOutline } from "react-icons/io5";


const PostCard = () => {
  return (
    <div className= 'w-[500px] lg:w-full  bg-white p-3 rounded-lg'>

       <div className='flex gap-3 w-full'>
          <div className='w-12 h-10'>
            <img className='w-12 h-10 rounded-full object-cover' src={dp} alt="" />
          </div>
          <input 
          type="text" 
          placeholder='whats on your mind?'
          className='bg-gray-200 rounded-3xl border-none w-full p-2' />
       </div>
           
           <div className='mt-2 text-gray-300'>
            <hr />
           </div>
          
          <div className='flex justify-around gap-1 text-gray-600 text-xl mt-2'>
        
          <div className='flex items-center gap-2 p-2 hover:bg-gray-300 
          hover:rounded cursor-pointer'>  
            <FaVideo className='text-red-500  ' />
            <span>Video</span>
             </div>
 
          <div className='flex items-center gap-2  p-2 hover:bg-gray-300 
          hover:rounded cursor-pointer'>
          <MdOutlineAddPhotoAlternate className='text-green-500 ' />
          <span>Photo</span> 
          </div>
          
          <div className='flex items-center gap-2 p-2 hover:bg-gray-300
           hover:rounded cursor-pointer'>
          <IoHappyOutline className='text-yellow-300'/>
         <span>Feeling/Activity</span>
          </div>
          
          </div>
          
          </div>
  ) 
}

export default PostCard