export const getVideos = async () => {
  const res = await fetch("http://localhost:3000/api/videos",{
    cache:'no-cache'
  })
  const data = await res.json()
  return data
}

export const getSingleVideo = async (id) => {
  const res = await fetch(`http://localhost:3000/api/videos?id=${id}`,{
    cache:'no-cache'
  })
  const data = await res.json() 
  return data
}
