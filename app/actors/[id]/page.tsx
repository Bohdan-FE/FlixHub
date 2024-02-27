import { getActorData } from "@/app/lib/getActorData";
import { getActorMovies } from "@/app/lib/getActorMovies";

async function Page({ params }: { params: { id: string } }) {
    const [actorInfo, actorFilms] = await Promise.all([getActorData(params.id), getActorMovies(params.id)])

    return (
        <div className="max-w-7xl mx-auto">

        </div>
    );
}

export default Page;