import { getServerSession } from "next-auth"
import MovieCard from "./UI/components/MovieCard/MovieCard"
import { getMovies } from "./lib/getMovies"
import { authOptions } from "./api/auth/[...nextauth]/route"


export default async function Home() {
  const movies: MoviesData = await getMovies(2)
  const session = await getServerSession(authOptions)
  console.log(session)
  return (
    <main className="">
      <div className="max-w-7xl mx-auto p-4">
        <h2 className="text-4xl mb-10">Trending Movies</h2>
        <ul className="grid grid-cols-5 gap-x-6 gap-y-8">{movies.results.map(movie => <MovieCard movie={movie} key={movie.id} />)}</ul>
      </div>
    </main>
  )
}
