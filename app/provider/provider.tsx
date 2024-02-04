import { SessionProvider } from "next-auth/react"

export default function Provider({ children }) {
    return (
        <SessionProvider session={session}>
            {children}
        </SessionProvider>
    )
}