import React, { useContext } from 'react'
import { DataContext } from '../Components/DataContext'
import SearchBarComp from '../Components/SearchBarComp'
import NavBar from '../Components/NavBar'
import { FaUsers,FaShoppingCart, FaSearch, FaPlus, FaHeart } from 'react-icons/fa'

const ShopPosts = () => {
  
  
    const {searchNewVisible}=useContext(DataContext)

  const products = [
    {
      id: 1,
      title: "Wireless Headphones",
      price: "$99.99",
      image: "https://picsum.photos/200/200?random=7",
      seller: "Tech Store",
      location: "New York, NY",
      rating: 4.5
    },
    {
      id: 2,
      title: "Vintage Watch",
      price: "$299.99",
      image: "https://picsum.photos/200/200?random=8",
      seller: "Luxury Timepieces",
      location: "Los Angeles, CA",
      rating: 4.8
    },
    // Add more products...
  ]

  const categories = ["All", "Electronics", "Fashion", "Home", "Sports", "Books"]

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="fixed top-0 left-0 w-full z-50 bg-white shadow">
        <NavBar />
      </div>
      {searchNewVisible && 
        <SearchBarComp className='shadow-[0_4px_6px_-2px_rgba(0,0,0,0.2)] z-50' />
      }
      
      <div className="container mx-auto pt-16 px-4">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <FaUsers className="text-2xl text-blue-600 mr-2" />
            <h1 className="text-2xl font-bold">Marketplace</h1>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
            + Sell Something
          </button>
        </div>

        {/* Categories */}
        <div className="flex gap-4 mb-6 overflow-x-auto">
          {categories.map((category, index) => (
            <button
              key={index}
              className="px-4 py-2 bg-white rounded-full shadow hover:bg-gray-50 whitespace-nowrap"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {products.map(product => (
            <div key={product.id} className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <button className="absolute top-2 right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <FaHeart className="text-gray-400 hover:text-red-500" />
                </button>
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start">
                  <h3 className="font-semibold">{product.title}</h3>
                  <span className="font-bold text-green-600">{product.price}</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">{product.seller}</p>
                <p className="text-sm text-gray-500">{product.location}</p>
                <button className="mt-3 w-full bg-blue-600 text-white px-4 py-2 rounded-md flex items-center justify-center gap-2">
                  <FaShoppingCart /> View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ShopPosts