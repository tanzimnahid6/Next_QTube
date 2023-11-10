"use client"
import Sidebar from "@/components/Sidebar"
import React, { createContext, useState } from "react"
export const SidebarContext = createContext()
import { GiHamburgerMenu } from "react-icons/gi"

const DashboardLayout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true)
  return (
    <SidebarContext.Provider value={{ isOpen, setIsOpen }}>
      <div className="flex w-full  text-white bg-gray-900 h-screen">
        <div className={`border-2 border-red-400 w-64  ${!isOpen && "hidden"}`}>
          <Sidebar></Sidebar>
        </div>
        <div className="border-2 border-red-400 w-full ">
          <div className="flex items-center justify-between px-4">
            <span
              onClick={() => setIsOpen(!isOpen)}
              data-tip="Open Dashboard"
              className={`tooltip  tooltip-right mt-2 transition-transform hover:scale-125 ${
                isOpen && "invisible"
              }`}
            >
              <GiHamburgerMenu size={24}></GiHamburgerMenu>
            </span>

            <span></span>
          </div>
          {children}
        </div>
      </div>
    </SidebarContext.Provider>
  )
}

export default DashboardLayout
