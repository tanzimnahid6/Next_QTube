import React from "react"
import { ImYoutube } from "react-icons/im"
import { IoIosShareAlt } from "react-icons/io"
import { BsArrowDownShort } from "react-icons/bs"
import { BiSolidLike, BiSolidDislike } from "react-icons/bi"

const Description = ({ video }) => {
  const { id, title, duration, author, views, date, thumbnail,like,dislike } = video
  return (
    <div className="w-full border-2 border-gray-300 p-1 rounded h-28">
      <div>
        <span className="text-black font-bold">{title}</span>
      </div>
      <div className="flex justify-between">
        <div className="flex gap-2 items-center font-bold cursor-pointer">
          <span className="border-2 border-gray-200 p-1 rounded-lg">
            <ImYoutube size={30}></ImYoutube>
          </span>
          <div className="flex flex-col">
            <span>Sample Music</span>
            <span className="text-xs font-mono">1M Subscribers</span>
          </div>

          <span className="border-2 p-2 rounded-3xl bg-gray-800 text-white">
            Subscribe
          </span>
        </div>
        <div className="font-bold flex gap-2">
          <div className="flex items-center gap-1 border-2 border-gray-600 p-1 px-2 rounded-3xl">
            <span className="flex gap-1">
              <BiSolidLike
                className="cursor-pointer hover:scale-110 transition-transform"
                size={24}
              ></BiSolidLike>
              <span>{like} | </span>
            </span>
            <span>
              <BiSolidDislike
                className="cursor-pointer hover:scale-110 transition-transform"
                size={24}
              ></BiSolidDislike>
            </span>
          </div>
          <div className="flex items-center gap-1 border-2 border-gray-600 p-1 px-2 rounded-3xl">
            <span>
              <IoIosShareAlt size={24}></IoIosShareAlt>
            </span>
            <h1>Share</h1>
          </div>
          <div className="flex items-center  border-2 border-gray-600 p-1 px-2 rounded-3xl">
            <span>
              <BsArrowDownShort size={24}></BsArrowDownShort>
            </span>
            <h1>Download</h1>
          </div>
          <span></span>
        </div>
      </div>
    </div>
  )
}

export default Description
