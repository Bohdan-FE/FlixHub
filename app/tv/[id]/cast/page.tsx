import CastCard from "@/app/UI/components/CastCard/CastCard";
import { getCastByIdTV } from "@/app/lib/getCastByIdTV";


async function Cast({ params }: { params: { id: string } }) {
    const castData = await getCastByIdTV(params.id)
    const cast = castData.cast
    return (
        <ul className="max-w-7xl mx-auto grid grid-cols-5 gap-x-12 gap-y-12 py-12">
            {cast.map(actor => <CastCard key={actor.id} castMember={actor} />)}
        </ul>
    );
}

export default Cast;