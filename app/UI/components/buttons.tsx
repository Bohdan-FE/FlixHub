'use client'
import { addFavouriteMovie } from "@/app/lib/addFavoriteMovie";
import { useFormStatus } from "react-dom";

export function SubmitButton({ title }: { title: string }) {
    const { pending } = useFormStatus()
    return (<button>{pending ? 'pending' : title}</button>);
}

export function AddToFavorite({ movie }: { movie: Movie }) {
    const addToFavourite = async () => {
        try {
            await addFavouriteMovie({ ...movie, userId: 21 })
        } catch (error) {
            console.log(error)
        }
    }
    return (<button className="p-4 bg-rose-400 hover:bg-rose-500 text-neutral-800 font-bold max-w-[280px] w-full rounded-xl active:scale-95 transition-all" onClick={addToFavourite}>Add to favorite</button>);
}