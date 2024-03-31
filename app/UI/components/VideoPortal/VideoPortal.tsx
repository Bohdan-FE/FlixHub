'use client'

export default function VideoPortal({ setIsActive, key }: { setIsActive: React.Dispatch<React.SetStateAction<boolean>>, key: string }) {
    return (
        <div className="w-full h-full fixed bg-[rgba(46,45,45,0.7)] top-0 left-0 z-[101] flex items-center justify-center" onClick={() => setIsActive(false)}>
            <div className="w-full p-6 aspect-video"><iframe className=" w-full aspect-video mx-auto" src={`https://www.youtube.com/embed/${key}?si=L5epZ-SD4LE_g2n5`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"></iframe></div>
        </div>
    )
}