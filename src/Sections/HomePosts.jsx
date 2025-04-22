import React, { useContext, useState, useEffect } from "react";
import { DataContext } from "../Components/DataContext";
import SearchBarComp from "../Components/SearchBarComp";
import Sidebar from "../Components/SideBar";
import HomeMiddle from "../Components/HomeMiddle";
import NavBar from "../Components/NavBar";
import RightSideBar from "../Components/RightSideBar";

const HomePosts = () => {
  const { searchNewVisible } = useContext(DataContext);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(window.scrollY > 10); // Hide when scrolled more than 10px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 ">
      {/* Fixed NavBar at the top */}
      <div className="fixed top-0 left-0 w-full z-50 bg-white shadow">
        <NavBar />
      </div>

      {/* Search bar appears only if not scrolling */}
      {searchNewVisible && !isScrolling && (
        <div className="fixed top-16 left-0 w-full z-40 shadow-[0_4px_6px_-2px_rgba(0,0,0,0.2)]">
          <SearchBarComp />
        </div>
      )}

      {/* Main content container */}
      <div className="flex pt-16 w-full ">
        {/* Left Sidebar - Fixed */}
        <div className="w-[30%] bg-gray-100 hidden lg:block">
          <div className="sticky top-16 h-[calc(100vh-64px)]  overflow-y-auto">
            <Sidebar />
          </div>
        </div>

        {/* Middle Content - Scrollable */}
        <div className="w-[100%] lg:w-[50%] bg-gray-100 min-h-screen">
          <HomeMiddle />
        </div>

        {/* Right Sidebar - Fixed */}
        <div className="hidden lg:block  lg:w-[30%] bg-gray-100 ">
          <div className="sticky top-16 h-[calc(100vh-64px)]">
            <div className="p-4">
              <RightSideBar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePosts;
