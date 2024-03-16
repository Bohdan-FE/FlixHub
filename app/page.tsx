import MovieCard from "./UI/components/MovieCard/MovieCard"
import Pagination from "./UI/components/Pagination/Pagination"
import { getMovies } from "./lib/getMovies"

export default async function Home({ searchParams }: { searchParams: { page: string, genre: string } }) {
  const movies: MoviesData = await getMovies(searchParams.page, searchParams.genre)
  console.log(searchParams)
  if (Number(movies.total_pages) > 500) movies.total_pages = '500'


  return (
    <main className="">
      <div className="max-w-7xl mx-auto p-4">
        <h2 className="text-4xl mb-10">Trending Movies</h2>
        <ul className="grid grid-cols-5 gap-x-7 gap-y-8">{movies.results.map(movie => <MovieCard movie={movie} key={movie.id} />)}</ul>
        <Pagination totalPages={Number(movies.total_pages)} />
      </div>
    </main>
  )
}
