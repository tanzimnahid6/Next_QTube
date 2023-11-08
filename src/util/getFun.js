export const getVideos = async () => {
  const res = await fetch("http://localhost:3000/videos",{
    cache:'no-cache'
  })
  const videos = await res.json()
  return videos
}
export const getSingleVideo = async (id)=>{
  const res = await fetch(`http://localhost:3000/videos/${id}`)
  const video = await res.json()
  return video
}