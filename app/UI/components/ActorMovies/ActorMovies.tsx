import { getActorMovies } from "@/app/lib/getActorMovies";
import MovieCard from "../MovieCard/MovieCard";

async function ActorMovies({ id }: { id: string }) {
    const data = await getActorMovies(id)
    return (
        <ul className="grid grid-cols-5 gap-x-12 gap-y-12 py-12">{data.cast.map(movie => <MovieCard key={movie.id} movie={movie} />)}</ul>
    );
}

export default ActorMovies;