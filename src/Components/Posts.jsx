import React, { useContext } from 'react';
import { DataContext } from './DataContext';
import { FaRegLaughBeam } from "react-icons/fa";
import { BiLike } from "react-icons/bi";
import { FaComment } from "react-icons/fa";
import { IoIosShareAlt } from "react-icons/io";
import dp from '../../Assets/dp.jpg';

const Posts = () => {
  const { 
    stories, 
    friendsList,
    postStates,
    handleLike,
    toggleComment,
    handleCommentChange,
    handleKeyPress
  } = useContext(DataContext);

  return (
    <div className='w-full md:w-[80%]'>
      {friendsList.map((post) => {
        // Find the corresponding story for the post
        const story = stories.find((s) => s.name === post.name);
        const postData = postStates[post.id] || { 
          likes: 0, 
          isLiked: false, 
          commentText: '', 
          showCommentBox: false,
          comments: []
        };

        return (
          <div className='flex flex-col mb-10 bg-white rounded-lg' key={post.id}>
            {/* Display the matched story's image and name */}
            <div className='flex items-center p-2'>
              {story ? (
                <>
                  <img className='w-[50px] h-[50px] rounded-full' src={story.profileImg} alt={story.name} />
                  <span className='ml-3 font-semibold'>{story.name}</span>
                </>
              ) : (
                <>
                  <img className='w-[50px] h-[50px] rounded-full' src={dp} alt={post.name} />
                  <span className='ml-3 font-semibold'>{post.name}</span>
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
                {postData.likes > 0 && (
                  <span className='text-gray-500 text-base ml-1'>{postData.likes}</span>
                )}
              </div>
              <div className='flex gap-1 text-gray-500 text-2xl items-center'>
                <FaComment />
                {postData.comments.length > 0 && (
                  <span className='text-gray-500 text-base'>{postData.comments.length}</span>
                )}
                <IoIosShareAlt />
              </div>
            </div>

            <hr className='text-gray-300' />

            {/* Like, Comment, Share Buttons */}
            <div className='flex text-gray-600 w-full justify-around'>
              <span 
                onClick={() => handleLike(post.id)}
                className='p-2 text-2xl hover:bg-gray-300 flex items-center gap-1 cursor-pointer'
              >
                <BiLike className={postData.isLiked ? 'text-blue-500' : ''} />
                <p className='text-xl'>Like</p>
              </span>
              
              <span 
                onClick={() => toggleComment(post.id)}
                className='p-2 text-2xl hover:bg-gray-300 flex items-center gap-1 cursor-pointer'
              >
                <FaComment />
                <p className='text-xl'>Comment</p>
              </span>
              
              <span className='p-2 text-2xl hover:bg-gray-300 flex items-center gap-1 cursor-pointer'>
                <IoIosShareAlt /><p className='text-xl'>Share</p>
              </span>
            </div>
            <hr className='text-gray-300' />
            
            {/* Comment Section */}
            {postData.showCommentBox && (
              <div className='bg-white p-2 h-auto w-full'>
                {/* Display existing comments */}
                {postData.comments.length > 0 && (
                  <div className='mb-4'>
                    {postData.comments.map(comment => (
                      <div key={comment.id} className='flex mb-3'>
                        <div className='mr-2'> 
                          <img 
                            className='w-8 h-8 rounded-full object-cover' 
                            src={dp} 
                            alt="User" 
                          />
                        </div>
                        <div className='bg-gray-100 rounded-lg p-2 max-w-[85%]'>
                          <div className='font-semibold text-sm'>{comment.user}</div>
                          <div className='text-sm'>{comment.text}</div>
                          <div className='text-xs text-gray-500 mt-1'>
                            {new Date(comment.timestamp).toLocaleString()}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                
                {/* Comment input */}
                <div className='flex w-full gap-2'>
                  <div> 
                    <img 
                      className='w-10 h-10 rounded-full object-cover' 
                      src={dp} 
                      alt="User" 
                    />
                  </div>
                  <div className='w-full'>
                    <input 
                      value={postData.commentText}
                      onChange={(e) => handleCommentChange(post.id, e.target.value)}
                      onKeyUp={(e) => handleKeyPress(e, post.id)}
                      className='bg-gray-200 p-2 rounded-lg w-full'
                      type="text"
                      placeholder='Write a comment...' 
                    />  
                  </div>  
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Posts;