import MovieNavigation from "@/app/UI/components/MovieNavigation/MovieNavigation"



export default function RootLayout({
    children, params
}: {
    children: React.ReactNode, params: { id: string }
}) {

    return (<>
        <MovieNavigation id={params.id} />
        {children}
    </>
    )
}