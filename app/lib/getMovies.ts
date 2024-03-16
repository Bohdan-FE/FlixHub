'use server'
const { API_KEY} = process.env

export const getMovies = async (page='1', genre='', year='') => {
    const resp = await fetch(`https://api.themoviedb.org/3/discover/movie?page=${page}&primary_release_year=${year}&with_genres=${genre}&api_key=${API_KEY}`);
    if (!resp.ok) {
    throw new Error('Failed to fetch data')
    }
    return resp.json()
}