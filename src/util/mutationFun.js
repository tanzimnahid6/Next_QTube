export const postVideo = async (video) => {
  console.log(video)
  const res = await fetch("http://localhost:3000/api/videos", {
    method: "POST",
    body: JSON.stringify(video),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })

  const result = res.json()
  return result
}
