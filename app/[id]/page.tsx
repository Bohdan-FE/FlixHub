import Image from "next/image";
import { getMovieById } from "../lib/getMovieById";

async function Page({ params }: { params: { id: string } }) {
    const movie: MovieDetailed = await getMovieById(params.id)

    const backgroundImageStyle = {
        backgroundImage: `linear-gradient(90deg, rgba(0,0,0,0.8) 10%, rgba(0,0,0,0.2) 45%), 
                        linear-gradient(270deg, rgba(0,0,0,0.8) 10%, rgba(0,0,0,0.2) 45%),
                        url("https://image.tmdb.org/t/p/original${movie.backdrop_path}") `,
        backgroundSize: 'cover',
        backgroundPosition: 'top',
        backgroundRepeat: 'no-repeat',
        width: '100%',
    };

    return (
        <div className='w-full aspect-video mx-auto' style={backgroundImageStyle}>
            <div className="flex max-w-7xl mx-auto py-12 px-3 justify-between gap-12">
                <Image className="blok rounded-xl shadow-lg shadow-slate-800 " src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} width={376} height={564} alt={movie.title} />
                <div className="max-w-2xl">
                    <h1 className="text-7xl text-neutral-200 font-bold text-right block max-h-[180px] text-ellipsis overflow-hidden hover:max-h-full leading-tight cursor-default transition-all duration-300">{movie.title}</h1>
                    <ul className="flex gap-2 justify-end text-lg mb-5 text-neutral-300">{movie.genres.map(genre => <li className="after:content-[','] last:after:content-['']" key={genre.id}>{genre.name}</li>)}</ul>
                    <p className="text-right text-neutral-300  py-2 bg-[rgba(46,45,45,0.5)] rounded-lg px-4">{movie.overview}</p>
                    <p>{movie.release_date}</p>
                    <p>{movie.tagline}</p>
                </div>
            </div>
        </div>
    );
}

export default Page;



