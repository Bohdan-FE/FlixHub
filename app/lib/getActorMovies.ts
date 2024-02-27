'use server'
const { API_KEY } = process.env

export const getActorMovies = async (id: string) => {
    const res = await fetch(`https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${API_KEY}`);
    if (!res.ok) {
    throw new Error('Failed to fetch data')
    }
    return res.json()
}