import React, { useContext } from 'react';
import { Users, Calendar, Bookmark, Clock, Gift, Video, ShoppingBag } from 'lucide-react';
import earphone from '../../Assets/earphone.jpg'
import { DataContext } from './DataContext';

const RightSideBar = () => {
    const {stories} = useContext(DataContext)
    
  return (
    <div className="right-sidebar">
      <div className="right-sidebar-container  pl-18 p-4 flex flex-col gap-4 h-screen sticky top-0">
        {/* Sponsored Section */}
        <div className="mb-2 ">
          <h3 className="text-lg font-semibold text-gray-500 mb-2">Sponsored</h3>
          <div className="bg-white rounded-lg shadow overflow-hidden hover:bg-gray-100 cursor-pointer p-2">
            <div className="flex gap-3">
              <img src={earphone} alt="Ad" className="rounded-lg w-20 h-20 object-cover" />
              <div>
                <h4 className="font-medium">Premium Headphones</h4>
                <p className="text-sm text-gray-500">shopheadphones.com</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Divider */}
        <hr className="border-gray-300" />
        
        {/* Birthdays */}
        <div className="mb-2">
          <h3 className="text-lg font-semibold text-gray-500 mb-2">Birthdays</h3>
          <div className="flex items-center gap-2 cursor-pointer p-2 hover:bg-gray-100 rounded-lg">
            <Gift size={20} className="text-blue-500" />
            <p className="text-sm"><span className="font-medium">Jane Smith</span> 
            and <span className="font-medium">2 others</span> have birthdays today.</p>
          </div>
        </div>
        
        {/* Divider */}
        <hr className="border-gray-300" />
        
        {/* Contacts */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-lg font-semibold text-gray-500">Contacts</h3>
            <div className="flex gap-2">
              <div className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-200 cursor-pointer">
                <Video size={18} className="text-gray-500" />
              </div>
              <div className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-200 cursor-pointer">
                <Users size={18} className="text-gray-500" />
              </div>
            </div>
          </div>
          
          {/* Contact List */}
          <div className="flex flex-col gap-1">
            {stories.map((list, index) => (
              <div key={index} className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
                <div className="relative">
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                </div>
                <div className='flex gap-1'>
                  <img className='w-[50px] h-[50px] rounded-full'
                  src={list.profileImg} alt={list.img} />
                  <p className="font-medium">{list.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Group Conversations */}
        <div className="mt-2">
          <h4 className="text-base font-semibold text-gray-500 mb-1">Group conversations</h4>
          <div className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
              <Users size={16} className="text-gray-600" />
            </div>
            <p className="font-medium">Create New Group</p>
          </div>
        </div>
        
        {/* Your shortcuts */}
        <div className="mt-2">
          <h3 className="text-lg font-semibold text-gray-500 mb-2">Your shortcuts</h3>
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
              <Calendar size={20} className="text-blue-500" />
              <p className="font-medium">Events</p>
            </div>
            <div className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
              <Clock size={20} className="text-purple-500" />
              <p className="font-medium">Memories</p>
            </div>
            <div className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
              <Bookmark size={20} className="text-yellow-500" />
              <p className="font-medium">Saved</p>
            </div>
            <div className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
              <ShoppingBag size={20} className="text-red-500" />
              <p className="font-medium">Marketplace</p>
            </div>
          </div>
        </div>
        
        {/* Footer Links */}
        <div className="mt-4 text-xs text-gray-500">
          <div className="flex flex-wrap gap-x-2">
            <a href="#" className="hover:underline">Privacy</a> ·
            <a href="#" className="hover:underline">Terms</a> ·
            <a href="#" className="hover:underline">Advertising</a> ·
            <a href="#" className="hover:underline">Ad Choices</a> ·
            <a href="#" className="hover:underline">Cookies</a> ·
            <a href="#" className="hover:underline">More</a> ·
          </div>
          <div className="mt-2">
            Meta © 2025
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSideBar;