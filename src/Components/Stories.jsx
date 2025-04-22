import React, { useContext, useRef } from "react";
import { FaPlus, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import profilePic from "../../Assets/dp.jpg"; // Your profile image
import { IoMdGitMerge } from "react-icons/io";
import { DataContext } from "./DataContext";


 

export default function Stories() {
  const scrollRef = useRef(null);
  const {stories} = useContext(DataContext)

  // Scroll function
  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 150; // Adjust for smooth scrolling
      if (direction === "left") {
        scrollRef.current.scrollLeft -= scrollAmount;
      } else {
        scrollRef.current.scrollLeft += scrollAmount;
      }
    }
  };

  return (
    <div className="relative w-full md:w-[80%] p-5 md:p-4 ">
      {/* Left Scroll Button */}
      <button
        className="absolute left-0 top-1/2 -translate-y-1/2
         bg-white p-2 rounded-full shadow-md z-10 md:flex"
        onClick={() => scroll("left")}
      >
        <FaChevronLeft className="text-gray-600 text-lg" />
      </button>

      {/* Stories Container */}
      <div ref={scrollRef} className="flex space-x-3 overflow-hidden scroll-smooth w-full">
        {/* User Story (Create Story) */}
        <div className="relative w-24 h-40 rounded-xl overflow-hidden cursor-pointer shrink-0">
          <img src={profilePic} alt="Add Story" className="w-full h-full object-cover brightness-75" />
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white p-1.5 rounded-full border-4 border-white">
            <FaPlus className="text-lg" />
          </div>
          <p className="absolute bottom-1 text-white text-sm text-center w-full">Create Story</p>
        </div>

        {/* Other Stories */}
        {stories.map((story) => (
          <div key={story.id} className="relative w-24 h-40 rounded-xl overflow-hidden cursor-pointer shrink-0">
            <img src={story.img} alt={story.name} className="w-full h-full object-cover brightness-75" />
            <div className="absolute top-2 left-2 w-8 h-8 rounded-full border-2 border-blue-500 overflow-hidden">
              {/* Random Avatar for each user */}
              <img
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="absolute bottom-1 text-white text-sm text-center w-full">{story.name}</p>
          </div>
        ))}
      </div>

      {/* Right Scroll Button */}
      <button
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 
        rounded-full shadow-md z-10  md:flex"
        onClick={() => scroll("right")}
      >
        <FaChevronRight className="text-gray-600 text-lg" />
      </button>
    </div>
  );
}
