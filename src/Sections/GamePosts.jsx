import React from 'react'
import { FaGamepad, FaPlay, FaUsers, FaBookmark, FaSearch } from 'react-icons/fa'
import NavBar from '../Components/NavBar'

const GamePosts = () => {
  const featuredGames = [
    {
      id: 1,
      title: "Candy Crush Saga",
      image: "https://picsum.photos/400/200?random=1",
      players: "50M players",
      category: "Puzzle",
      isPlaying: ["John Doe", "Jane Smith", "and 3 others"]
    },
    {
      id: 2,
      title: "PUBG Mobile",
      image: "https://picsum.photos/400/200?random=2",
      players: "100M players",
      category: "Action",
      isPlaying: ["Mike Johnson", "and 8 others"]
    },
    {
      id: 3,
      title: "Farmville",
      image: "https://picsum.photos/400/200?random=3",
      players: "30M players",
      category: "Simulation",
      isPlaying: ["Sarah Wilson", "Tom Brown", "and 2 others"]
    }
  ]

  const suggestedGames = [
    {
      id: 4,
      title: "8 Ball Pool",
      image: "https://picsum.photos/200/200?random=4",
      players: "20M players",
      category: "Sports"
    },
    {
      id: 5,
      title: "Words With Friends",
      image: "https://picsum.photos/200/200?random=5",
      players: "15M players",
      category: "Word"
    }
  ]

  return (
    <div className="bg-[#f0f2f5] min-h-screen">
    
      <div className="container mx-auto pt-16 px-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center">
            <FaGamepad className="text-2xl text-blue-600 mr-2" />
            <h1 className="text-2xl font-bold">Gaming</h1>
          </div>
          <div className="relative">
            <FaSearch className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Search games"
              className="pl-10 pr-4 py-2 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Navigation */}
        <div className="flex gap-4 mb-6 border-b pb-2">
          <button className="px-4 py-2 text-blue-600 border-b-2 border-blue-600 font-semibold">
            For You
          </button>
          <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md">
            Following
          </button>
          <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md">
            Play with Friends
          </button>
        </div>

        {/* Featured Games */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4">Featured Games</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {featuredGames.map(game => (
              <div key={game.id} className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                <img 
                  src={game.image} 
                  alt={game.title} 
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-lg">{game.title}</h3>
                    <FaBookmark className="text-gray-400 hover:text-blue-600 cursor-pointer" />
                  </div>
                  <p className="text-sm text-gray-600">{game.players} • {game.category}</p>
                  {game.isPlaying && (
                    <p className="text-xs text-gray-500 mt-1">
                      <FaUsers className="inline mr-1" />
                      {game.isPlaying.join(' ')} playing
                    </p>
                  )}
                  <button className="mt-3 w-full bg-[#e7f3ff] text-blue-600 px-4 py-2 rounded-md flex items-center justify-center gap-2 hover:bg-blue-100">
                    <FaPlay className="text-sm" /> Play Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Suggested Games */}
        <div>
          <h2 className="text-xl font-bold mb-4">Suggested Games</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {suggestedGames.map(game => (
              <div key={game.id} className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                <img 
                  src={game.image} 
                  alt={game.title} 
                  className="w-full h-24 object-cover rounded-t-lg"
                />
                <div className="p-3">
                  <h3 className="font-semibold text-sm">{game.title}</h3>
                  <p className="text-xs text-gray-600">{game.players}</p>
                  <button className="mt-2 w-full bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-sm hover:bg-gray-200">
                    Play
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default GamePosts
