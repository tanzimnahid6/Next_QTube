'use client'
import React, { useContext } from "react"
import { GiHamburgerMenu } from 'react-icons/gi';
import { SidebarContext } from "./layout";
const Dashboard = () => {
    const {isOpen,setIsOpen} = useContext(SidebarContext)
  return (
    <div>
      <div className="flex items-center justify-between px-4">
        <span onClick={()=>setIsOpen(!isOpen)} data-tip="Open Dashboard" className={`tooltip  tooltip-right mt-2 transition-transform hover:scale-125 ${isOpen && 'invisible'}`}><GiHamburgerMenu size={24} ></GiHamburgerMenu></span>
        <h1 className="text-center font-bold">Welcome to youtube Dashboard</h1>
        <span></span>
      </div>
    </div>
  )
}

export default Dashboard
