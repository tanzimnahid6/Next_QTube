"use client"
import { postVideo } from "@/util/mutationFun"
import React, { useState } from "react"
import Swal from "sweetalert2"

const VideoForm = () => {
  const initialFormData = {
    title: "This is test title",
    description: "test description",
    author: "Jubayer nahid",
    date: "",
    duration: 0,
    views: 0,
    like: 0,
    dislike: 0,
    link: "https://www.youtube.com/embed/oGg3kzoR6lw?si=Axttmosm2wy7oiIm",
    thumbnail: "https://i.ibb.co/cX9ZZGV/lofi3.png",
    tag: "lofi",
  }

  const [formData, setFormData] = useState(initialFormData)

  const handleChange = (e) => {
    let { name, value } = e.target
    if (name === "date") {
      const obj = { date: value }
      const dateObject = new Date(obj.date)
      const options = { year: "numeric", month: "long", day: "numeric" }
      const formattedDate = dateObject.toLocaleDateString("en-US", options)
    }
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

    const newObj = {
      ...formData,
      date: formattedDate,
    }
    const posted = await postVideo(newObj)

    if (posted.acknowledged) {
      Swal.fire({
        position: "top",
        icon: "success",
        title: "Your video has been saved",
        showConfirmButton: false,
        timer: 1500,
      })
    }

    // Reset form data after submission
    setFormData(initialFormData)
  }

  return (
    <div className="max-w-full mx-4 mt-8 p-4 bg-white rounded-lg shadow-md">
      <form onSubmit={handleSubmit}>
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
                value={formData.date}
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
            className="mt-4 w-32 p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

const AddVideo = () => {
  return (
    <div className="h-auto">
      <h1 className="text-3xl font-bold text-center">Video Form</h1>
      <VideoForm />
    </div>
  )
}

export default AddVideo
