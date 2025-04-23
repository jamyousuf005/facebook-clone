import React, { useState } from "react";
import { Users, MessageCircle, ShoppingBag, Clock, Gamepad, Calendar, Home, Video, Bookmark, CalendarDays, ChevronDown, ChevronUp } from "lucide-react";
import profilePic from "../../Assets/dp.jpg"; // Your profile image
import { useContext } from "react";
import { AuthContext } from "./AuthContext";

const menuItems = [
  { id: 0, icon: <img src={profilePic} alt="Profile" 
  className="w-10 h-10 rounded-full object-cover" />,
   label: "Jam Yousuf" },
  { id: 1, icon: <Users />, label: "Friends" },
  { id: 2, icon: <Users />, label: "Groups" },
  { id: 3, icon: <MessageCircle />, label: "Messenger" },
  { id: 4, icon: <Video />, label: "Watch" },
  { id: 5, icon: <ShoppingBag />, label: "Marketplace" },
  { id: 6, icon: <Bookmark />, label: "Saved" },
  { id: 7, icon: <Clock />, label: "Memories" },
  { id: 8, icon: <Calendar />, label: "Events" },
  { id: 9, icon: <CalendarDays />, label: "Calendar" },
  { id: 10, icon: <Gamepad />, label: "Gaming" }
];

const extraItems = [
  { id: 11, icon: <Video />, label: "Reels" },
  { id: 12, icon: <Clock />, label: "Recent Activity" },
  { id: 13, icon: <Gamepad />, label: "Gaming Videos" },
  { id: 14, icon: <ShoppingBag />, label: "Fundraisers" },
  { id: 15, icon: <MessageCircle />, label: "Messenger" }
];

const Sidebar = () => {
  const [showMore, setShowMore] = useState(false);
  const {userDetails,fetchUserData}=useContext(AuthContext)


  
  return (
    <div className="overflow-y-auto h-full"> {/* Ensures scrolling works */}
      <div className="sidebar-container h-full w-[80%] p-3 pr-1">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.id} className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-300 cursor-pointer transition">
              <span className={`text-2xl ${item.id === 0 ? "" : "text-blue-600"}`}>{item.icon}</span>
              <span className="text-lg font-medium text-gray-800">{item.label}</span>
            </li>
          ))}

          {/* See More Button */}
          <li
            className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-200 cursor-pointer transition"
            onClick={() => setShowMore(!showMore)}
          >
            <span className="text-2xl text-gray-600">{showMore ? <ChevronUp /> : <ChevronDown />}</span>
            <span className="text-lg font-medium text-gray-800">See More</span>
          </li>

          {/* Extra Menu Items */}
          {showMore &&
            extraItems.map((item) => (
              <li key={item.id} className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-200 cursor-pointer transition">
                <span className="text-2xl text-blue-600">{item.icon}</span>
                <span className="text-lg font-medium text-gray-800">{item.label}</span>
              </li>
            ))}
        </ul>

        <div className="text-sm text-gray-600 mt-auto space-y-1">
          <br />
          <hr />
          <p className="text-xl">Your shortcuts</p>
          <div className="space-y-0.5 flex gap-3">
            <p>Privacy</p>
            <p>Terms</p>
            <p>Advertising</p>
            <p>Ad choices</p>
            <p>Cookies</p>
          </div>
          <p>Meta © 2025</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;