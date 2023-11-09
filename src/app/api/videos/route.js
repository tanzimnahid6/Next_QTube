import DBconnect from "@/services/DBconnect"
import { ObjectId } from "mongodb"
import { NextResponse } from "next/server"

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
