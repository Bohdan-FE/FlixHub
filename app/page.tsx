import MovieCard from "./UI/components/MovieCard/MovieCard"
import { getMovies } from "./lib/getMovies"


export default async function Home() {
  const movies: MoviesData = await getMovies()

  return (
    <main className="">
      <div className="">
        <ul>{movies.results.map(movie => <MovieCard movie={movie} />)}</ul>
      </div>
    </main>
  )
}
