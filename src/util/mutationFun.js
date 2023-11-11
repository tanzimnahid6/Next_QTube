export const postVideo = async (video) => {
  console.log(video)
  const res = await fetch("http://localhost:3000/api/videos", {
    method: "POST",
    body: JSON.stringify(video),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })

  const result = await res.json()
  return result
}
export const deleteVideo = async (id) => {
  const res = await fetch(`http://localhost:3000/api/videos?id=${id}`, {
    method: "DELETE",
  })
  const result = await res.json()
  return result
}

export const updateVideo = async ({ id, newObj }) => {
  console.log(newObj)

  const res = await fetch(`http://localhost:3000/api/videos?id=${id}`, {
    method: "PATCH",
    body: JSON.stringify(newObj),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    cache:'no-cache'
  })

  const result = await res.json()
  return result
}
