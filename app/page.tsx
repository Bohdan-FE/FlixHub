import { getMovies } from "./lib/getMovies"
import FilterMovie from "./UI/components/Filter/FilterMovie"
import MovieList from "./UI/components/MovieList/MovieList"

export default async function Home({ searchParams }: { searchParams: { page: string, genre: string, sortby: string, year: string } }) {

  const moviesData = await getMovies(searchParams.page, searchParams.genre, searchParams.sortby, searchParams.year)

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h2 className="text-4xl mb-4 text-center">Trending Movies</h2>
      <FilterMovie />
      <MovieList movies={moviesData} />
    </div>
  )
}
