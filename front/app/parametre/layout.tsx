import './mobile.css'

export const metada = {
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