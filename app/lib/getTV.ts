'use server'
const { API_KEY} = process.env

export const getTV = async (page='1'): Promise<TVData> => {
    const resp = await fetch(`https://api.themoviedb.org/3/tv/popular?page=${page}&api_key=${API_KEY}`);
    if (!resp.ok) {
    throw new Error('Failed to fetch data')
    }
    return resp.json()
}