'use client'
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { BsFillStarFill } from "react-icons/bs";
import defaultPoster from '../../../../public/default_poster.jpg'



function TVCardMini({ tv }: { tv: TVShow }) {
    const router = useRouter()
    const [src, setSrc] = useState<StaticImageData | string>(`https://image.tmdb.org/t/p/w500${tv.poster_path}`)

    return (
        <li id={`${tv.id}`} className="h-full rounded-2xl overflow-hidden shadow-md relative transition-transform duration-250 cursor-pointer active:scale-[0.97]" onClick={() => router.push(`/tv/${tv.id}`)}>
            <Image className="h-full" src={src} width={500} height={750} alt={tv.name} onError={e => setSrc(defaultPoster)} />
            <div className="bg-gradient-black absolute h-[50%] w-full bottom-0 px-4 pb-4 flex flex-col-reverse">
                <p className="italic text-sm">{tv.first_air_date.slice(0, 4)}</p>
                <p className="text-sm font-bold ">{tv.name}</p>
            </div>
            <div className="absolute top-2 right-2 ml-auto flex items-center gap-1 py-1 px-2 rounded-xl bg-[rgba(46,45,45,0.7)]">
                <BsFillStarFill className="fill-yellow-500 block" /><p>{tv.vote_average.toFixed(1)}</p>
            </div>
        </li>
    );
}

export default TVCardMini;