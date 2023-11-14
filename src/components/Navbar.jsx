"use client"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

const navLink = [
  {
    path: "/",
    title: "Home",
  },
  {
    path: "/about",
    title: "About",
  },
  {
    path: "/blog",
    title: "Blog",
  },
  {
    path: "/login",
    title: "Login",
  },
  {
    path: "/dashboard",
    title: "Dashboard",
  },
]
const Navbar = () => {
  const [open, setOpen] = useState(false)
  const currentRoute = usePathname()





  return (
    <div className="bg-slate-900 text-white p-4 flex justify-between">
      <Link href={"/"}>
        <div className="text-2xl font-bold text-red-500 border-2 border-red-500 rounded hover:scale-110 transition-transform">
          QTUBE
        </div>
      </Link>
      <div>
        <ul className="flex gap-4 w-full justify-center font-semibold">
          {navLink.map((item, i) => {
            return (
              <li
                className={currentRoute === item.path ? "text-red-500" : ""}
                key={i}
              >
                <Link href={item.path}>{item.title}</Link>
              </li>
            )
          })}
        </ul>
      </div>
      <div>
        {/* user dropdown side */}
        <div
          className={`dropdown dropdown-end text-black`}
        >
          <label  tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <Image
                src={"https://i.ibb.co/C8gkQ7Y/nahid.jpg"}
                alt="Picture of the author"
                width={500}
                height={500}
                
              />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>Settings</li>
            <li>Logout</li>
            <Link href={"/dashboard"}>
              <li>Dashboard</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
