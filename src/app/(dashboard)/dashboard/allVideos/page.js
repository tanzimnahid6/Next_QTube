"use client"
import VideoTable from "@/components/VideoTabel"
import { getVideos } from "@/util/getFun"
import { deleteVideo } from "@/util/mutationFun"
import React, { useEffect, useState } from "react"
import Swal from "sweetalert2"

const AllVideos = () => {
  const [videos, setVideos] = useState([])
  const [count, setCount] = useState(1)
  useEffect(() => {
    const fetchVideos = async () => {
      const data = await getVideos()
      setVideos(data)
    }
    fetchVideos()
  }, [count])

  const handDelete = async (id) => {
    const result = await deleteVideo(id)
    if (result.deletedCount == 1) {
      setCount((count) => count + 1)
      Swal.fire("Videos deleted")
    }
  }
  let content
  if (videos.length === 0) {
    content = (
      <div className="text-center font-bold text-3xl text-white">
        Video coming soon.... <br />
        <span className="loading loading-bars loading-lg scale-125 mt-12"></span>
      </div>
    )
  }

  if (videos.length > 0) {
    content = (
      <>
        {videos.map((item, i) => (
          <VideoTable key={i} video={item} handDelete={handDelete} />
        ))}
      </>
    )
  }
  return (
    <div>
      <div className="w-full h-screen">
        <h1 className="text-2xl font-bold mb-4 text-white text-center">
          All Video Details
        </h1>
        {content}
      </div>
    </div>
  )
}

export default AllVideos
