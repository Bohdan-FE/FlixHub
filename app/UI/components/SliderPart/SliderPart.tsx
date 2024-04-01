'use client'

import { getRecomendations } from "@/app/lib/getRecomendations";
import { useEffect, useState } from "react";
import Slider from "../Slider/Slider";
import clsx from "clsx";
import { getSimilar } from "@/app/lib/getSimilar";

function SliderPart({ id, type }: { id: string, type: 'movie' | 'tv' }) {
    const [isRecomendation, setisRecomendation] = useState<boolean>(true)
    const [recomandationData, setRecomandationData] = useState<MoviesData | TVData | null>(null)
    const [similarData, setSimilarData] = useState<MoviesData | TVData | null>(null)

    useEffect(() => {
        async function getSliderData() {
            try {
                const [recomandation, similar] = await Promise.all([getRecomendations(id, type), getSimilar(id, type)])
                setRecomandationData(recomandation)
                setSimilarData(similar)
            } catch (error) {
                console.log(error)
            }
        }
        getSliderData()
    }, [id, isRecomendation, type])

    if (!recomandationData || !similarData) return
    if (recomandationData?.results.length === 0 && similarData?.results.length === 0) return

    return (
        <div className="mb-5">
            <div className="mx-auto header:w-96 w-80 header:mb-10 mb-5 rounded-2xl transition-all bg-neutral-800">
                <button className={clsx("w-1/2 p-3 header:text-xl border-r-[1px] border-neutral-700 rounded-l-2xl active:scale-95 transition-all text-base", {
                    'shadow-sliderBtm bg-neutral-600': isRecomendation
                })} onClick={() => setisRecomendation(true)}>Recommendation</button>
                <button className={clsx("w-1/2 p-3 header:text-xl border-l-[1px] border-neutral-700 rounded-r-2xl active:scale-95 transition-all text-base", {
                    'shadow-sliderBtm bg-neutral-600': !isRecomendation
                })} onClick={() => setisRecomendation(false)}>Similar</button>
            </div>
            {isRecomendation && <Slider data={recomandationData.results} type={type} />}
            {!isRecomendation && <Slider data={similarData.results} type={type} />}
        </div>
    )
}

export default SliderPart;