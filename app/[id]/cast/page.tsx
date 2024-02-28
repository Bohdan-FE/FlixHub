import CastCard from "@/app/UI/components/CastCard/CastCard";
import { getCastById } from "@/app/lib/getCastById";


async function Cast({ params }: { params: { id: string } }) {
    const castData = await getCastById(params.id)
    const cast = castData.cast
    return (
        <ul className="max-w-7xl mx-auto grid grid-cols-5 gap-x-12 gap-y-12 py-12">
            {cast.map(actor => <CastCard key={actor.id} castMember={actor} />)}
        </ul>
    );
}

export default Cast;