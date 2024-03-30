'use client'

import Image, { StaticImageData } from "next/image"
import defaultPoster from '../../../../public/default_poster.jpg'
import { memo, useState } from "react"

export default memo(function SearchMovieCard({ movie, handlerOnClick }: { movie: any, handlerOnClick: (id: string) => void }) {
    const [src, setSrc] = useState<StaticImageData | string>(`https://image.tmdb.org/t/p/w500${movie.poster_path}`)
    return (
        <li className="mb-2 last:mb-0 hover:bg-neutral-700 focus:bg-neutral-600 transition-colors p-1 cursor-pointer" onClick={() => handlerOnClick(movie.id + '')}>
            <div className="flex gap-3">
                <Image className="h-full" src={src} width={76} height={136} alt={movie.title} onError={e => setSrc(defaultPoster)} />
                <div>
                    <p className="text-neutral-200">{movie.title}</p>
                    <p className=" text-sm">{movie.release_date}</p>
                </div>
            </div>
        </li>
    )
})