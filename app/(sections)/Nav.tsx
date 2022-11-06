'use client'
import Link from "next/link";
import { useState } from "react"

export default function Nav() {
  const [status, setStatus] = useState('closed');

  const toggleNav = () => {
    if (status === 'closed') {
      setStatus('open')
    } else {
      setStatus('closed')
    }
  }

  const navItems = [{navItem: 'About Me', link: '/about'}, {navItem: 'Work', link: '/works'}, {navItem: 'Blog', link: '/blog'}]

  return (
    <div>
      <nav className="absolute w-full flex justify-between z-20">
        <div className="logo px-16 py-8 flex">
          <h1 className="text-white font-bold text-5xl">Ntare</h1>
          <span className="bg-green-500 relative">
            <div className="h-2 w-2 absolute bottom-1.5 left-0 bg-yellow-400 rounded-md"></div>
          </span>
        </div>
        <div className={status === "closed" ? "w-10 my-9 mx-16 cursor-pointer" : "w-10 my-9 mx-16 cursor-pointer"} onClick={toggleNav}>
          <div className={status === "closed" ? "transiton duration-700 ease-in-out w-8 h-0.5 bg-white mt-1" : "transiton duration-700 ease-in-out w-10 h-0.5 bg-white rotate-45 mt-[1.2rem]"}></div>
          <div className={status === "closed" ? "w-10 h-0.5 bg-white mt-2" : ""}></div>
          <div className={status === "closed" ? "transiton duration-700 ease-in-out w-9 h-0.5 bg-white mt-2" : "transiton duration-700 ease-in-out w-10 h-0.5 bg-white -mt-0.5 ml-0.4 -rotate-45"}></div>
        </div>
      </nav>
      <div className={status === "closed" ? "transiton duration-700 ease-in-out" : "transiton duration-700 ease-in-out z-10 w-full h-full bg-black absolute flex items-center"}>
        <div className={status === "closed" ? "hidden transiton duration-700 ease-in-out" : "transiton duration-700 ease-in-out absolute z-20 text-white w-full text-center font-extrabold text-4xl"}>
          {navItems.map((item) => (
            <div key={item.navItem} className={status === "closed" ? "" : "py-8"}>
              <Link href={item.link}>{item.navItem}</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}