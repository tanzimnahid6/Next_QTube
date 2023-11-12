"use client"
import React, { createContext, useState, useEffect } from "react";
import Sidebar from "@/components/Sidebar";
import { GiHamburgerMenu } from "react-icons/gi";

export const SidebarContext = createContext();

const DashboardLayout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Close the sidebar by default on mobile devices
    const isMobile = window.innerWidth <= 640;
    setIsOpen(!isMobile);
  }, []);

  return (
    <SidebarContext.Provider value={{ isOpen, setIsOpen }}>
      <div className="flex w-full text-white bg-gray-900 h-screen">
        <div className={`border-2 border-red-400 w-64 ${!isOpen && "hidden"}`}>
          <Sidebar />
        </div>
        <div className="border-2 border-red-400 w-full">
          <div className="flex items-center justify-between px-4">
            <span
              onClick={() => setIsOpen(!isOpen)}
              data-tip={isOpen ? "Close Dashboard" : "Open Dashboard"}
              className={`tooltip tooltip-right mt-2 transition-transform hover:scale-125 ${isOpen && 'hidden'}`}
            >
              <GiHamburgerMenu size={24}></GiHamburgerMenu>
            </span>

            <span></span>
          </div>
          {children}
        </div>
      </div>
    </SidebarContext.Provider>
  );
};

export default DashboardLayout;
