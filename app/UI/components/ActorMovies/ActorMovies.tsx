'use client'
import { getActorMovies } from "@/app/lib/getActorMovies";
import MovieCard from "../MovieCard/MovieCard";

function ActorMovies({ movies, favouriteMovies, userId }: { movies: MovieCredits, favouriteMovies: FavoriteMovie[] | [], userId: number }) {
    return (
        <ul className="grid grid-cols-5 gap-x-12 gap-y-12 mb-8">{movies.cast.map(movie => <MovieCard userId={userId} key={movie.id} movie={movie} favouriteMovies={favouriteMovies} />)}</ul>
    );
}

export default ActorMovies;