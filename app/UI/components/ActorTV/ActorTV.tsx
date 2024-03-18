'use client'
import TVCard from "../TVCard/TVcard";

function ActorTV({ tvs, favouriteTVs }: { tvs: TVShowCredits, favouriteTVs: FavoriteTV[] | [] }) {

    return (
        <ul className="grid grid-cols-5 gap-x-12 gap-y-12 mb-8">{tvs.cast.map(tv => <TVCard favouriteTVs={favouriteTVs} key={tv.id} tv={tv} />)}</ul>
    );
}

export default ActorTV;