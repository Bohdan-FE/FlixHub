import { getServerSession } from "next-auth"
import Pagination from "../UI/components/Pagination/Pagination"
import TVCard from "../UI/components/TVCard/TVcard"
import { getTV } from "../lib/getTV"
import { authOptions } from "../lib/auth"
import { getFavouriteTVs } from "../lib/getFavoriteTVs"
import FilterTV from "../UI/components/Filter/FilterTV"


export default async function Home({ searchParams }: { searchParams: { page: string, year: string, sortby: string, genre: string } }) {
    const [tv, session] = await Promise.all([getTV(searchParams.page, searchParams.genre, searchParams.sortby, searchParams.year), getServerSession(authOptions)])
    let favouriteTVs: FavoriteTV[] | [] = []
    if (session) {
        favouriteTVs = await getFavouriteTVs(Number(session.user.id))
    }
    if (Number(tv.total_pages) > 500) tv.total_pages = '500'


    return (

        <div className="max-w-7xl mx-auto p-4">
            <h2 className="text-4xl mb-10">Trending TV Shows</h2>
            <FilterTV />
            <ul className="grid grid-cols-5 gap-x-7 gap-y-8">{tv.results.map(tv => <TVCard favouriteTVs={favouriteTVs} key={tv.id} tv={tv} userId={session?.user.id} />)}</ul>
            <Pagination totalPages={Number(tv.total_pages)} />
        </div>

    )
}