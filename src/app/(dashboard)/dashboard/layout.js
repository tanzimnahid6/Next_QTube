"use client"
import Sidebar from "@/components/Sidebar"
import React, { createContext, useState } from "react"
export const SidebarContext = createContext()

const DashboardLayout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true)
  return (
    <SidebarContext.Provider value={{ isOpen, setIsOpen }}>
      <div className="flex w-full  text-white bg-gray-900 h-screen">
        <div className={`border-2 border-red-400 w-64  ${!isOpen && "hidden"}`}>
          <Sidebar></Sidebar>
        </div>
        <div className="border-2 border-red-400 w-full "> {children}</div>
      </div>
    </SidebarContext.Provider>
  )
}

export default DashboardLayout
