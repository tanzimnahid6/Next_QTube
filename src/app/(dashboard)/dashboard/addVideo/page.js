"use client"
import React, { useState } from "react"

const VideoForm = () => {
  const initialFormData = {
    title: "",
    description: "",
    author: "",
    date: "",
    duration: 0,
    views: 0,
    like: 0,
    dislike: 0,
    link: "",
    thumbnail: "",
    tag: "",
  }

  const [formData, setFormData] = useState(initialFormData)

  const handleChange = (e) => {
    let { name, value } = e.target
   
    
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log(formData)
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
                rows="4"
                className="w-full p-2 border rounded"
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
