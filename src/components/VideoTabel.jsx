// components/VideoTable.js
"use client"
import React from "react"

const VideoTable = ({ video ,handDelete}) => {
   
  return (
    <div className="overflow-x-auto text-xs text-black text-left">
      <table className="w-full bg-white border border-gray-500">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Title</th>
            <th className="py-2 px-4 border-b">Author</th>
            <th className="py-2 px-4 border-b">Date</th>
            <th className="py-2 px-4 border-b">Duration</th>
            <th className="py-2 px-4 border-b">Views</th>
            <th className="py-2 px-4 border-b">Dislikes</th>
            <th className="py-2 px-4 border-b">Tag</th>
            <th className="py-2 px-4 border-b">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-2 px-4 border-b w-52">
              {video.title?.slice(0, 30)}
            </td>
            <td className="py-2 px-4 border-b w-32">{video.author}</td>
            <td className="py-2 px-4 border-b w-36">{video.date}</td>
            <td className="py-2 px-4 border-b w-32">{video.duration}</td>
            <td className="py-2 px-4 border-b w-32">{video.views}</td>
            <td className="py-2 px-4 border-b w-32">{video.dislike}</td>
            <td className="py-2 px-4 border-b w-32">{video.tag}</td>
            <td>
              <span onClick={()=>handDelete(video._id)} className="btn btn-error btn-xs font-bold hover:scale-110 transition-transform">Delete</span>
              <span className="btn btn-primary btn-xs font-bold hover:scale-110 transition-transform mx-2">Update</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default VideoTable
