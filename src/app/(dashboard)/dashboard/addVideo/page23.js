"use client"
import React, { useState } from "react"

const initialFormData = {
  title: "",
  description: "",
  author: "",
  date: "",
  duration: "",
  views: "",
  like: 0,
  dislike: 0,
  link: "",
  thumbnail: "",
  tag: "",
}


const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
    // Reset form data after submission
    setFormData(initialFormData);
  };
const AddVideo = () => {
    const [formData, setFormData] = useState(initialFormData)
    const handleChange = (e) => {
        console.log(e.target.value);
        const { name, value } = e.target
        setFormData({
          ...formData,
          [name]: value,
        })
      }

  return (
    <div>
      <div className="md:flex justify-center items-center h-screen">
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-4 pt-6 pb-8 mb-4 w-full mx-4">
          <div className="mb-4 sm:flex">
            <div className="mb-4 sm:mr-4 md:w-1/2">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="field1"
              >
                Title
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="field1"
                type="text"
                value={formData.title}
                onChange={handleChange}
                placeholder="Video title"
              />
            </div>
            <div className="md:w-1/2">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="field2"
              >
                Field 2
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="field2"
                type="text"
                placeholder="Field 2"
              />
            </div>
          </div>
          <div className="mb-4 sm:flex">
            {/* video title felid */}
            <div className="mb-4 sm:mr-4 md:w-1/2">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="title"
              >
                Field 1
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="title"
                type="text"
               
                placeholder="title"
              />
            </div>
            <div className="md:w-1/2">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="field2"
              >
                Field 2
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="field2"
                type="text"
                placeholder="Field 2"
              />
            </div>
          </div>
          <div className="mb-4 sm:flex">
            <div className="mb-4 sm:mr-4 md:w-1/2">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="field1"
              >
                Field 1
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="field1"
                type="text"
                placeholder="Field 1"
              />
            </div>
            <div className="md:w-1/2">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="field2"
              >
                Field 2
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="field2"
                type="text"
                placeholder="Field 2"
              />
            </div>
          </div>
          <div className="mb-4 sm:flex">
            <div className="mb-4 sm:mr-4 md:w-1/2">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="field5"
              >
                Field 5
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="field5"
                type="text"
                placeholder="Field 5"
              />
            </div>
            <div className="md:w-1/2">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="field6"
              >
                Field 6
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="field6"
                type="text"
                placeholder="Field 6"
              />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddVideo
