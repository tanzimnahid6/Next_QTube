import { NextResponse } from "next/server"
import db from "../../../../db.json"
export const GET = () => {
    const videos = db.videos
    return NextResponse.json(videos)
}
