'use client'
import { addFavouriteMovie } from "@/app/lib/addFavoriteMovie";

import { useFormStatus } from "react-dom";

export function SubmitButton({ title }: { title: string }) {
    const { pending } = useFormStatus()
    return (<button>{pending ? 'pending' : title}</button>);
}

export function AddToFavorite({ movie, userId }: { movie: MovieDetailed, userId?: string }) {
    const { id, title, overview, poster_path, genres: genresArr, release_date, vote_average, runtime, backdrop_path } = movie
    const genres = genresArr.map(genre => genre.name)
    const favoriteMovie = { movieId: id, title, overview, poster_path, genres, release_date, vote_average, runtime, backdrop_path }
    const addToFavourite = addFavouriteMovie.bind(null, { ...favoriteMovie, userId: Number(userId) })


    return (
        <form className="flex cursor-pointer items-center justify-center p-4 bg-rose-400 hover:bg-rose-500 text-neutral-800 font-bold max-w-[280px] w-full rounded-xl active:scale-95 transition-all" action={addToFavourite}>
            <button> Add to favorite</button>
        </form>
    )
}

