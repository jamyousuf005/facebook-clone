import React, { useContext } from 'react';
import { DataContext } from './DataContext';
import { FaRegLaughBeam } from "react-icons/fa";
import { BiLike } from "react-icons/bi";
import { FaComment } from "react-icons/fa";
import { IoIosShareAlt } from "react-icons/io";

const Posts = () => {
  const { stories, friendsList } = useContext(DataContext);

  return (
    <div className='w-[500px] lg:w-full '>
      {friendsList.map((post) => {
        // Find the corresponding story for the post
        const story = stories.find((s) => s.name === post.name);

        return (
          <div className='flex flex-col mb-10 bg-white rounded-lg' key={post.id}>
            {/* Display the matched story's image and name */}
            <div className='flex items-center p-4'>
              {story && (
                <>
                  <img className='w-[50px] h-[50px] rounded-full' src={story.img} alt={story.name} />
                  <span className='ml-3 font-semibold'>{story.name}</span>
                </>
              )}
            </div>

            {/* Post Image */}
            <div className='w-full pt-4 pb-4'>
              <img className='h-auto object-contain w-full' src={post.img} alt="" />
            </div>

            {/* Reaction Section */}
            <div className='flex w-full pl-2 pr-2'>
              <div className='flex items-center w-full text-2xl p-2'>
                <FaRegLaughBeam className='text-yellow-300' />
                <BiLike className='text-blue-500' />
              </div>
              <div className='flex gap-1 text-gray-500 text-2xl items-center'>
                <FaComment /><IoIosShareAlt />
              </div>
            </div>

            <hr className='text-gray-300' />

            {/* Like, Comment, Share Buttons */}
            <div className='flex text-gray-600 w-full justify-around '>
              <span className='p-2 text-2xl hover:bg-gray-300 flex items-center gap-1'>
                <BiLike className='cursor-pointer' /><p className='text-xl cursor-pointer'>Like</p>
              </span>
              <span className='p-2 text-2xl hover:bg-gray-300 flex items-center gap-1'>
                <FaComment className='cursor-pointer' /><p className='text-xl cursor-pointer'>Comment</p>
              </span>
              <span className='p-2 text-2xl hover:bg-gray-300 flex items-center gap-1'>
                <IoIosShareAlt className='cursor-pointer' /><p className='text-xl cursor-pointer'>Share</p>
              </span>
            </div>

            <hr className='text-gray-300' />
          </div>
        );
      })}
    </div>
  );
};

export default Posts;
