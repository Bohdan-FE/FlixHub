'use client'

import { useCallback, useState } from "react"
import SortInput from "../SortInput/SortInput"
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function FilterMovie() {
    const [selectedSort, setSelectedSort] = useState<string>('')
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const router = useRouter();

    const createQueryString = useCallback(
        (name: string, value: string) => {
            if (!name || !value) return ''
            const params = new URLSearchParams(searchParams.toString())
            params.set(name, value)

            return params.toString()
        },
        [searchParams]
    )

    const handlerSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault()

        router.push('/' + '?' + createQueryString('sortby', selectedSort))
    }

    return (
        <form onSubmit={handlerSubmit}>
            <SortInput selectedSort={selectedSort} setSelectedSort={setSelectedSort} />
            <button>submit</button>
        </form>
    )
}