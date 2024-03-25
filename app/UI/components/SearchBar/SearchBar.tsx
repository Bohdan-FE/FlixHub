'use client'
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineRadioButtonChecked } from "react-icons/md";
import { MdRadioButtonUnchecked } from "react-icons/md";

export default function SearchBar() {
    const params = useSearchParams()
    const [query, setQuery] = useState(params.get('query') || '')
    const [isMovieChecked, setIsMovieChecked] = useState(true)
    const router = useRouter()
    const handlerSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault()
        if (!query) return
        if (isMovieChecked) {
            router.push(`/moviesearch?query=${query}`)
            return
        }
        router.push(`/tvsearch?query=${query}`)
    }

    return (
        <form className="flex gap-3 items-center" onSubmit={handlerSubmit}>
            <div className="relative text-[16px]">
                <input className="bg-transparent border-2 border-neutral-400 rounded-full outline-none focus:border-neutral-300 appearance-none px-3 py-1 transition-all" value={query} type="text" onChange={(e) => setQuery(e.target.value)} />
                <button className="absolute right-3 top-1/2 translate-y-[-50%] group text-xl"><IoIosSearch className="group-hover:fill-neutral-200 transition-colors" /></button>
            </div>
            <div className=" text-[16px] flex gap-2">
                <div className="flex items-center gap-1">
                    <label className="cursor-pointer" htmlFor="movies">{isMovieChecked ? <MdOutlineRadioButtonChecked /> : <MdRadioButtonUnchecked />}</label>
                    <input type="radio" name="search" id="movies" hidden defaultChecked onChange={() => setIsMovieChecked(!isMovieChecked)} />
                    <label className="cursor-pointer" htmlFor="movies">Movie</label>
                </div>
                <div className="flex items-center gap-1">
                    <label className="cursor-pointer" htmlFor="tvs">{!isMovieChecked ? <MdOutlineRadioButtonChecked /> : <MdRadioButtonUnchecked />}</label>
                    <input type="radio" name="search" id="tvs" hidden onChange={() => setIsMovieChecked(!isMovieChecked)} />
                    <label className="cursor-pointer" htmlFor="tvs" >TV</label>
                </div>
            </div>
        </form>
    )
}