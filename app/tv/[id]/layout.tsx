import MovieNavigation from "@/app/UI/components/MovieNavigation/MovieNavigation"
import TVNavigation from "@/app/UI/components/TVNavigation/TVNavigation"



export default function RootLayout({
    children, params
}: {
    children: React.ReactNode, params: { id: string }
}) {

    return (<>
        <TVNavigation id={params.id} />
        {children}
    </>
    )
}