import DBconnect from "@/services/DBconnect"
import { ObjectId } from "mongodb"
import { NextResponse } from "next/server"


//==========all videos get api ---->http://localhost:3000/api/videos

//and single video get api using query ------
//http://localhost:3000/api/videos?id=654c6a4189d8a41b90c6ca9f
export const GET = async (req) => {
  const db = await DBconnect()
  const videosCollection = await db.collection("videos")
  const { searchParams } = new URL(req.url)
  const id = searchParams.get("id")
  if (id) {
    const query = { _id: new ObjectId(id) }
    const video1 = await videosCollection.findOne(query)
    return NextResponse.json(video1)
  }
  const data = await videosCollection.find().toArray()
  return NextResponse.json(data)
}


//new data post api -> http://localhost:3000/api/videos
export const POST = async (req) => {
  const db = await DBconnect()
  const videosCollection = await db.collection("videos")
  const data = await req.json()
  const result = await videosCollection.insertOne(data)
  return NextResponse.json(result)
}

//Delete single video http://localhost:3000/api/videos?id=654c6a4189d8a41b90c6ca9f
export const DELETE = async (req)=>{
  const db = await DBconnect()
  const videosCollection = await db.collection("videos")
  
  const { searchParams } = new URL(req.url)
  const deletedId = searchParams.get("id")
  console.log(deletedId);
  const query = { _id: new ObjectId(deletedId) }
  const result = await videosCollection.deleteOne(query)
  return NextResponse.json(result)

}