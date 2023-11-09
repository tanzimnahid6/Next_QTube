import { NextResponse } from "next/server"

export const GET = () => {
  return NextResponse.json({ message: "connect api" })
}


export const POST = async (req) => {
  const data = await req.json()
  console.log(data)
  return new Response("Hello, Next.js!")
}
