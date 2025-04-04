import React from 'react'
import PostCard from './PostCard'
import Stories from './Stories'
import Posts from './Posts'

const HomeMiddle = () => {
  return (
    <div className='pl-10 pr-10 pt-5 bg-gray-100 flex flex-col'>

        <PostCard/>
        <Stories/> 
        <Posts/>
    </div>
  )
}

export default HomeMiddle