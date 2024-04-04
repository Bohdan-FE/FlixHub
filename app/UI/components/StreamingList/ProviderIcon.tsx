'use client'
import netflixIcon from '../../../../public/netflix.png'
import HBOIcon from '../../../../public/HBO.png'
import skyShowtimeIcon from '../../../../public/skysnowtime.png'
import disneyIcon from '../../../../public/disny.png'
import amazonIcon from '../../../../public/Prime-Video-Logo-PNG-Pic.png'
import Image, { StaticImageData } from 'next/image'
import { useEffect, useState } from 'react'



export default function ProviderIcon({ provider }: { provider: string }) {
    const providerNames = ['HBO Max', 'SkyShowtime', 'Disney Plus', 'Netflix', 'Amazon Prime Video']
    const [src, setSrc] = useState<StaticImageData | string>('')
    useEffect(() => {
        switch (provider) {
            case 'HBO Max':
                setSrc(HBOIcon)
                break;
            case 'SkyShowtime':
                setSrc(skyShowtimeIcon)
                break;
            case 'Disney Plus':
                setSrc(disneyIcon)
                break;
            case 'Netflix':
                setSrc(netflixIcon)
                break;
            case 'Amazon Prime Video':
                setSrc(amazonIcon)
                break;
            default:
                break;
        }
    }, [provider])

    if (!providerNames.includes(provider) || !src) return

    return (
        <div className=' overflow-hidden rounded-xl'>
            <Image className='block' alt='icon' src={src} height={58} />
        </div>
    )
}