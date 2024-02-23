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
            <div className="mx-auto w-96 mb-5 rounded-2xl transition-all">
                <button className={clsx("w-1/2 p-3 text-xl border-r-[1px] border-neutral-700 rounded-l-2xl bg-neutral-800 active:scale-95", {
                    'shadow-filmCard bg-neutral-600': isRecomendation
                })} onClick={() => setisRecomendation(true)}>Recommendation</button>
                <button className={clsx("w-1/2 p-3 text-xl border-l-[1px] border-neutral-700 rounded-r-2xl bg-neutral-800 active:scale-95", {
                    'shadow-filmCard bg-neutral-600': !isRecomendation
                })} onClick={() => setisRecomendation(false)}>Similar</button>
            </div>
            <Slider movies={isRecomendation ? recomandationData.results : similarData.results} />
        </div>
    )
}

export default SliderPart;