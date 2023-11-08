import { getVideos } from "@/util/getFun"
import React from "react"
import Video from "./Video"

const Videos = async () => {
  const videos = await getVideos()
  console.log(videos)
  let content
  if (videos?.length == 0) {
    content = <h1>No video found </h1>
  }
  if (videos?.length > 0) {
    content = videos.map((video) => (
      <Video key={video.id} video={video}></Video>
    ))
  }
  return <>{ content }</>
}

export default Videos
