
const { API_KEY} = process.env

export const getMovies = async (page=1) => {
    const resp = await fetch(`https://api.themoviedb.org/3/trending/movie/day?page=${page}&api_key=${API_KEY}`);
    if (!resp.ok) {
    throw new Error('Failed to fetch data')
  }
    return resp.json()
}