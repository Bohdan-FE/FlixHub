'use client'
import { addFavouriteMovie } from "@/app/lib/addFavoriteMovie";
import { removeFavouriteMovie } from "@/app/lib/removeFavoriteMovie";
import { useFormState, useFormStatus } from "react-dom";

export function SubmitButton({ title, className }: { title: string, className: string }) {
    const { pending } = useFormStatus()
    return (<button className={className} aria-disabled={pending}>{pending ? 'pending' : title}</button>);
}

export function AddToFavorite({ movie, userId }: { movie: MovieDetailed, userId: string }) {
    const [state, formAction] = useFormState(addFavouriteMovie, { message: '' });
    const { id, title, poster_path, release_date, vote_average } = movie

    return (
        <form className="max-w-[280px] w-full" action={formAction}>
            <input type="hidden" name="movieId" value={id} />
            <input type="hidden" name="title" value={title} />
            <input type="hidden" name="poster_path" value={poster_path || ''} />
            <input type="hidden" name="release_date" value={release_date} />
            <input type="hidden" name="vote_average" value={vote_average} />
            <input type="hidden" name="userId" value={userId} />
            <SubmitButton title='Add to favorite' className="cursor-pointer p-4 bg-rose-400 hover:bg-rose-500 text-neutral-800 font-bold w-full rounded-xl active:scale-95 transition-all" />
        </form>
    )
}


export function RemoveFromFavorite({ movie, userId }: { movie: MovieDetailed, userId: number }) {
    const [state, formAction] = useFormState(removeFavouriteMovie, { message: '' });
    const { id: movieId } = movie

    return (
        <form className="max-w-[280px] w-full" action={formAction}>
            <input type="hidden" name="userId" value={userId} />
            <input type="hidden" name="movieId" value={movieId} />
            <SubmitButton title="Remove from favorite" className="cursor-pointer items-center justify-center p-4 bg-indigo-400 hover:bg-indigo-500 text-neutral-800 font-bold w-full rounded-xl active:scale-95 transition-all" />
        </form>
    )
}


