'use client'
import { getActorMovies } from "@/app/lib/getActorMovies";
import MovieCard from "../MovieCard/MovieCard";

function ActorMovies({ movies, favouriteMovies, userId }: { movies: MovieCredits, favouriteMovies: FavoriteMovie[] | [], userId: number }) {
    return (
        <ul className="grid grid-cols-2 gap-x-4 gap-y-5 cardlistmob:grid-cols-3 cardlistmob:gap-5 cardlisttab:grid-cols-4 cardlisttab:gap-x-7 cardlisttab:gap-y-8 header:grid-cols-5 mb-8">{movies.cast.map(movie => <MovieCard userId={userId} key={movie.id} movie={movie} favouriteMovies={favouriteMovies} />)}</ul>
    );
}

export default ActorMovies;