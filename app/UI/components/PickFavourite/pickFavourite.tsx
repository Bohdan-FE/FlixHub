'use client'
import { FavoriteTVs } from "@prisma/client";
import clsx from "clsx";
import { Suspense, useState } from "react";
import { Loading } from "../Loading/Loading";
import MovieCard from "../MovieCard/MovieCard";
import TVCard from "../TVCard/TVcard";

export default function PickFavourite({ favouriteMovies, favouriteTVs, userId }: { favouriteMovies: FavoriteMovie[] | [], favouriteTVs: FavoriteTVs[] | [], userId?: string }) {
    const [isMovies, setIsMovies] = useState<Boolean>(true)
    return (
        <div>
            <div className="mx-auto w-96 mb-10 rounded-2xl transition-all bg-neutral-800">
                <button className={clsx("w-1/2 p-3 text-xl border-r-[1px] border-neutral-700 rounded-l-2xl active:scale-95 transition-all", {
                    'shadow-sliderBtm bg-neutral-600': isMovies
                })} onClick={() => setIsMovies(true)}>Movies</button>
                <button className={clsx("w-1/2 p-3 text-xl border-l-[1px] border-neutral-700 rounded-r-2xl active:scale-95 transition-all", {
                    'shadow-sliderBtm bg-neutral-600': !isMovies
                })} onClick={() => setIsMovies(false)}>TV Shows</button>
            </div>
            {isMovies &&
                <Suspense key={1} fallback={<Loading />}>
                    <ul className="grid grid-cols-5 gap-x-7 gap-y-8">{favouriteMovies.map(movie => <MovieCard favouriteMovies={favouriteMovies} key={movie.id} movie={movie} userId={Number(userId)} />)}</ul>
                </Suspense>}
            {!isMovies &&
                <Suspense key={2} fallback={<Loading />}>
                    <ul className="grid grid-cols-5 gap-x-7 gap-y-8">{favouriteTVs.map(tv => <TVCard favouriteTVs={favouriteTVs} key={tv.id} tv={tv} userId={userId} />)}</ul>
                </Suspense>}
        </div>
    )
}