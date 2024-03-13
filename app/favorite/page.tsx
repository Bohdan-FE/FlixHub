import { getSession } from "next-auth/react";
import { getFavouriteMovies } from "../lib/getFavoriteMovies";
import MovieCard from "../UI/components/MovieCard/MovieCard";
import { getServerSession } from "next-auth";
import { authOptions } from "../lib/auth";

export default async function Page() {
    const session = await getServerSession(authOptions)
    const data = await getFavouriteMovies(Number(session?.user.id))
    const favouriteMovies = data?.map(item => ({ ...item, id: item.movieId }))


    if (!favouriteMovies) return
    return (
        <main>
            <div className="max-w-7xl mx-auto p-4">
                <h2 className="text-4xl mb-10">Favorite Movies</h2>
                <ul className="grid grid-cols-5 gap-x-7 gap-y-8">{favouriteMovies.map(movie => <MovieCard movie={movie} key={movie.movieId} />)}</ul>
            </div>
        </main>
    )
}

