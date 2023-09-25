import './mobile.css'

export const metadata = {
    title: "Accueil : Actualité"
}



export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
            <>
                {children}
            </>
    )
}