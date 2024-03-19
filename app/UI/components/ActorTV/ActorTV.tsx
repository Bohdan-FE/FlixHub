'use client'
import TVCard from "../TVCard/TVcard";

function ActorTV({ tvs, favouriteTVs, userId }: { tvs: TVShowCredits, favouriteTVs: FavoriteTV[] | [], userId?: string }) {

    return (
        <ul className="grid grid-cols-5 gap-x-12 gap-y-12 mb-8">{tvs.cast.map(tv => <TVCard favouriteTVs={favouriteTVs} key={tv.id} tv={tv} userId={userId} />)}</ul>
    );
}

export default ActorTV;