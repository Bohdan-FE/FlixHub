import CastCard from "@/app/UI/components/CastCard/CastCard";
import { getCastById } from "@/app/lib/getCastById";


async function Cast({ params }: { params: { id: string } }) {
    const castData = await getCastById(params.id)
    const cast = castData.cast
    return (
        <div className="max-w-7xl mx-auto pt-12">
            <ul className="grid grid-cols-2 gap-x-4 gap-y-5 cardlistmob:grid-cols-3 cardlistmob:gap-5 cardlisttab:grid-cols-4 cardlisttab:gap-x-11 cardlisttab:gap-y-12 header:grid-cols-5 px-4 xl:px-0">
                {cast.map(actor => <CastCard key={actor.id} castMember={actor} />)}
            </ul>
        </div>
    );
}

export default Cast;