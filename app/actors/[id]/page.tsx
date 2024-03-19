import { PickActorsMovies } from "@/app/UI/components/PickActorsMovies/PickActorsMovies";
import { authOptions } from "@/app/lib/auth";
import { getActorData } from "@/app/lib/getActorData";
import { getActorMovies } from "@/app/lib/getActorMovies";
import { getActorTV } from "@/app/lib/getActorTV";
import { getFavouriteMovies } from "@/app/lib/getFavoriteMovies";
import { getFavouriteTVs } from "@/app/lib/getFavoriteTVs";
import { getServerSession } from "next-auth";
import Image from "next/image";


async function Page({ params }: { params: { id: string } }) {
    const [actorInfo, movies, tvs, session] = await Promise.all([getActorData(params.id), getActorMovies(params.id), getActorTV(params.id), getServerSession(authOptions)])
    let favouriteMovies: FavoriteMovie[] | [] = []
    let favouriteTVs: FavoriteTV[] | [] = []
    if (session) {
        favouriteMovies = await getFavouriteMovies(Number(session.user.id))
        favouriteTVs = await getFavouriteTVs(Number(session.user.id))
    }

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
            <PickActorsMovies movies={movies} tvs={tvs} favouriteMovies={favouriteMovies} favouriteTVs={favouriteTVs} userId={session?.user.id} />
        </div>
    );
}

export default Page;