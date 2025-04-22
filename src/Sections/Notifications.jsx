// Notifications.jsx
import React from 'react'
import { FaBell, FaUserFriends, FaHeart, FaComment } from 'react-icons/fa'
import NavBar from '../Components/NavBar'

const Notifications = () => {
  const notifications = [
    {
      id: 1,
      type: 'friend_request',
      user: {
        name: "John Doe",
        image: "https://picsum.photos/200/200?random=5"
      },
      time: "2h ago",
      content: "sent you a friend request",
      isRead: false
    },
    {
      id: 2,
      type: 'like',
      user: {
        name: "Jane Smith",
        image: "https://picsum.photos/200/200?random=6"
      },
      time: "4h ago",
      content: "liked your post",
      isRead: true
    },
    // Add more notifications...
  ]

  const getNotificationIcon = (type) => {
    switch(type) {
      case 'friend_request':
        return <FaUserFriends className="text-blue-500" />
      case 'like':
        return <FaHeart className="text-red-500" />
      case 'comment':
        return <FaComment className="text-green-500" />
      default:
        return <FaBell className="text-blue-500" />
    }
  }

  return (
    <div className="bg-gray-100 min-h-screen">
    
      <div className="container mx-auto pt-16 px-4">
        <div className="flex items-center mb-6">
          <FaBell className="text-2xl text-blue-600 mr-2" />
          <h1 className="text-2xl font-bold">Notifications</h1>
        </div>

        {/* Filters */}
        <div className="flex gap-4 mb-6">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md">All</button>
          <button className="px-4 py-2 bg-white text-gray-700 rounded-md">Unread</button>
        </div>

        {/* Notifications List */}
        <div className="space-y-2">
          {notifications.map(notification => (
            <div 
              key={notification.id} 
              className={`p-4 bg-white rounded-lg shadow flex items-center ${
                !notification.isRead ? 'bg-blue-50' : ''
              }`}
            >
              <div className="relative">
                <img 
                  src={notification.user.image} 
                  alt={notification.user.name} 
                  className="w-12 h-12 rounded-full"
                />
                <div className="absolute -right-1 -bottom-1 w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center">
                  {getNotificationIcon(notification.type)}
                </div>
              </div>
              <div className="ml-4 flex-1">
                <p>
                  <span className="font-semibold">{notification.user.name}</span>
                  {" "}
                  {notification.content}
                </p>
                <p className="text-sm text-gray-500">{notification.time}</p>
              </div>
              {!notification.isRead && (
                <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Notifications