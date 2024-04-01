'use client'

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useState } from "react";

function CastCard({ castMember }: { castMember: CastMember }) {
    const [src, setSrc] = useState<null | string>(`https://image.tmdb.org/t/p/w500${castMember.profile_path}`)

    if (!src) return
    return (
        <li>
            <Link href={`/actors/${castMember.id}`}>
                <div className="rounded-2xl overflow-hidden mb-2">
                    <Image className="block object-cover w-full" src={src} width={500} height={700} alt={castMember.name} onError={() => setSrc(null)} />
                </div>
                <p className="text-center font-bold filter:text-xl text:base">{castMember.name}</p>
                <p className="text-center filter:text-lg text:base">{castMember.character}</p>
            </Link>
        </li>
    );
}

export default CastCard;