"use client"
import React from "react"
import { ImYoutube } from "react-icons/im"
import { IoIosShareAlt } from "react-icons/io"
import { BsArrowDownShort } from "react-icons/bs"
import { BiSolidLike, BiSolidDislike } from "react-icons/bi"

const Description = ({ video }) => {
  const { title, author, like, dislike, _id } = video || {}
  const handleLike = (id) => {
    console.log(id)
  }

  return (
    <div className="w-full border-2 border-gray-300 p-2 md:p-4 rounded mb-4">
      <div className="mb-2">
        <span className="text-black font-bold text-lg md:text-xl">{title}</span>
      </div>
      <div className="flex flex-col md:flex-row justify-between border-b-2 border-gray-400 pb-2 mb-2">
        <div className="flex flex-col md:flex-row gap-2 md:items-center font-bold cursor-pointer">
          <span className="border-2 border-gray-200 p-1 rounded-lg">
            <ImYoutube size={30}></ImYoutube>
          </span>
          <div className="flex flex-col md:flex-row items-center">
            <span>{author}</span>
            <span className="text-xs font-mono md:ml-2">1M Subscribers</span>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-2">
          <div className="flex items-center gap-1">
            <span
              onClick={() => handleLike(_id)}
              className="cursor-pointer hover:scale-110 transition-transform"
            >
              <BiSolidLike size={24}></BiSolidLike>
            </span>
            <span>{like} | </span>
            <span>
              <BiSolidDislike
                className="cursor-pointer hover:scale-110 transition-transform"
                size={24}
              ></BiSolidDislike>
            </span>
          </div>
          <div className="flex items-center gap-1">
            <span>
              <IoIosShareAlt size={24}></IoIosShareAlt>
            </span>
            <h1 className="hidden md:block">Share</h1>
          </div>
          <div className="flex items-center gap-1">
            <span>
              <BsArrowDownShort size={24}></BsArrowDownShort>
            </span>
            <h1 className="hidden md:block">Download</h1>
          </div>
        </div>
      </div>
      <div className="flex justify-center md:hidden mt-2">
        <span className="cursor-pointer p-2 rounded-3xl bg-gray-800 text-white">
          Subscribe
        </span>
      </div>
    </div>
  )
}

export default Description
