import Image from "next/image";
import Link from "next/link";

const Video = ({ video }) => {
  const { _id, title, duration, author, views, date, thumbnail } = video;
  const id = _id.toString();

  return (
    <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 duration-300 hover:scale-[1.03]">
      <div className="w-full flex flex-col">
        <div className="relative mb-2">
          <Link href={`/video/${id}`}>
            <Image
              src={thumbnail}
              alt="thumbnail picture"
              width={300}
              height={300}
            />
          </Link>

          <p className="absolute bottom-2  bg-gray-900 text-gray-100 text-xs px-1 py">
            {duration}
          </p>
        </div>

        <div className="flex flex-col">
          <Link href={`/video/${id}`}>
            <p className="text-slate-900 text-sm font-semibold mb-1">
              {title}
            </p>
          </Link>
          <span className="text-gray-400 text-xs hover:text-gray-600">
            Next QTube
          </span>
          <p className="text-gray-400 text-xs mb-2">{views} views . {date}</p>
        </div>
      </div>
    </div>
  );
};

export default Video;
