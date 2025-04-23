import React, { useState, useContext } from "react";
import { Users, MessageCircle, ShoppingBag, Clock, Gamepad, Calendar, Video, Bookmark, CalendarDays, ChevronDown, ChevronUp } from "lucide-react";
import profilePic from "../../Assets/dp.jpg"; // Default profile image
import { AuthContext } from "./AuthContext";

const Sidebar = () => {
  const [showMore, setShowMore] = useState(false);
  const { user, userDetails } = useContext(AuthContext);

  // Generate initials as fallback if no profile pic
  const getInitials = () => {
    if (userDetails) {
      const firstName = userDetails.firstName || "";
      const lastName = userDetails.lastName || "";
      return (firstName.charAt(0) +" "+lastName.charAt(0)).toUpperCase();
    }
    return "FB"; // Default fallback
  };

  // Get the full name from user details
  const getFullName = () => {
    if (userDetails) {
      return `${userDetails.firstName || ""} ${userDetails.lastName || ""}`.trim();
    }
    return "Facebook User"; // Default fallback
  };

  // Create dynamic menu items with user profile
  const menuItems = [
    { 
      id: 0, 
      icon: userDetails ? (
        <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white text-lg">
          {getInitials()}
        </div>
      ) : (
        <img src="" alt="" className="w-10 h-10 rounded-full object-cover" />
      ), 
      label: getFullName()
    },
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

  return (
    <div className="overflow-y-auto h-full">
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