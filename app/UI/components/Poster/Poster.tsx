'use client'

import Image from "next/image";
import { useState } from "react";
import { clsx } from "clsx";
import { RxCross1 } from "react-icons/rx";
import { IoIosArrowForward } from "react-icons/io";


function Poster({ image, title, videos }: { image: string | null, title: string, videos: VideoData }) {
    const [isActive, setIsActive] = useState<Boolean>(false)
    const [isPlay, setIsPlay] = useState<Boolean>(true)
    const videosArr = videos.results
    const trailerKey = videosArr.filter(video => video.type === 'Trailer' || 'Teaser')[0]?.key

    const onClickHandler = () => {
        setIsActive(!isActive)
        setIsPlay(true)
    }

    const onClickIcon = () => {
        setIsActive(!isActive)
        setIsPlay(false)
    }

    return (
        <div className="flex items-center shrink-0 rounded-xl">
            <div className={clsx('relative transform-style-3d perspective-1000 transition-all w-[376px] h-[564px] duration-500 rounded-xl', { 'rotate-90 scale-150 translate-x-[75%]': isActive })}>
                <div className={clsx("backface-hidden transition-all absolute left-0 top-0 w-full h-full rounded-xl overflow-hidden duration-500 shadow-filmCard", { 'rotate-y-[540deg]': isActive })} >
                    <Image className="rounded-xl blok w-[376px] h-[564px]" src={`https://image.tmdb.org/t/p/w500${image}`} width={376} height={564} alt={title} />
                    <div className="absolute top-6 right-0 bg-gradient-watch rounded-l-2xl">{videosArr.length !== 0 && <button className="flex items-center italic animate-watch" onClick={onClickHandler}>WATCH TRAILER<IoIosArrowForward className="w-10 h-10" /><IoIosArrowForward className="w-10 h-10 translate-x-[-25px]" /></button>}</div>
                </div>
                <div className={clsx("backface-hidden transition-all absolute left-0 top-0 w-full h-full rotate-y-180 duration-500 shadow-filmCard rounded-xl", { 'rotate-y-[720deg]': isActive })}>
                    <div className="bg-black w-full h-full relative rounded-xl">
                        {trailerKey && <iframe className="rounded-xl rotate-[270deg] w-[564px] h-[376px] translate-x-[-94px] translate-y-[94px]" src={isPlay ? `https://www.youtube.com/embed/${trailerKey}?si=L5epZ-SD4LE_g2n5` : ''} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"></iframe>}
                        <button className={clsx(' group absolute p-1 bg-[rgba(46,45,45)] rounded-full left-0 top-0 cursor-pointer transition-all duration-300 delay-300', { 'top-[-24px] left-[-20px]': isActive })} onClick={onClickIcon}>
                            <RxCross1 className=" text-neutral-500 group-hover:text-white" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Poster;