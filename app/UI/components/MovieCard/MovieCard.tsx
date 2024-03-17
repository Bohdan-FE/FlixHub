'use client'
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { BsFillStarFill } from "react-icons/bs";
import defaultPoster from '../../../../public/default_poster.jpg'



function MovieCard({ movie, favouriteMovies }: { movie: Movie | FavoriteMovie, favouriteMovies: FavoriteMovie[] }) {
    const [src, setSrc] = useState<StaticImageData | string>(`https://image.tmdb.org/t/p/w500${movie.poster_path}`)
    const isFavourite = favouriteMovies.find(item => item.movieId === movie.id)
    const router = useRouter()

    return (
        <li id={`${movie.id}`} className="rounded-2xl overflow-hidden shadow-md relative hover:scale-[1.02] transition-transform duration-250 cursor-pointer active:scale-[0.97]" onClick={() => router.push(`/movies/${movie.id}`)}>
            <Image src={src} width={500} height={750} alt={movie.title} onError={e => setSrc(defaultPoster)} />
            <div className="bg-gradient-black absolute h-[50%] w-full bottom-0 px-4 pb-4 flex flex-col-reverse">
                <p className="text-sm">{movie.release_date.slice(0, 4)}</p>
                <p className="text-md font-bold mb-1">{movie.title}</p>
            </div>
            {isFavourite && <button className="absolute top-3 left-3">favourite</button>}
            <div className="absolute top-3 right-3 ml-auto flex items-center gap-1 py-1 px-2 rounded-xl bg-[rgba(46,45,45,0.7)]">
                <BsFillStarFill className="fill-yellow-500 block" /><p>{movie.vote_average.toFixed(1)}</p>
            </div>
        </li>
    );
}

export default MovieCard;