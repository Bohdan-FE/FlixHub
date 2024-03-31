import { authOptions } from "@/app/lib/auth"
import { getFavouriteMovies } from "@/app/lib/getFavoriteMovies"
import { getServerSession } from "next-auth"
import MovieCard from "../MovieCard/MovieCard"
import Pagination from "../Pagination/Pagination"

export default async function MovieList({ movies }: { movies: MoviesData }) {
    const session = await getServerSession(authOptions)
    let favouriteMovies: FavoriteMovie[]
    if (session) {
        const favouriteMoviesData = await getFavouriteMovies(Number(session.user.id))
        favouriteMovies = favouriteMoviesData
    }

    if (Number(movies.total_pages) > 500) movies.total_pages = '500'

    return (<>
        <ul className="grid grid-cols-2 gap-x-4 gap-y-5 cardlistmob:grid-cols-3 cardlistmob:gap-5 cardlisttab:grid-cols-4 cardlisttab:gap-x-7 cardlisttab:gap-y-8 header:grid-cols-5" >
            {movies.results.map(movie => <MovieCard key={movie.id} favouriteMovies={favouriteMovies} movie={movie} userId={Number(session?.user.id)} />)}
        </ul>
        <Pagination totalPages={Number(movies.total_pages)} />
    </>
    )
}