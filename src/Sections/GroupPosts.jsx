// GroupPosts.jsx
import React from 'react'
import { FaUsers, FaSearch, FaPlus, FaCog, FaUserFriends } from 'react-icons/fa'
import NavBar from '../Components/NavBar'

const GroupPosts = () => {
  const featuredGroups = [
    {
      id: 1,
      name: "React Developers Community",
      members: "250K members",
      image: "https://picsum.photos/200/200?random=10",
      isJoined: true,
      privacy: "Public",
      activity: "Very Active",
      description: "A community for React developers to share knowledge and help each other.",
      friendsInGroup: ["John Doe", "Jane Smith", "and 5 others"]
    },
    {
      id: 2,
      name: "Travel Enthusiasts",
      members: "1.2M members",
      image: "https://picsum.photos/200/200?random=11",
      isJoined: false,
      privacy: "Public",
      activity: "Active today",
      description: "Share your travel experiences and get tips from fellow travelers.",
      friendsInGroup: ["Mike Johnson", "and 3 others"]
    }
  ]

  const categories = [
    "Your groups", "Discover", "Your feed", "Recently active",
    "Social learning", "Entertainment", "Gaming", "Jobs"
  ]

  return (
    <div className="bg-[#f0f2f5] min-h-screen">
      {/* Fixed NavBar at the top */}
      <div className="fixed top-0 left-0 w-full z-50 bg-white shadow">
        <NavBar />
      </div>
    
      <div className="container mx-auto pt-16 px-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center">
            <FaUsers className="text-2xl text-blue-600 mr-2" />
            <h1 className="text-2xl font-bold">Groups</h1>
          </div>
          <div className="flex gap-2">
            <button className="p-2 hover:bg-gray-200 rounded-full">
              <FaCog className="text-xl text-gray-600" />
            </button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md flex items-center gap-2">
              <FaPlus /> Create New Group
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex gap-4">
          {/* Left Sidebar */}
          <div className="hidden md:block w-1/4 bg-white rounded-lg shadow p-4">
            <div className="relative mb-4">
              <FaSearch className="absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                placeholder="Search groups"
                className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-100 focus:outline-none"
              />
            </div>

            <div className="space-y-2">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-100 flex items-center gap-2"
                >
                  <FaUsers className="text-gray-500" />
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Main Feed */}
          <div className="flex-1">
            {/* Feed Filters */}
            <div className="bg-white rounded-lg shadow mb-4 p-4">
              <div className="flex gap-4 border-b pb-2">
                <button className="px-4 py-2 text-blue-600 border-b-2 border-blue-600 font-semibold">
                  Your Feed
                </button>
                <button className="px-4 py-2 text-gray-600">
                  Discover
                </button>
              </div>
            </div>

            {/* Groups List */}
            <div className="space-y-4">
              {featuredGroups.map(group => (
                <div key={group.id} className="bg-white rounded-lg shadow p-4">
                  <div className="flex gap-4">
                    <img 
                      src={group.image} 
                      alt={group.name} 
                      className="w-24 h-24 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold text-lg">{group.name}</h3>
                          <p className="text-sm text-gray-600">
                            {group.members} • {group.privacy}
                          </p>
                          <p className="text-sm text-gray-500 mt-1">
                            <FaUserFriends className="inline mr-1" />
                            {group.friendsInGroup.join(' ')} are members
                          </p>
                        </div>
                        <button className={`px-4 py-2 rounded-md ${
                          group.isJoined 
                            ? 'bg-gray-200 text-black hover:bg-gray-300' 
                            : 'bg-blue-600 text-white hover:bg-blue-700'
                        }`}>
                          {group.isJoined ? 'Joined' : 'Join Group'}
                        </button>
                      </div>
                      <p className="text-sm text-gray-600 mt-2">
                        {group.description}
                      </p>
                      <p className="text-sm text-gray-500 mt-2">
                        {group.activity}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GroupPosts