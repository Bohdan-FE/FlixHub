'use client'
import { useFormStatus } from "react-dom";

export function SubmitButton({ title }: { title: string }) {
    const { pending } = useFormStatus()
    return (<button>{pending ? 'pending' : title}</button>);
}

export function AddToFavorite() {
    return (<button className="p-4 bg-rose-400 hover:bg-rose-500 text-neutral-800 font-bold max-w-[280px] w-full rounded-xl active:scale-95 transition-all">Add to favorite</button>);
}