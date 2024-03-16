import { getFavouriteMovies } from "../lib/getFavoriteMovies";
import MovieCard from "../UI/components/MovieCard/MovieCard";
import { getServerSession } from "next-auth";
import { authOptions } from "../lib/auth";
import { getFavouriteTVs } from "../lib/getFavoriteTVs";
import PickFavourite from "../UI/components/PickFavourite/pickFavourite";

export default async function Page() {
    const session = await getServerSession(authOptions)
    const [movies, tvs] = await Promise.all([getFavouriteMovies(Number(session?.user.id)), getFavouriteTVs(Number(session?.user.id))])
    const favouriteMovies = movies?.map(item => ({ ...item, id: item.movieId }))
    const favouriteTVs = tvs?.map(item => ({ ...item, id: item.tvId }))
    if (!favouriteMovies || !favouriteTVs) return
    return (

        <div className="max-w-7xl mx-auto p-4">
            <PickFavourite favouriteMovies={favouriteMovies} favouriteTVs={favouriteTVs} />
        </div>

    )
}

