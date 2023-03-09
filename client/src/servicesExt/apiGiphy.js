export default function apiGiphy(keyword) {
  // eslint-disable-next-line no-undef
  const api_key = process.env.REACT_APP_API_KEY_GIFT
  const apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}=${keyword}&limit=24&offset=0&rating=g&lang=en`

  return fetch(apiUrl)
    .then((res) => res.json())
    .then((response) => {
      const { data } = response
      const apiGifts = data.map((gift) => {
        const { images, title, id } = gift
        const { url } = images.downsized_medium
        return { title, id, url }
      })
      return apiGifts
    })
    .catch((error)=>{
      throw new Error(error)
    })
}
