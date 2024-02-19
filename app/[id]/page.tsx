
import { getMovieById } from "../lib/getMovieById";
import StarRating from "../UI/components/StarRating/StarRating";
import { convertToHoursAndMinutes } from "../lib/convertToHoursAndMinutes";
import { IoMdTime } from "react-icons/io";
import { LuCalendarCheck2 } from "react-icons/lu";
import { AddToFavorite } from "../UI/components/buttons";
import Poster from "../UI/components/Poster/Paster";
import { getVideos } from "../lib/getVideos";
import Recomendation from "../UI/components/Recomendation/Recomendation";
import { getMovies } from "../lib/getMovies";

async function Page({ params }: { params: { id: string } }) {
    const [movie, videos, { results }]: [movie: MovieDetailed, VideoData, MoviesData] = await Promise.all([getMovieById(params.id), getVideos(params.id), getMovies()])

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
        <div className='w-full aspect-video mx-auto max-h-[564px]' style={backgroundImageStyle}>
            <div className="max-w-7xl py-12 px-3 mx-auto">
                <div className="flex justify-between gap-12 mb-9">
                    <Poster image={movie.poster_path} title={movie.title} videos={videos} />
                    <div className="max-w-2xl flex flex-col justify-evenly gap-4" >
                        <div>
                            <h1 className="text-7xl text-neutral-200 font-bold text-right block text-ellipsis">{movie.title}</h1>
                            <StarRating rating={movie.vote_average} />
                            <ul className="flex gap-2 justify-end text-lg mb-5 text-neutral-300">{movie.genres.map(genre => <li className="after:content-['|'] last:after:content-[''] text-neutral-400 hover:text-neutral-300 cursor-pointer transition-colors hover:after:text-neutral-400" key={genre.id}>{genre.name + ' '}</li>)}</ul>
                            <div className="flex items-center gap-2 text-xl justify-end mb-4">
                                <IoMdTime className="w-8 h-8" />
                                <p className="font-semibold">{convertToHoursAndMinutes(movie.runtime)}</p>
                            </div>
                            <div className="flex items-center gap-2 text-xl justify-end mb-4">
                                <LuCalendarCheck2 className="w-8 h-8" />
                                <p className="text-end text-xl text-neutral-300"><span className="font-semibold">{movie.release_date}</span></p>
                            </div>
                            <div data-te-perfect-scrollbar-init className="flex justify-end py-2 bg-[rgba(46,45,45,0.5)] rounded-lg px-4">
                                <p className="text-justify text-neutral-300 ">{movie.overview}</p>
                            </div>
                        </div>
                        <div className="flex justify-end">
                            <AddToFavorite />
                        </div>
                    </div>
                </div>
                <h2 className="text-neutral-300 font-medium text-3xl mb-6">Recomendation:</h2>
                <div className="max-w-6xl mx-auto overflow-hidden relative px-4">
                    <Recomendation movies={results} />
                </div>
            </div>
        </div>
    );
}

export default Page;



