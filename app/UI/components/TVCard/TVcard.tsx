'use client'
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { BsFillStarFill } from "react-icons/bs";
import defaultPoster from '../../../../public/default_poster.jpg'
import { FavoriteTVs } from "@prisma/client";
import { AddToFavoriteTV, RemoveFromFavoriteTV } from "../buttons";


function TVCard({ tv, favouriteTVs, userId }: { tv: TVShow | FavoriteTVs, favouriteTVs: FavoriteTV[] | [], userId?: string }) {
    const [src, setSrc] = useState<StaticImageData | string>(`https://image.tmdb.org/t/p/w500${tv.poster_path}`)
    const isFavourite = userId && favouriteTVs.find(item => item.tvId === tv.id)
    const router = useRouter()

    return (
        <li id={`${tv.id}`} className="rounded-2xl overflow-hidden shadow-md relative transition-transform duration-250 cursor-pointer active:scale-[0.97]" onClick={() => router.push(`/tv/${tv.id}`)}>
            <Image className="h-full" src={src} width={500} height={750} alt={tv.name} onError={() => setSrc(defaultPoster)} />
            <div className="bg-gradient-black absolute h-[50%] w-full bottom-0 px-4 pb-4 flex flex-col-reverse">
                <p className="text-sm">{tv.first_air_date.slice(0, 4)}</p>
                <p className="text-md font-bold mb-1">{tv.name}</p>
            </div>
            {!!userId && isFavourite && <RemoveFromFavoriteTV type="icon" tv={tv} userId={Number(userId)} />}
            {!!userId && !isFavourite && <AddToFavoriteTV type='icon' tv={tv} userId={userId} />}
            <div className="absolute top-3 right-3 ml-auto flex items-center gap-1 py-1 px-2 rounded-xl bg-[rgba(46,45,45,0.7)]">
                <BsFillStarFill className="fill-yellow-500 block" /><p>{tv.vote_average.toFixed(1)}</p>
            </div>
        </li>
    );
}

export default TVCard;