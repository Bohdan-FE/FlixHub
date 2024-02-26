'use client'

import { getRecomendations } from "@/app/lib/getRecomendations";
import { useEffect, useState } from "react";
import Slider from "../Slider/Slider";
import clsx from "clsx";
import { getSimilar } from "@/app/lib/getSimilar";

function SliderPart({ id }: { id: string }) {
    const [isRecomendation, setisRecomendation] = useState<boolean>(true)
    const [recomandationData, setRecomandationData] = useState<MoviesData | null>(null)
    const [similarData, setSimilarData] = useState<MoviesData | null>(null)

    useEffect(() => {
        async function getSliderData() {
            try {
                const [recomandation, similar] = await Promise.all([getRecomendations(id), getSimilar(id)])
                setRecomandationData(recomandation)
                setSimilarData(similar)
            } catch (error) {
                console.log(error)
            }
        }
        getSliderData()
    }, [id, isRecomendation])

    if (!recomandationData || !similarData) return

    return (
        <div>
            <div className="mx-auto w-96 mb-10 rounded-2xl transition-all bg-neutral-800">
                <button className={clsx("w-1/2 p-3 text-xl border-r-[1px] border-neutral-700 rounded-l-2xl active:scale-95 transition-all", {
                    'shadow-sliderBtm bg-neutral-600': isRecomendation
                })} onClick={() => setisRecomendation(true)}>Recommendation</button>
                <button className={clsx("w-1/2 p-3 text-xl border-l-[1px] border-neutral-700 rounded-r-2xl active:scale-95 transition-all", {
                    'shadow-sliderBtm bg-neutral-600': !isRecomendation
                })} onClick={() => setisRecomendation(false)}>Similar</button>
            </div>
            {isRecomendation && <Slider movies={recomandationData.results} />}
            {!isRecomendation && <Slider movies={similarData.results} />}
        </div>
    )
}

export default SliderPart;