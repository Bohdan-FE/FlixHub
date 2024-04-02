const { API_KEY } = process.env

export const searchTV = async (searchQuery: string, page='1'): Promise<TVData> => {
    const resp = await fetch(`https://api.themoviedb.org/3/search/tv?query=${searchQuery}&page=${page}&api_key=${API_KEY}`);
    if (!resp.ok) {
    throw new Error('Failed to fetch data')
    }
    return resp.json()
}