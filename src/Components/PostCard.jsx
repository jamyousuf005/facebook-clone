import React, { useContext, useState } from 'react'
import dp from '../../Assets/dp.jpg'
import { FaVideo } from "react-icons/fa";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";
import { IoHappyOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { DataContext } from './DataContext';

const PostCard = () => {
  const {hiddenFileInput, handleUploadChange, handleClick, uploadPhoto, addNewPost, friendsList} = useContext(DataContext)
  const [clicked, setClicked] = useState(false)
  const [previewImage, setPreviewImage] = useState(null)
  const [previewVideo, setPreviewVideo] = useState(null)
  const [postText, setPostText] = useState('')
  const [isVideo, setIsVideo] = useState(false)
  const [youtubeUrl, setYoutubeUrl] = useState('')

  const handleInterfaceClick = (isVideoUpload = false) => {
    setClicked(!clicked)
    setIsVideo(isVideoUpload)
  }

  const handleFileSelect = (e) => {
    handleUploadChange(e)
    const file = e.target.files[0]
    if (file) {
      if (isVideo) {
        setPreviewVideo(URL.createObjectURL(file))
      } else {
        const reader = new FileReader()
        reader.onload = (e) => {
          setPreviewImage(e.target.result)
        }
        reader.readAsDataURL(file)
      }
    }
  }

  const closeInterface = () => {
    setClicked(false)
    setPreviewImage(null)
    setPreviewVideo(null)
    setIsVideo(false)
    setYoutubeUrl('')
  }

  const handlePost = () => {
    if (previewImage || previewVideo || youtubeUrl) {
      // Create a new post object
      const newPost = {
        id: Date.now().toString(),
        name: 'You',
        img: previewImage || dp, // Use default image for video posts
        videoUrl: youtubeUrl || previewVideo || null,
        text: postText || (isVideo ? (youtubeUrl ? 'Shared a YouTube video' : 'Shared a video') : 'Shared a photo')
      }
      
      addNewPost(newPost)
      
      // Reset states
      setPreviewImage(null)
      setPreviewVideo(null)
      setPostText('')
      setClicked(false)
      setIsVideo(false)
      setYoutubeUrl('')
    }
  }

  return (
    <div className='w-full bg-white p-3 rounded-lg md:w-[80%] overflow-hidden'>
      <div className='relative'>
        <div className='flex gap-3 w-full'>
          <div className='w-12 h-10'>
            <img className='w-12 h-10 rounded-full object-cover' src={dp} alt="" />
          </div>
          <input 
            type="text" 
            placeholder='whats on your mind?'
            className='bg-gray-200 rounded-3xl border-none w-full p-2'
            value={postText}
            onChange={(e) => setPostText(e.target.value)}
          />
        </div>
           
        <div className='mt-2 text-gray-300'>
          <hr />
        </div>
          
        <div className='flex justify-around gap-1 text-gray-600 text-xl mt-2'>
          <div onClick={() => handleInterfaceClick(true)} className='flex items-center gap-2 p-2 hover:bg-gray-300 hover:rounded cursor-pointer'>  
            <FaVideo className='text-red-500' />
            <span className='text-md'>Video</span>
          </div>
 
          <div onClick={() => handleInterfaceClick(false)} className='flex items-center gap-2 p-2 hover:bg-gray-300 hover:rounded cursor-pointer'>
            <MdOutlineAddPhotoAlternate className='text-green-500' />
            <span className='text-md'>Photo</span> 
          </div>
          
          <div className='flex items-center gap-2 p-2 hover:bg-gray-300 hover:rounded cursor-pointer'>
            <IoHappyOutline className='text-yellow-300'/>
            <span className='text-md'>Feeling/Activity</span>
          </div>
        </div>  
      </div>

      {/* Upload Modal with backdrop */}
      {clicked && (
        <>
          {/* Backdrop with blur effect */}
          <div className='fixed inset-0 bg-opacity-50 backdrop-blur-sm z-40' onClick={closeInterface}></div>
          
          {/* Upload interface */}
          <div className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white z-50 p-6 rounded-lg shadow-xl w-full max-w-lg'>
            <div className='flex justify-between items-center mb-4'>
              <h3 className='font-medium text-xl'>{isVideo ? 'Add Video' : 'Add Photo'}</h3>
              <button onClick={closeInterface} className='text-gray-500 hover:text-gray-700'>
                <IoMdClose size={24} />
              </button>
            </div>
            
            {(previewImage || previewVideo) ? (
              <div className='mb-4'>
                {isVideo ? (
                  <video 
                    src={previewVideo} 
                    className='max-h-64 mx-auto object-contain rounded-lg'
                    controls
                  />
                ) : (
                  <img 
                    src={previewImage} 
                    alt="Preview" 
                    className='max-h-64 mx-auto object-contain rounded-lg' 
                  />
                )}
                <div className='flex justify-between mt-4'>
                  <button 
                    onClick={() => {
                      setPreviewImage(null)
                      setPreviewVideo(null)
                    }} 
                    className='px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300'
                  >
                    Remove
                  </button>
                  <button 
                    onClick={handlePost}
                    className='px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600'
                  >
                    Post
                  </button>
                </div>
              </div>
            ) : (
              <div className='space-y-4'>
                {isVideo && (
                  <div className='mb-4'>
                    <input
                      type="text"
                      placeholder="Enter YouTube URL (optional)"
                      className='w-full p-2 border rounded-lg'
                      value={youtubeUrl}
                      onChange={(e) => setYoutubeUrl(e.target.value)}
                    />
                    <p className='text-sm text-gray-500 mt-1'>Or upload a video file below</p>
                  </div>
                )}
                
                <div 
                  onClick={() => hiddenFileInput && hiddenFileInput.current && hiddenFileInput.current.click()}
                  className='border-2 border-dashed border-gray-300 p-12 rounded-lg text-center cursor-pointer hover:border-blue-500'
                >
                  {isVideo ? (
                    <FaVideo className='text-gray-400 text-6xl mx-auto mb-4' />
                  ) : (
                    <MdOutlineAddPhotoAlternate className='text-gray-400 text-6xl mx-auto mb-4' />
                  )}
                  <p className='text-lg'>Click to upload a {isVideo ? 'video' : 'photo'}</p>
                  <p className='text-sm text-gray-500 mt-2'>or drag and drop {isVideo ? 'video' : 'image'} files</p>
                  <input 
                    ref={hiddenFileInput}
                    onChange={handleFileSelect}
                    className='hidden' 
                    type="file"
                    accept={isVideo ? "video/*" : "image/*"}
                  />
                </div>

                {(isVideo && youtubeUrl) && (
                  <button 
                    onClick={handlePost}
                    className='w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600'
                  >
                    Post YouTube Video
                  </button>
                )}
              </div>
            )}
          </div>
        </>
      )}
    </div>
  )
}

export default PostCard