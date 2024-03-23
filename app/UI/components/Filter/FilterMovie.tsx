'use client'

import { useState } from "react"
import SortInput from "../SortInput/SortInput"
import { useRouter } from "next/navigation";
import GenresInput from "../GenresInput/GenresInput";
import { YearInput } from "../YearInput/YearInput";


export default function FilterMovie() {
    const [isActive, setIsActive] = useState({ sort: false, genres: false, year: false })
    const [selectedSort, setSelectedSort] = useState<string>('popularity.desc')
    const [selectedGenres, setSelectedGenres] = useState<[] | Genre[]>([])
    const [selectedYear, setSelectedYear] = useState<string>('')
    const router = useRouter();

    const createQueryString = (name: string, value: string | [] | Genre[]) => {
        if (!name || !value || value.length === 0) return ''
        if (Array.isArray(value)) {
            const params = value.map(item => item.id).join(',')
            return `&${name}=${params}`
        }
        const params = `&${name}=${value}`
        return params
    }

    const handlerSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault()
        const queryString = `?${createQueryString('sortby', selectedSort)}${createQueryString('genre', selectedGenres)}${createQueryString('year', selectedYear)}`;
        const url = queryString ? `/${queryString}` : '/';
        router.push(url);
        setIsActive({ sort: false, genres: false, year: false })
    }
    const handlerReset = () => {
        setIsActive({ sort: false, genres: false, year: false })
        setSelectedGenres([])
        setSelectedSort('popularity.desc')
        setSelectedYear('')
    }
    return (
        <form className="flex gap-2 mb-8" onSubmit={handlerSubmit}>
            <SortInput selectedSort={selectedSort} setSelectedSort={setSelectedSort} isActive={isActive} setIsActive={setIsActive} />
            <GenresInput selectedGenres={selectedGenres} setSelectedGenres={setSelectedGenres} isActive={isActive} setIsActive={setIsActive} />
            <YearInput selectedYear={selectedYear} setSelectedYear={setSelectedYear} isActive={isActive} setIsActive={setIsActive} />
            <button className="w-[148px] h-[48px] relative text-[18px] leading-5 font-medium bg-neutral-500 rounded-2xl ml-2 hover:bg-neutral-400 transition-colors">Submit</button>
            <button className="w-[148px] h-[48px] relative text-[18px] leading-5 font-medium bg-neutral-700 rounded-2xl hover:bg-neutral-600 transition-colors" onClick={handlerReset}>Reset</button>
        </form>
    )
}