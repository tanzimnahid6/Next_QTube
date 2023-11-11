"use client"
import { formattedDate } from "@/util/formatedDate"
import { getSingleVideo } from "@/util/getFun"
import { updateVideo } from "@/util/mutationFun"
import { useSearchParams } from "next/navigation"
import React, { useEffect, useState } from "react"
import Swal from "sweetalert2"
const EditVideo = () => {
  const params = useSearchParams()
  const id = params.get("id")
  const [video, setVideo] = useState({})
  const [enable, setEnable] = useState(false)

  useEffect(() => {
    const fetchSingleVideo = async () => {
      const data = await getSingleVideo(id)
      setVideo(data)
    }
    fetchSingleVideo()
  }, [id])

  const VideoForm = () => {
    const [formData, setFormData] = useState(video || {})

    const handleChange = (e) => {
      let { name, value } = e.target

      setFormData({
        ...formData,
        [name]: value,
      })
    }

    const handleSubmit = async (e) => {
      e.preventDefault()
      const oldDate = formData.date
      const dateObject = new Date(oldDate)
      const options = { year: "numeric", month: "long", day: "numeric" }
      const formattedDate = dateObject.toLocaleDateString("en-US", options)
      setEnable(true)

      const newObj = {
        ...formData,
        date: formattedDate,
        like: Number(formData.like),
        views: Number(formData.views),
        duration: Number(formData.duration),
        dislike: Number(formData.dislike),
      }
      ///============================================
      const posted = await updateVideo({ id, newObj })
      if (posted.acknowledged) {
        setEnable(false)
        Swal.fire({
          position: "top",
          icon: "success",
          title: "Your video updated done",
          showConfirmButton: false,
          timer: 1500,
        })
      }

      // Reset form data after submission
      setFormData(formData)
    }

    return (
      <div className="max-w-full mx-4 mt-8 p-4 bg-white rounded-lg shadow-md">
        <form onSubmit={handleSubmit} className="text-sm">
          <div className="md:flex gap-2 text-black">
            <div className="md:w-1/2">
              <div>
                <label
                  className="block mb-2 font-bold text-gray-700"
                  htmlFor="title"
                >
                  Title:
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  placeholder="Enter your title"
                  required
                />
              </div>

              <div>
                <label
                  className="block mt-4 mb-2 font-bold text-gray-700"
                  htmlFor="description"
                >
                  Description:
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows="2"
                  className="w-full p-2 border rounded"
                  required
                ></textarea>
              </div>

              <div>
                <label
                  className="block mt-4 mb-2 font-bold text-gray-700"
                  htmlFor="author"
                >
                  Author:
                </label>
                <input
                  type="text"
                  id="author"
                  name="author"
                  value={formData.author}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>

              <div>
                <label
                  className="block mt-4 mb-2 font-bold text-gray-700"
                  htmlFor="date"
                >
                  Date:
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formattedDate(formData.date) || ""}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
            </div>

            <div className="md:w-1/2">
              <div className="flex gap-2">
                <div>
                  <label
                    className="block mt-4 mb-2 font-bold text-gray-700"
                    htmlFor="duration"
                  >
                    Duration:
                  </label>
                  <input
                    type="number"
                    id="duration"
                    name="duration"
                    value={formData.duration}
                    onChange={handleChange}
                    className="w-24 p-2 border rounded"
                    required
                  />
                </div>

                <div>
                  <label
                    className="block mt-4 mb-2 font-bold text-gray-700"
                    htmlFor="views"
                  >
                    Views:
                  </label>
                  <input
                    type="number"
                    id="views"
                    name="views"
                    value={formData.views}
                    onChange={handleChange}
                    className="w-24 p-2 border rounded"
                    required
                  />
                </div>
                <div>
                  <label
                    className="block mt-4 mb-2 font-bold text-gray-700"
                    htmlFor="like"
                  >
                    Like:
                  </label>
                  <input
                    type="number"
                    id="like"
                    name="like"
                    value={formData.like}
                    onChange={handleChange}
                    className="w-24 p-2 border rounded"
                    required
                  />
                </div>
                <div>
                  <label
                    className="block mt-4 mb-2 font-bold text-gray-700"
                    htmlFor="dislike"
                  >
                    Dislike:
                  </label>
                  <input
                    type="number"
                    id="dislike"
                    value={formData.dislike}
                    onChange={handleChange}
                    name="dislike"
                    className="w-full p-2 border rounded"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  className="block mt-4 mb-2 font-bold text-gray-700"
                  htmlFor="tag"
                >
                  Tag:
                </label>
                <input
                  type="text"
                  id="tag"
                  name="tag"
                  value={formData.tag}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>

              <div>
                <label
                  className="block mt-4 mb-2 font-bold text-gray-700"
                  htmlFor="link"
                >
                  Video link:
                </label>
                <input
                  type="text"
                  id="link"
                  name="link"
                  value={formData.link}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <div>
                <label
                  className="block mt-4 mb-2 font-bold text-gray-700"
                  htmlFor="thumbnail"
                >
                  Thumbnail link:
                </label>
                <input
                  type="text"
                  id="thumbnail"
                  name="thumbnail"
                  value={formData.thumbnail}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              disabled={enable}
              className={`mt-4 w-32 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 ${
                enable && "invisible"
              }`}
            >
              Update
            </button>
          </div>
        </form>
      </div>
    )
  }
  let content
  if (video.title) {
    content = <VideoForm></VideoForm>
  } else {
    content = (
      <div>
        <h1 className="font-3xl text-center font-bold text-white">
          Loading..........
          <br />
          <span className="loading loading-bars loading-lg scale-125 mt-8"></span>
        </h1>
      </div>
    )
  }

  return <div>{content}</div>
}

export default EditVideo
