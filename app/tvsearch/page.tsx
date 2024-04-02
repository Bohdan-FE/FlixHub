import TVList from "../UI/components/TVlist/TVlist"
import { searchTV } from "../lib/searchTV"

export default async function Page({ searchParams }: { searchParams: { query: string, page: string } }) {
    const tvs = await searchTV(searchParams.query, searchParams.page)

    return (
        <div className="max-w-7xl mx-auto p-4">
            <h2 className="text-4xl mb-10">Searched TV shows</h2>
            <TVList tvs={tvs} />
        </div >
    )
}