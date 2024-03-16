'use client'
import TVCard from "../TVCard/TVcard";

async function ActorTV({ tvs }: { tvs: TVShowCredits }) {

    return (
        <ul className="grid grid-cols-5 gap-x-12 gap-y-12 mb-8">{tvs.cast.map(tv => <TVCard key={tv.id} tv={tv} />)}</ul>
    );
}

export default ActorTV;