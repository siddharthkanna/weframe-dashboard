"use client";
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import ConditionalSidebar from "./ConditionalSidebar";

const NavBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <nav className="w-full bg-[#15132b] text-white flex justify-between items-center gap-10 px-2 py-4 font-cairo shadow-inner">
      <div className="bg-[#15132b] flex flex-row gap-10 justify-between w-full ">
        {/* Search Bar */}
        <div className="hidden lg:flex items-center justify-start mt-2 ml-12  rounded-full w-96 h-16 bg-[#211A75] ">
          <img className="p-2 ml-6 w-10 h-10" src="search_icon.svg"></img>
          <input
            type="text"
            placeholder="Search Here"
            className="pl-4 rounded-3xl text-sm bg-transparent text-black"
          />
        </div>

        {/* Other Menu */}
        <p className="hidden lg:flex text-[#5E16A2] text-xs font-bold  justify-center items-center underline">
          OTHER MENUS
        </p>

        {/* Icons */}
        <div className="hidden lg:flex space-x-4 justify-center items-center gap-2">
          <div>
            <img className="w-6 h-6" src="bell_icon.svg"></img>
            <div className="flex absolute top-5 ml-3 p-1 w-4 h-4  bg-[#5DCFFF] rounded-full text-[10px] justify-center items-center">
              12
            </div>
          </div>{" "}
          {/* Activity */}
          <div>
            <img className="w-6 h-6" src="frame_icon.svg"></img>
            <div className="flex absolute top-5 ml-3 p-1 w-4 h-4  bg-[#5DCFFF] rounded-full text-[10px] justify-center items-center">
              {" "}
              5
            </div>
          </div>{" "}
          {/* Notification */}
          <div>
            <img className="w-6 h-6" src="check_icon.svg"></img>
            <div className="flex absolute top-5 ml-3 p-1  w-4 h-4 bg-[#5DCFFF] rounded-full text-[10px] justify-center items-center">
              {" "}
              2
            </div>
          </div>{" "}
          {/* Check */}
          <div>
            <img className="w-6 h-6" src="calender_icon.svg"></img>
            <div className="flex absolute top-5 ml-3 p-1 w-4 h-4  bg-[#5DCFFF] rounded-full text-[10px] justify-center items-center">
              12
            </div>
          </div>{" "}
          {/* Folder */}
        </div>

        {/* Language Selector */}
        <div className="hidden lg:flex items-center  bg-[#211A75] rounded-full px-2 h-14 py-2">
          <img className="rounded-3xl w-8  h-8" src="./us_profile.png"></img>
          <select className="text-white bg-transparent rounded">
            <option value="en">English</option>
            {/* Add more languages here */}
          </select>
        </div>

        {/* Header title */}
        <div className="flex lg:hidden flex-row items-center justify-center gap-4">
          <img
            className="w-8 h-8"
            src="hamburger.svg"
            onClick={toggleSidebar}
          />
          <p className="text-lg">weframetech</p>
        </div>

        {/* Condtional sidebar */}
        {isSidebarOpen && (
          <div
            className="flex flex-col w-full fixed backdrop-blur top-0 left-0 z-50"
            aria-modal="true"
            role="dialouge"
          >
            <div className="flex flex-col bg-[#15132b] w-4/5 lg:w-2/6  z-20 gap-4 h-screen">
              <div className="flex flex-row items-center justify-between px-4 py-4 ">
                <p className="text-xl px-4 py-2">weframetech</p>
                <img
                  className="w-8 h-8"
                  src="back_icon.svg"
                  onClick={toggleSidebar}
                />
              </div>
              <ConditionalSidebar />
            </div>
          </div>
        )}

        {/* User Profile */}
        <div className="flex items-center space-x-2">
          <div className="bg-[#1E1C3A] w-0.5 h-10 "></div>
          <div className="w-10 h-10 rounded-xl bg-white" />
          <div className="flex flex-col">
            <p className="text-xs">Instructor Day</p>
            <p className="text-xs text-[#5F6CDC]">Super Admin</p>
          </div>
          <img className="w-6 h-6 items-center" src="./down_angle.svg"></img>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
