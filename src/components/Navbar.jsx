"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

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
const currentRoute = usePathname()
  return (
    <div className="bg-slate-900 text-white p-4 ">
      <ul className="flex gap-4 w-full justify-center font-semibold">
        {navLink.map((item,i)=>{
            return <li  className={currentRoute === item.path ? "text-red-500" : ""} key={i}><Link  href={item.path}>{item.title}</Link></li>
        })}
      </ul>
    </div>
  )
}

export default Navbar
