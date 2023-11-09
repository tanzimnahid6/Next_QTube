import DBconnect from "@/services/DBconnect"

export const getVideos = async () => {

  const db = await DBconnect()
  const videosCollection = await db.collection("videos")
  const data = await videosCollection.find().toArray()
  console.log('hello')




  const res = await fetch("http://localhost:3002/api/videos", {
    cache: "no-cache",
  })
  const videos = await res.json()
  return data
}

export const getSingleVideo = async (id) => {
  const res = await fetch(`http://localhost:3000/videos/${id}`, {
    cache: "no-cache",
  })
  const video = await res.json()
  return video
}
