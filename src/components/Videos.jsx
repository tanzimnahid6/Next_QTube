"use client"
import { getVideos } from "@/util/getFun"
import React, { useEffect, useState } from "react"
import Video from "./Video"


// eslint-disable-next-line @next/next/no-async-client-component
const Videos = () => {
  const [videos, setVideos] = useState([])

  useEffect(() => {
    const fetchVideos = async () => {
      const data = await getVideos()
      setVideos(data)
    }
    fetchVideos()
  }, [])

  let content
  if (videos?.length === 0) {
    content = (
      <div className="text-center font-bold w-full b">
        <h1>Loading...</h1>
        <span className="loading loading-bars loading-lg"></span>
      </div>
    )
  }
  if (videos?.length > 0) {
    content = videos.map((video, i) => <Video key={i} video={video}></Video>)
  }
  return <>{content}</>
}

export default Videos
