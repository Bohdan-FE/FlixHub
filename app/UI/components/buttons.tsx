'use client'
import { addFavouriteMovie } from "@/app/lib/addFavoriteMovie";
import { removeFavouriteMovie } from "@/app/lib/removeFavoriteMovie";

import { useFormStatus } from "react-dom";

export function SubmitButton({ title }: { title: string }) {
    const { pending } = useFormStatus()
    return (<button>{pending ? 'pending' : title}</button>);
}

export function AddToFavorite({ movie, userId }: { movie: MovieDetailed, userId?: string }) {
    const { id, title, poster_path, release_date, vote_average } = movie
    const favoriteMovie = { movieId: id, title, poster_path, release_date, vote_average }
    const addToFavourite = addFavouriteMovie.bind(null, { ...favoriteMovie, userId: Number(userId) })

    return (
        <form className="flex cursor-pointer items-center justify-center p-4 bg-rose-400 hover:bg-rose-500 text-neutral-800 font-bold max-w-[280px] w-full rounded-xl active:scale-95 transition-all" action={addToFavourite}>
            <button> Add to favorite</button>
        </form>
    )
}

export function RemoveFromFavorite({ movie, userId }: { movie: MovieDetailed, userId: number }) {
    const { id: movieId } = movie
    const addToFavourite = removeFavouriteMovie.bind(null, movieId, userId)

    return (
        <form className="flex cursor-pointer items-center justify-center p-4 bg-indigo-400 hover:bg-indigo-500 text-neutral-800 font-bold max-w-[280px] w-full rounded-xl active:scale-95 transition-all" action={addToFavourite}>
            <button>Remove from favorite</button>
        </form>
    )
}


