import { getMovieById } from "../lib/getMovieById";

async function Page({ params }: { params: { id: string } }) {
    const movie = await getMovieById(params.id)
    console.log(movie)
    return (
        <div>{params.id}</div>
    );
}

export default Page;