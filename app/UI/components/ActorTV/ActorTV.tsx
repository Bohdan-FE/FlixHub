import MovieCard from "../MovieCard/MovieCard";
import { getActorTV } from "@/app/lib/getActorTV";
import TVCard from "../TVCard/TVcard";

async function ActorTV({ id }: { id: string }) {
    const data = await getActorTV(id)
    return (
        <ul className="grid grid-cols-5 gap-x-12 gap-y-12 mb-8">{data.cast.map(movie => <TVCard key={movie.id} tv={movie} />)}</ul>
    );
}

export default ActorTV;