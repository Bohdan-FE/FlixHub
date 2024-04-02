import { authOptions } from "@/app/lib/auth"
import { getServerSession } from "next-auth"
import Pagination from "../Pagination/Pagination"
import { getFavouriteTVs } from "@/app/lib/getFavoriteTVs"
import TVCard from "../TVCard/TVcard"

export default async function TVList({ tvs }: { tvs: TVData }) {
    const session = await getServerSession(authOptions)
    let favouriteTVs: FavoriteTV[]
    if (session) {
        const favouriteMoviesData = await getFavouriteTVs(Number(session.user.id))
        favouriteTVs = favouriteMoviesData
    }

    if (Number(tvs.total_pages) > 500) tvs.total_pages = '500'

    return (<>
        <ul className="grid grid-cols-2 gap-x-4 gap-y-5 cardlistmob:grid-cols-3 cardlistmob:gap-5 cardlisttab:grid-cols-4 cardlisttab:gap-x-7 cardlisttab:gap-y-8 header:grid-cols-5" >
            {tvs.results.map(tv => <TVCard key={tv.id} favouriteTVs={favouriteTVs} tv={tv} userId={session?.user.id} />)}
        </ul>
        <Pagination totalPages={Number(tvs.total_pages)} />
    </>
    )
}