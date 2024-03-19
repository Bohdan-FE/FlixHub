import { getServerSession } from "next-auth"
import MovieCard from "./UI/components/MovieCard/MovieCard"
import Pagination from "./UI/components/Pagination/Pagination"
import { getMovies } from "./lib/getMovies"
import { authOptions } from "./lib/auth"
import { getFavouriteMovies } from "./lib/getFavoriteMovies"
import FilterMovie from "./UI/components/Filter/FilterMovie"

export default async function Home({ searchParams }: { searchParams: { page: string, genre: string, sortby: string } }) {
  const session = await getServerSession(authOptions)
  const getMoviesData = getMovies(searchParams.page, searchParams.genre, searchParams.sortby)
  let movies
  let favouriteMovies: FavoriteMovie[]
  if (session) {
    const [moviesData, favouriteMoviesData] = await Promise.all([getMoviesData, getFavouriteMovies(Number(session.user.id))])
    favouriteMovies = favouriteMoviesData
    movies = moviesData
  } else {
    movies = await getMoviesData
  }

  if (Number(movies.total_pages) > 500) movies.total_pages = '500'


  return (
    <main className="">
      <div className="max-w-7xl mx-auto p-4">
        <h2 className="text-4xl mb-10">Trending Movies</h2>
        <FilterMovie />
        <ul className="grid grid-cols-5 gap-x-7 gap-y-8">{movies.results.map(movie => <MovieCard userId={Number(session?.user.id)} movie={movie} key={movie.id} favouriteMovies={favouriteMovies} />)}</ul>
        <Pagination totalPages={Number(movies.total_pages)} />
      </div>
    </main>
  )
}
