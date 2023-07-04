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
        <html lang="fr">
            
            <body>
                {children}
            </body>
        </html>
    )
}