
import MovieList from "../UI/components/MovieList/MovieList"
import { searchMovies } from "../lib/searchMovies"

export default async function Page({ searchParams }: { searchParams: { query: string, page: string } }) {
    const movies = await searchMovies(searchParams.query, searchParams.page)

    return (
        <div className="max-w-7xl mx-auto p-4">
            <h2 className="text-4xl mb-10">Searched Movies</h2>
            <MovieList movies={movies} />
        </div >
    )
}