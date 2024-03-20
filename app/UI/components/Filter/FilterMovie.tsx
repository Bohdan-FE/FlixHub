'use client'

import { useCallback, useState } from "react"
import SortInput from "../SortInput/SortInput"
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import GenresInput from "../GenresInput/GenresInput";

export default function FilterMovie() {
    const [selectedSort, setSelectedSort] = useState<string>('popularity.desc')
    const [selectedGenre, setSelectedGenre] = useState<string>('')
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const router = useRouter();

    const createQueryString = (name: string, value: string) => {
        if (!name || !value) return ''
        const params = `${name}=${value}`
        return params
    }

    const handlerSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault()
        const queryString = `?${createQueryString('sortby', selectedSort)}&${createQueryString('genre', selectedGenre)}`;
        const url = queryString ? `/${queryString}` : '/';
        router.push(url);
    }

    return (
        <form className="flex gap-2 mb-5" onSubmit={handlerSubmit}>
            <SortInput selectedSort={selectedSort} setSelectedSort={setSelectedSort} />
            <GenresInput selectedGenre={selectedGenre} setSelectedGenre={setSelectedGenre} />
            <button>submit</button>
        </form>
    )
}