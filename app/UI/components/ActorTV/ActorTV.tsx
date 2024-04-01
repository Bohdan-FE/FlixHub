'use client'
import TVCard from "../TVCard/TVcard";

function ActorTV({ tvs, favouriteTVs, userId }: { tvs: TVShowCredits, favouriteTVs: FavoriteTV[] | [], userId?: string }) {

    return (
        <ul className="grid grid-cols-2 gap-x-4 gap-y-5 cardlistmob:grid-cols-3 cardlistmob:gap-5 cardlisttab:grid-cols-4 cardlisttab:gap-x-7 cardlisttab:gap-y-8 header:grid-cols-5 mb-8">{tvs.cast.map(tv => <TVCard favouriteTVs={favouriteTVs} key={tv.id} tv={tv} userId={userId} />)}</ul>
    );
}

export default ActorTV;