import './mobile.css'

export const metadata = {
    title: "Nouveau Topic"
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