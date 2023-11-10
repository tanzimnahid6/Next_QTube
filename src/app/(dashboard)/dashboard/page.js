'use client'
import React, { useContext } from "react"
import { GiHamburgerMenu } from 'react-icons/gi';
import { SidebarContext } from "./layout";
const Dashboard = () => {
    const {isOpen,setIsOpen} = useContext(SidebarContext)
  return (
    <div>
      <div className="flex items-center justify-between px-4">
        <span onClick={()=>setIsOpen(!isOpen)} className={`mt-2 ${isOpen && 'invisible'}`}><GiHamburgerMenu size={24}></GiHamburgerMenu></span>
        <h1 className="text-center">Welcome to youtube Dashboard</h1>
        <span></span>
      </div>
    </div>
  )
}

export default Dashboard
