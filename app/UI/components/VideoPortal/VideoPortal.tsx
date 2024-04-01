'use client'

export default function VideoPortal({ setIsActive, youtubeKey }: { setIsActive: React.Dispatch<React.SetStateAction<boolean>>, youtubeKey: string }) {
    return (
        <div className="w-full h-full fixed bg-[rgba(46,45,45,0.7)] top-0 left-0 z-[101] flex items-center justify-center" onClick={() => setIsActive(false)}>
            <div className="w-full p-6 aspect-video">
                <iframe className="w-full aspect-video mx-auto" src={`https://www.youtube.com/embed/${youtubeKey}?si=6pp1p3f5ib5lLmr8`} title="YouTube video player2" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"></iframe>
            </div>
        </div >
    )
}

