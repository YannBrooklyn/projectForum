import './mobile.css'

export const metadata = {
    title: "Forum"
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