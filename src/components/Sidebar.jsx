"use client"
import { SidebarContext } from "@/app/(dashboard)/dashboard/layout"
import Link from "next/link"
import React, { useContext } from "react"
import { TiDeleteOutline } from "react-icons/ti"
const Sidebar = () => {
  const { isOpen, setIsOpen } = useContext(SidebarContext)
  const navLinks = [
    {
      title: "Add Video",
      path: "/dashboard/addVideo",
    },
    {
      title: "My Video",
      path: "/dashboard/myVideos",
    },
    {
      title: "All Video",
      path: "/dashboard/allVideos",
    },
  ]
  return (
    <div>
      <div className="flex items-center justify-end gap-4">
        <h1 className="text-center text-2xl font-bold ">Dashboard</h1>
        <span
          data-tip="Close"
          onClick={() => setIsOpen(!isOpen)}
          className="mt-1 hover:scale-110 transition-transform tooltip  tooltip-right"
        >
          <TiDeleteOutline size={28}></TiDeleteOutline>
        </span>
      </div>
      <div className="mt-4">
        <ul className="flex flex-col items-center gap-4 ">
          {navLinks.map((item, i) => {
            return (
              <Link href={item.path} key={i}>
                <li className="border-2 border-gray-600 hover:scale-110 transition-transform p-1 rounded font-bold">
                  {item.title}
                </li>
              </Link>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
