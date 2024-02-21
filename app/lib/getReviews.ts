'use server'

const { API_KEY } = process.env

export const getReviews = async (id: string): Promise<Review> => {
       const resp = await fetch(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${API_KEY}`);
    if (!resp.ok) {
    throw new Error('Failed to fetch data')
    }
    return resp.json()
}