'use client'
import { addFavouriteMovie } from "@/app/lib/addFavoriteMovie";
import { addFavouriteTV } from "@/app/lib/addFavoriteTV";
import { removeFavouriteMovie } from "@/app/lib/removeFavoriteMovie";
import { removeFavouriteTV } from "@/app/lib/removeFromFavoriteTV";
import { useFormState, useFormStatus } from "react-dom";
import { IoHeartOutline, IoHeartSharp } from "react-icons/io5";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import clsx from "clsx";
import VideoPortal from "./VideoPortal/VideoPortal";
import { useLayoutEffect, useState } from "react";
import { createPortal } from 'react-dom';

export function SubmitButton({ title, className }: { title: string, className: string }) {
    const { pending } = useFormStatus()
    return (<button className={className} aria-disabled={pending}>{pending ? 'pending' : title}</button>);
}

export function SubmitIconAdd() {
    const { pending } = useFormStatus()
    return (<button className='absolute top-3 left-3 cursor-pointer p-1 bg-[rgba(46,45,45,0.7)] rounded-full' aria-disabled={pending}>{pending ? <AiOutlineLoading3Quarters className="w-5 h-5 animate-spin" /> : <IoHeartOutline className="w-5 h-5 hover:scale-110" />}</button>);
}

export function SubmitIconRemove() {
    const { pending } = useFormStatus()
    return (<button className='absolute top-3 left-3 cursor-pointer p-1 bg-[rgba(46,45,45,0.7)] rounded-full' aria-disabled={pending}>{pending ? <AiOutlineLoading3Quarters className="w-5 h-5 animate-spin" /> : <IoHeartSharp className="w-5 h-5 hover:scale-110" />}</button>);
}

export function AddToFavoriteMovie({ movie, userId, type }: { movie: MovieDetailed | Movie | FavoriteMovie, userId?: number, type: 'btn' | 'icon' }) {
    const [state, formAction] = useFormState(addFavouriteMovie, { message: '' });
    const { id, title, poster_path, release_date, vote_average } = movie
    if (!userId) return
    return (
        <form className={clsx({ 'basis-[calc((100%-12px)/2)]  max-w-[280px] w-full': type === 'btn' })} action={formAction} onClick={e => e.stopPropagation()}>
            <input type="hidden" name="movieId" value={id} />
            <input type="hidden" name="title" value={title} />
            <input type="hidden" name="poster_path" value={poster_path || ''} />
            <input type="hidden" name="release_date" value={release_date} />
            <input type="hidden" name="vote_average" value={vote_average} />
            <input type="hidden" name="userId" value={userId} />
            {type === 'btn' && <SubmitButton title='Add to favorite' className="cursor-pointer p-4 bg-rose-400 hover:bg-rose-500 text-neutral-800 font-bold w-full rounded-xl active:scale-95 transition-all" />}
            {type === 'icon' && <SubmitIconAdd />}
        </form>
    )
}

export function AddToFavoriteTV({ tv, userId, type }: { tv: TVShowDetails | TVShow | FavoriteTV, userId: string, type: 'btn' | 'icon' }) {
    const [state, formAction] = useFormState(addFavouriteTV, { message: '' });
    const { id, name, poster_path, first_air_date, vote_average } = tv

    return (
        <form className="basis-[calc((100%-12px)/2)]  max-w-[280px] w-full" action={formAction} onClick={e => e.stopPropagation()}>
            <input type="hidden" name="tvId" value={id} />
            <input type="hidden" name="name" value={name} />
            <input type="hidden" name="poster_path" value={poster_path || ''} />
            <input type="hidden" name="first_air_date" value={first_air_date} />
            <input type="hidden" name="vote_average" value={vote_average} />
            <input type="hidden" name="userId" value={userId} />
            {type === 'btn' && <SubmitButton title='Add to favorite' className="cursor-pointer p-4 bg-rose-400 hover:bg-rose-500 text-neutral-800 font-bold w-full rounded-xl active:scale-95 transition-all" />}
            {type === 'icon' && <SubmitIconAdd />}
        </form>
    )
}


export function RemoveFromFavoriteMovie({ movie, userId, type }: { movie: MovieDetailed | Movie | FavoriteMovie, userId: number, type: 'btn' | 'icon' }) {
    const [state, formAction] = useFormState(removeFavouriteMovie, { message: '' });
    const { id: movieId } = movie

    return (
        <form className={clsx({ 'basis-[calc((100%-12px)/2)]  max-w-[280px] w-full': type === 'btn' })} action={formAction} onClick={e => e.stopPropagation()}>
            <input type="hidden" name="userId" value={userId} />
            <input type="hidden" name="movieId" value={movieId} />
            {type === 'btn' && <SubmitButton title="Remove from favorite" className="cursor-pointer items-center justify-center p-4 bg-indigo-400 hover:bg-indigo-500 text-neutral-800 font-bold w-full rounded-xl active:scale-95 transition-all" />}
            {type === 'icon' && <SubmitIconRemove />}
        </form>
    )
}

export function RemoveFromFavoriteTV({ tv, userId, type }: { tv: TVShowDetails | TVShow | FavoriteTV, userId: number, type: 'btn' | 'icon' }) {
    const [state, formAction] = useFormState(removeFavouriteTV, { message: '' });
    const { id: tvId } = tv

    return (
        <form className=" basis-[calc((100%-12px)/2)] max-w-[280px] w-full" action={formAction} onClick={e => e.stopPropagation()}>
            <input type="hidden" name="userId" value={userId} />
            <input type="hidden" name="tvId" value={tvId} />
            {type === 'btn' && <SubmitButton title="Remove from favorite" className="cursor-pointer items-center justify-center p-4 bg-indigo-400 hover:bg-indigo-500 text-neutral-800 font-bold w-full rounded-xl active:scale-95 transition-all" />}
            {type === 'icon' && <SubmitIconRemove />}
        </form>
    )
}


export function OpenTrailer({ videos }: { videos: Video[] }) {
    const [isActive, setIsActive] = useState<boolean>(false)
    const trailerKey = videos.filter(video => video.type === 'Trailer')[0]?.key
    const teaserKey = videos.filter(video => video.type === 'Teaser')[0]?.key || ''
    const youtubeKey = trailerKey?.length !== 0 ? trailerKey : teaserKey

    useLayoutEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 1024) setIsActive(false);
        };

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    if (!youtubeKey) return
    return (
        <>
            <button className=" basis-[calc((100%-12px)/2)] header:hidden max-w-[280px] cursor-pointer items-center justify-center p-4 bg-indigo-400 hover:bg-indigo-500 text-neutral-800 font-bold w-full rounded-xl active:scale-95 transition-all" onClick={() => setIsActive(!isActive)}>Watch trailer</button>
            {isActive && createPortal(
                <VideoPortal setIsActive={setIsActive} youtubeKey={youtubeKey} />,
                document.body
            )}
        </>
    )
}


