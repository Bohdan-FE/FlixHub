import Pagination from "../UI/components/Pagination/Pagination"
import TVCard from "../UI/components/TVCard/TVcard"
import { getTV } from "../lib/getTV"


export default async function Home({ searchParams }: { searchParams: { page: string } }) {
    const tv = await getTV(searchParams.page)
    if (Number(tv.total_pages) > 500) tv.total_pages = '500'


    return (
        <main className="">
            <div className="max-w-7xl mx-auto p-4">
                <h2 className="text-4xl mb-10">Trending Movies</h2>
                <ul className="grid grid-cols-5 gap-x-7 gap-y-8">{tv.results.map(tv => <TVCard key={tv.id} tv={tv} />)}</ul>
                <Pagination totalPages={Number(tv.total_pages)} />
            </div>
        </main>
    )
}