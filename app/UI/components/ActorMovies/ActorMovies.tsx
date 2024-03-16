'use client'
import { getActorMovies } from "@/app/lib/getActorMovies";
import MovieCard from "../MovieCard/MovieCard";

async function ActorMovies({ movies }: { movies: MovieCredits }) {
    return (
        <ul className="grid grid-cols-5 gap-x-12 gap-y-12 mb-8">{movies.cast.map(movie => <MovieCard key={movie.id} movie={movie} />)}</ul>
    );
}

export default ActorMovies;