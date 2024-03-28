'use client'
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineRadioButtonChecked } from "react-icons/md";
import { MdRadioButtonUnchecked } from "react-icons/md";

export default function SearchBar() {
    const params = useSearchParams()
    const pathname = usePathname()
    const [query, setQuery] = useState(params.get('query') || '')
    const [isMovieChecked, setIsMovieChecked] = useState(true)
    const router = useRouter()

    useEffect(() => {
        setIsMovieChecked(!pathname.includes('/tv'))
    }, [pathname])

    const handlerSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault()
        if (!query) return
        if (isMovieChecked) {
            router.push(`/moviesearch?query=${query}`)
            return
        }
        router.push(`/tvsearch?query=${query}`)
    }

    return (<div className="relative max-w-[450px] w-full">
        <form className="flex gap-3 items-center" onSubmit={handlerSubmit}>
            <div className="relative text-[16px] w-full">
                <input className="w-full bg-transparent border-2 border-neutral-400 rounded-full outline-none focus:border-neutral-300 appearance-none px-3 py-1 transition-all" value={query} type="text" onChange={(e) => setQuery(e.target.value)} />
                <button className="absolute right-3 top-1/2 translate-y-[-50%] group text-xl"><IoIosSearch className="group-hover:fill-neutral-200 transition-colors" /></button>
            </div>
            <div className=" text-[16px] flex gap-2">
                <div className="flex items-center gap-1">
                    <label className="cursor-pointer" htmlFor="movies">{isMovieChecked ? <MdOutlineRadioButtonChecked /> : <MdRadioButtonUnchecked />}</label>
                    <input type="radio" name="search" id="movies" hidden checked={isMovieChecked} onChange={() => setIsMovieChecked(true)} />
                    <label className="cursor-pointer" htmlFor="movies">Movie</label>
                </div>
                <div className="flex items-center gap-1">
                    <label className="cursor-pointer" htmlFor="tvs">{!isMovieChecked ? <MdOutlineRadioButtonChecked /> : <MdRadioButtonUnchecked />}</label>
                    <input type="radio" name="search" id="tvs" checked={!isMovieChecked} hidden onChange={() => setIsMovieChecked(false)} />
                    <label className="cursor-pointer" htmlFor="tvs" >TV</label>
                </div>
            </div>
        </form>
        <div className="absolute top-[120%] w-full bg-neutral-700 z-10 rounded-md p-2"></div>
    </div>
    )
}