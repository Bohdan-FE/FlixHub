'use client'

import Image from "next/image";


function Poster({ image, title, videos }: { image: string | null, title: string, videos: VideoData }) {
    const videosArr = videos.results
    return (
        <div className="flex items-center shrink-0">
            <div className="relative transform-style-3d perspective-1000 group  transition-all w-[376px] h-[564px] hover:rotate-90 hover:scale-150 hover:translate-x-[75%] duration-500">
                <div className="backface-hidden group-hover:rotate-y-[540deg] transition-all absolute left-0 top-0 w-full h-full rounded-xl overflow-hidden duration-500 shadow-filmCard">
                    <Image className="blok w-[376px] h-[564px]" src={`https://image.tmdb.org/t/p/w500${image}`} width={376} height={564} alt={title} />
                </div>
                <div className="backface-hidden group-hover:rotate-y-[720deg] transition-all absolute left-0 top-0 w-full h-full rotate-y-180 rounded-xl overflow-hidden duration-500 shadow-filmCard">
                    <div className="bg-black w-full h-full relative">
                        <iframe className="rotate-[270deg] w-[564px] h-[376px] translate-x-[-100px] translate-y-[94px]" src={`https://www.youtube.com/embed/${videosArr[0].key}?si=L5epZ-SD4LE_g2n5`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Poster;