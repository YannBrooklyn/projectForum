import './mobile.css'

export const metadata = {
    title: "Titre Actualité"
}

export default function RootLayout({
    children,
} : {
    children: React.ReactNode
}) {
    return (
        <>

                {children}
        </>
            
    )
}