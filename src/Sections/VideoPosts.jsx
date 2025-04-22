import React, { useContext } from 'react'
import { DataContext } from '../Components/DataContext'
import SearchBarComp from '../Components/SearchBarComp'
import SideBar from '../Components/SideBar'
import NavBar from '../Components/NavBar'
import { FaRegLaughBeam } from "react-icons/fa";
import { BiLike } from "react-icons/bi";
import { FaComment } from "react-icons/fa";
import { IoIosShareAlt } from "react-icons/io";

const VideoPosts = () => {
  const { searchNewVisible, friendsList, stories,
     postStates, handleCommentChange, handleKeyPress,
     handleLike, toggleComment, dp
    } = useContext(DataContext)

  // Helper function to get YouTube video ID
  const getYouTubeId = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  return (
    <>
      {searchNewVisible &&
        <SearchBarComp className='shadow-[0_4px_6px_-2px_rgba(0,0,0,0.2)] z-50' />
      }

      <div className="fixed top-0 left-0 w-full z-50 bg-white shadow">
        <NavBar />
      </div>

      <div className='flex'>
        <div className="w-[23%]  hidden lg:block">
          <div className="sticky bg-white top-16 h-[calc(100vh-64px)] overflow-y-auto "
            onScroll={(e) => {
              // your scroll handling code
            }}
            style={{ passive: true }}
          >
            <SideBar />
          </div>
        </div>

        <div className='flex-1 lg:pl-40 lg:pr-40 md:pl-20 md:pr-20  pt-5'>
          {friendsList.map((post) => {
            const matchingStory = stories.find(story => story.name === post.name);
            const postData = postStates[post.id] || {
              likes: 0,
              isLiked: false,
              commentText: '',
              showCommentBox: false,
              comments: []
            };
            return (
              <div key={post.id} className="bg-white rounded-lg shadow-md mb-4">
                {/* Post Header */}
                <div className="p-4 flex items-center">
                  <img
                    src={matchingStory ? matchingStory.profileImg : post.img}
                    alt={post.name}
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div>
                    <div className="font-semibold">{post.name}</div>
                  </div>
                </div>

                {/* Post Caption */}
                {post.caption && (
                  <div className="px-4 pb-2 text-gray-800">
                    {post.caption}
                  </div>
                )}

                {/* Video Content - UPDATED to use youtube-nocookie.com */}
                {post.videoUrl && (
                  post.videoUrl.includes('youtube.com') || post.videoUrl.includes('youtu.be') ? (
                    <div className="w-full">
                      <div className="relative" style={{ 
                        paddingBottom: '56.25%',
                        willChange: 'transform' 
                      }}>
                        <iframe
                          className="absolute top-0 left-0 w-full h-full"
                          src={`https://www.youtube-nocookie.com/embed/${getYouTubeId(post.videoUrl)}?autoplay=1&mute=1`}
                          title="YouTube video player"
                          frameBorder="0"
                          loading="lazy"
                          width="560"
                          height="315"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>
                    </div>
                  ) : (
                    <video
                      controls
                      className="w-full"
                      autoPlay
                      muted
                      loop
                    >
                      <source src={post.videoUrl} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  )
                )}


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
      </div>
    </>
  )
}

export default VideoPosts