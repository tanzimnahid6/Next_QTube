import Description from "@/components/Description"
import Player from "@/components/Player"
import { getSingleVideo } from "@/util/getFun"
import React from "react"

const SingleVideos = async ({ params }) => {
  const id = params.slug
  const video = await getSingleVideo(id)
  let content = null
  if (id) {
    content = (
      <>
        <Player link={video?.link} title={video?.title} />
        <Description video={video}></Description>
      </>
    )
  } else {
    content = <h1>No video found</h1>
  }
  return(
    <section className="pt-6 pb-20 min-h-[calc(100vh_-_157px)]">
      <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
        <div className="grid grid-cols-3 gap-2 lg:gap-8">
          <div className="col-span-full w-full space-y-8 lg:col-span-2">
            {content}
          </div>
          <h1>Coming soon....</h1>
        </div>
      </div>
    </section>
  )
}

export default SingleVideos
