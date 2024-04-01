'use client'
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

function MovieNavigation({ id }: { id: string }) {
    const pathname = usePathname()

    return (
        <div className="absolute top-0 header:right-1/4 w-[320px] h-8 right-1/2 translate-x-[50%] z-10">
            <Link className={clsx("block absolute top-0 left-0 font-bold pb-2 px-16 [clip-path:polygon(0%_0%,100%_0%,83%_100%,19%_100%)] shadow-lg transition-all", pathname === `/movies/${id}` ? 'bg-neutral-700 z-[11]' : 'bg-neutral-800 z-10')} href={`/movies/${id}`}>DETAILS</Link>
            <Link className={clsx("block absolute top-0 right-0 font-bold pb-2 px-16 [clip-path:polygon(0%_0%,100%_0%,83%_100%,19%_100%)] shadow-lg transition-all", pathname === `/movies/${id}/cast` ? 'bg-neutral-700 z-[11]' : 'bg-neutral-800 z-10')} href={`/movies/${id}/cast`}>CAST</Link>
        </div>
    );
}

export default MovieNavigation;