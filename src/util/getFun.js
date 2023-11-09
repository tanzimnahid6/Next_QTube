import DBconnect from "@/services/DBconnect"
import { ObjectId } from "mongodb"

export const getVideos = async () => {
  const db = await DBconnect()
  const videosCollection = await db.collection("videos")
  const data = await videosCollection.find().toArray()
  // console.log(data);

  // const res = await fetch("http://localhost:3002/api/videos", {
  //   cache: "no-cache",
  // })
  // const videos = await res.json()
  return data
}

export const getSingleVideo = async (id) => {
  const db = await DBconnect()
  const videosCollection = await db.collection("videos")

  const query = { _id: new ObjectId(id) }

  const video1 = await videosCollection.findOne(query)
  console.log(video1)

  return video1 || {}
}
