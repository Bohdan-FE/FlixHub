'use server'
const { API_KEY } = process.env

export const getTVProvider = async (id: string) => {
    const res = await fetch(`https://api.themoviedb.org/3/tv/${id}/watch/providers?api_key=${API_KEY}`);
    if (!res.ok) {
    throw new Error('Failed to fetch data')
    }
    return res.json()
}