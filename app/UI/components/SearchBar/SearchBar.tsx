'use client'

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineRadioButtonChecked } from "react-icons/md";
import { MdRadioButtonUnchecked } from "react-icons/md";
import SearchList from "./SearchList";

export function SearchBar() {
    const pathname = usePathname()
    const [query, setQuery] = useState('')
    const [isMovieChecked, setIsMovieChecked] = useState(true)
    const [movies, setMovies] = useState<null | MoviesData | TVData>(null)
    const [focus, setFocus] = useState(false)
    const [mouse, setMouse] = useState(false)
    const router = useRouter()




    useEffect(() => {
        if (!mouse && !focus) setMovies(null)
    }, [focus, mouse])

    useEffect(() => {
        if (query.length < 2) {
            setMovies(null)
            return
        }
        const getMovies = async (query: string) => {
            try {
                const response = await fetch(`https://api.themoviedb.org/3/search/${isMovieChecked ? 'movie' : 'tv'}?query=${query}&api_key=9efc729b95f20ce1b26304465f4ffb42`)
                const moviesData: MoviesData = await response.json()
                setMovies(moviesData)
            } catch (error) {
                setMovies(null)
                console.log(error, 'error')
            }
        }
        getMovies(query)
    }, [query, isMovieChecked])

    const handleMouseToggle = useCallback((isMouseOver: boolean) => {
        setMouse(isMouseOver);
    }, []);

    const handlerSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault()
        setMovies(null)
        if (!query) return
        if (isMovieChecked) {
            router.push(`/moviesearch?query=${query}`)
            return
        }
        router.push(`/tvsearch?query=${query}`)
        setQuery('')
    }

    const handlerOnClick = (id: string) => {
        setMovies(null)
        setQuery('')
        if (isMovieChecked) router.push(`/movies/${id}`)
        if (!isMovieChecked) router.push(`/tv/${id}`)
    }
    const closeSearch = () => {
        setMovies(null)
        setQuery('')
    }
    return (
        <div className="max-w-[450px] w-full min-w-[180px] header:mx-auto cardlisttab:relative">
            <form className="flex gap-2 items-center" onSubmit={handlerSubmit}>
                <div className="relative text-[16px] w-full">
                    <input className="w-full bg-transparent border-2 border-neutral-400 rounded-full outline-none focus:border-neutral-300 appearance-none px-3 py-1 transition-all" value={query} onBlur={() => setFocus(false)} onFocus={() => setFocus(true)} type="text" onChange={(e) => setQuery(e.target.value)} />
                    <button className="absolute right-3 top-1/2 translate-y-[-50%] group text-xl"><IoIosSearch className="group-hover:fill-neutral-200 transition-colors" /></button>
                </div>
                <div className=" text-[16px] flex gap-0 flex-col header:flex-row header:gap-2">
                    <div className="flex items-center gap-1">
                        <label className="cursor-pointer" htmlFor="movies">{isMovieChecked ? <MdOutlineRadioButtonChecked /> : <MdRadioButtonUnchecked />}</label>
                        <input type="radio" name="search" id="movies" hidden checked={isMovieChecked} onChange={() => setIsMovieChecked(true)} />
                        <label className="cursor-pointer leading-5" htmlFor="movies">Movie</label>
                    </div>
                    <div className="flex items-center gap-1">
                        <label className="cursor-pointer" htmlFor="tvs">{!isMovieChecked ? <MdOutlineRadioButtonChecked /> : <MdRadioButtonUnchecked />}</label>
                        <input type="radio" name="search" id="tvs" checked={!isMovieChecked} hidden onChange={() => setIsMovieChecked(false)} />
                        <label className="cursor-pointer leading-5" htmlFor="tvs" >TV</label>
                    </div>
                </div>
            </form>
            {movies && movies?.results.length !== 0 && <SearchList movies={movies} handleMouseToggle={handleMouseToggle} handlerOnClick={handlerOnClick} closeSearch={closeSearch} isMovieChecked={isMovieChecked} />}
        </div>
    )
}



