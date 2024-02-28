import { getActorData } from "@/app/lib/getActorData";
import { getActorMovies } from "@/app/lib/getActorMovies";
import Image from "next/image";

async function Page({ params }: { params: { id: string } }) {
    const [actorInfo, actorFilms] = await Promise.all([getActorData(params.id), getActorMovies(params.id)])

    return (
        <div className="max-w-7xl mx-auto flex gap-8">
            <div className="shrink-0 w-[300px] h-[450px] rounded-2xl overflow-hidden">
                <Image className="w-full" src={`https://image.tmdb.org/t/p/w300${actorInfo.profile_path}`} alt={actorInfo.name} width={500} height={700} />
            </div>
            <div>
                <p className="text-3xl font-bold mb-2">{actorInfo.name}</p>
                <p className="text-xl italic mb-2">{actorInfo.birthday}</p>
                <p className="text-neutral-400">{actorInfo.biography}</p>
            </div>
        </div>
    );
}

export default Page;