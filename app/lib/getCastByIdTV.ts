'use server'
const { API_KEY} = process.env

export const getCastByIdTV = async (id: string): Promise<MovieCast> => {
    const resp = await fetch(`https://api.themoviedb.org/3/tv/${id}/credits?api_key=${API_KEY}`);
    if (!resp.ok) {
    throw new Error('Failed to fetch data')
    }
    return resp.json()
}