import React from 'react'
import PostCard from './PostCard'
import Stories from './Stories'
import Posts from './Posts'

const HomeMiddle = () => {
  return (
    <div className=' lg:pl-8 lg:pr-8 lg:pt-5 bg-gray-100 flex justify-center items-center
    flex-col w-[100%] overflow-hidden'>
        <PostCard/>
        <Stories/> 
        <Posts/>
    </div>
  )
}

export default HomeMiddle