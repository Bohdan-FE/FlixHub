'use client'

import { Suspense, useState } from "react"
import ActorMovies from "../ActorMovies/ActorMovies"
import ActorTV from "../ActorTV/ActorTV"
import clsx from "clsx"
import { Loading } from "../Loading/Loading"

export const PickActorsMovies = ({ id }: { id: string }) => {
    const [isMovies, setIsMovies] = useState(true)

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
                <Suspense key={id} fallback={<Loading />}>
                    <ActorMovies id={id} />
                </Suspense>}
            {!isMovies &&
                <Suspense key={id} fallback={<Loading />}>
                    <ActorTV id={id} />
                </Suspense>}
        </div>
    )
}