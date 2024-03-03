import { PickActorsMovies } from "@/app/UI/components/PickActorsMovies/PickActorsMovies";
import { getActorData } from "@/app/lib/getActorData";
import Image from "next/image";


async function Page({ params }: { params: { id: string } }) {
    const actorInfo = await getActorData(params.id)

    return (
        <div className="max-w-7xl mx-auto">
            <div className="flex gap-8 mb-8">
                <div className="shrink-0 w-[300px] h-[450px] rounded-2xl overflow-hidden">
                    <Image className="w-full" src={`https://image.tmdb.org/t/p/w300${actorInfo.profile_path}`} alt={actorInfo.name} width={500} height={700} />
                </div>
                <div>
                    <p className="text-3xl font-bold mb-2">{actorInfo.name}</p>
                    <p className="text-xl italic mb-2">{actorInfo.birthday}</p>
                    <p className="text-neutral-400">{actorInfo.biography}</p>
                </div>
            </div>
            <PickActorsMovies id={params.id} />
        </div>
    );
}

export default Page;