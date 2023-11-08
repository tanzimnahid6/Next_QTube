import Image from "next/image"
import Link from "next/link"



export default function Video({ video }) {
  const { id, title, duration, author, views, date ,thumbnail} = video
  return (
    <div className="col-span-12 sm:col-span-6 md:col-span-3 duration-300 hover:scale-[1.03]">
      <div className="w-full flex flex-col">
        <div className="relative">
          <Link href={`/video/4`}>
          <Image
                src={thumbnail}
                alt='thumbnail  picture'
                width={300}
                height={300}
             
            />
          </Link>

          <p className="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py">
            {duration}
          </p>
        </div>

        <div className="flex flex-row mt-2 gap-2">
          

          <div className="flex flex-col">
            <Link href="/videos/1">
              <p className="text-slate-900 text-sm font-semibold">
                {title}
              </p>
            </Link>
            <span className="text-gray-400 text-xs hover:text-gray-600">
            Next QTube
            </span>
            <p className="text-gray-400 text-xs">{views} views . {date}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
