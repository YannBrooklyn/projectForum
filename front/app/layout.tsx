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
            
            <body style={{backgroundColor:'#2F2F2F'}}>
                <header className='flex items-center justify-between flex-col gap-4 w-12/12'>
                    
                    <h2 className='border-solid text-blue-600 border-white'>NAME</h2>
                    <ul className='flex gap-8'>
                        <li className='none text-white'></li>
                        <li className=' text-white'>Accueil</li>
                        <li className='none text-white'>Connexion</li>
                    </ul>
                    <hr className='w-12/12'/>
                </header>
                {children}

            </body>
        </html>
    )
}