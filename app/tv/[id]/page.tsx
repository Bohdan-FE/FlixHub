import Poster from "@/app/UI/components/Poster/Poster";
import SliderPart from "@/app/UI/components/SliderPart/SliderPart";
import StarRating from "@/app/UI/components/StarRating/StarRating";
import TVReviews from "@/app/UI/components/TVReviews/TVReviews";
import { AddToFavoriteTV, RemoveFromFavoriteTV } from "@/app/UI/components/buttons";
import { authOptions } from "@/app/lib/auth";
import { convertToHoursAndMinutes } from "@/app/lib/convertToHoursAndMinutes";
import { getFavouriteTVById } from "@/app/lib/getFavouriteTVById";
import { getMovieVideos } from "@/app/lib/getMovieVideos";
import { getTVById } from "@/app/lib/getTVById";
import { getTVVideos } from "@/app/lib/getTVVideos";
import { getServerSession } from "next-auth";

import { IoMdTime } from "react-icons/io";
import { LuCalendarCheck2 } from "react-icons/lu";

async function Page({ params }: { params: { id: string } }) {
    const [tv, videos, session] = await Promise.all([getTVById(params.id), getTVVideos(params.id), getServerSession(authOptions)])
    let isFavouriteTV
    if (session) {
        const favouriteTV = await getFavouriteTVById(Number(session.user.id), Number(params.id))
        if (favouriteTV.length > 0) isFavouriteTV = true
    }
    const backgroundImageStyle = {
        backgroundImage: `linear-gradient(0deg, rgba(23,23,23,1) 0%, rgba(0,0,0,0) 50%),
                        linear-gradient(90deg, rgba(0,0,0,0.8744747899159664) 0%, rgba(0,0,0,0) 50%, rgba(0,0,0,0.8744747899159664) 100%),
                        url("https://image.tmdb.org/t/p/original${tv.backdrop_path}") `,
        backgroundSize: 'cover',
        backgroundPosition: 'top',
        backgroundRepeat: 'no-repeat',
        width: '100%',
    };

    return (<>
        <div className='w-full mx-auto mb-5 relative' style={backgroundImageStyle}>
            <div className="max-w-7xl py-12 px-3 mx-auto">
                <div className="flex justify-between gap-12">
                    <Poster image={tv.poster_path} title={tv.name} videos={videos.results} />
                    <div className="max-w-2xl flex flex-col justify-evenly gap-4" >
                        <div>
                            <h1 className="text-7xl text-neutral-200 font-bold text-right block text-ellipsis">{tv.name}</h1>
                            <StarRating rating={tv.vote_average} />
                            <ul className="flex gap-2 justify-end text-lg mb-5 text-neutral-300">{tv.genres.map(genre => <li className="after:content-['|'] last:after:content-[''] text-neutral-400 hover:text-neutral-300 cursor-pointer transition-colors hover:after:text-neutral-400" key={genre.id}>{genre.name + ' '}</li>)}</ul>
                            {/* <div className="flex items-center gap-2 text-xl justify-end mb-4">
                                <IoMdTime className="w-8 h-8" />
                                <p className="font-semibold">{convertToHoursAndMinutes(movie.runtime)}</p>
                            </div> */}
                            <div className="flex items-center gap-2 text-xl justify-end mb-4">
                                <LuCalendarCheck2 className="w-8 h-8" />
                                <p className="text-end text-xl text-neutral-300"><span className="font-semibold">{tv.first_air_date}</span></p>
                            </div>
                            <div data-te-perfect-scrollbar-init className="flex justify-end py-2 bg-[rgba(46,45,45,0.7)] rounded-lg px-4">
                                <p className="text-justify text-neutral-300 ">{tv.overview}</p>
                            </div>
                        </div>
                        <div className="flex justify-end">
                            {session && !isFavouriteTV && <AddToFavoriteTV tv={tv} userId={session?.user.id} type="btn" />}
                            {session && isFavouriteTV && <RemoveFromFavoriteTV tv={tv} userId={Number(session?.user.id)} type="btn" />}
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <SliderPart id={params.id} type="tv" />
        <TVReviews id={params.id} />
    </>
    );
}

export default Page;