'use client'
import { OpenMenuBurgerLogout } from './client-component'
import { CloseMenuBurgerLogout } from './client-component'
// import { OpenMenuBurgerLoged } from './client-component'
// import { CloseMenuBurgerLoged } from './client-component'

import './mobile.css'



export const metadata = {
    title: "Accueil : Actualité"
}




export function MenuBurgerLogout() {
    return(
        <nav id="navBurger" style={{display:"none", position:"fixed", left:"0", height:"100%", width:"45%", backgroundColor:"#292929"}}>
            <button onClick={CloseMenuBurgerLogout} style={{position:"absolute", top:"0", left:"19vh", color:"white", fontSize:"2vh"}}>X</button>
            <div style={{display:"flex", flexDirection:"column", justifyContent:"center", height:"100%", width:"100%"}}>
                <a href="/"><button style={{backgroundColor:"#181818", color:"white", borderColor:"black", borderWidth:"0.2vh", width:"100%", height:"5vh"}}>Accueil</button></a>
                <a href="/forum"><button style={{backgroundColor:"#181818", color:"white", borderColor:"black", borderWidth:"0.2vh", width:"100%", height:"5vh"}}>Forum</button></a>
                <a href="/inscription"><button style={{backgroundColor:"#181818", color:"white", borderColor:"black", borderWidth:"0.2vh", width:"100%", height:"5vh"}}>Inscription</button></a>
                <a href="/connexion"><button style={{backgroundColor:"#181818", color:"white", borderColor:"black", borderWidth:"0.2vh", width:"100%", height:"5vh"}}>Connexion</button></a>
            </div>
        </nav>
    )
}

// export function MenuBurgerLoged() {
//     return(
//         <nav id="navBurgerLog" style={{display:"none", position:"fixed", left:"0", height:"100%", width:"45%", backgroundColor:"#292929"}}>
//             <button onClick={CloseMenuBurgerLoged} style={{position:"absolute", top:"0", left:"42vh", color:"white", fontSize:"0.2vh"}}>X</button>
//             <div style={{display:"flex", flexDirection:"column", justifyContent:"center", height:"100%", width:"100%"}}>
//                 <a href="/"><button style={{backgroundColor:"#181818", color:"white", borderColor:"black", borderWidth:"0.2vh", width:"100%", height:"5vh"}}>Accueil</button></a>
//                 <a href="/forum"><button style={{backgroundColor:"#181818", color:"white", borderColor:"black", borderWidth:"0.2vh", width:"100%", height:"5vh"}}>Forum</button></a>
//                 <a href="/forum/messageprivee"><button style={{backgroundColor:"#181818", color:"white", borderColor:"black", borderWidth:"0.2vh", width:"100%", height:"5vh"}}>Message Privée</button></a>
//                 <a href="/forum/profil"><button style={{backgroundColor:"#181818", color:"white", borderColor:"black", borderWidth:"0.2vh", width:"100%", height:"5vh"}}>Profil</button></a>
//                 <a href="/forum/parametre"><button style={{backgroundColor:"#181818", color:"white", borderColor:"black", borderWidth:"0.2vh", width:"100%", height:"5vh"}}>Paramètre</button></a>
//                 <a href="/deconnexion"><button style={{backgroundColor:"#181818", color:"white", borderColor:"black", borderWidth:"0.2vh", width:"100%", height:"5vh"}}>Deconnexion</button></a>
//             </div>
//         </nav>
//     )
// }



export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="fr">
            
            <body style={{backgroundColor:'#2F2F2F'}}>
                <header className='flex items-center justify-between flex-col gap-4 w-12/12'>
                <MenuBurgerLogout/>
                {/* <MenuBurgerLoged/> */}
                    <h2 className='border-solid text-blue-600 border-white'>NAME</h2>
                    <ul className='flex gap-8'>
                        <li id="iconeNavBurger" className='none text-white'><img onClick={OpenMenuBurgerLogout} src="/image/icone/burgerIcone.png" alt="MenuBurger" style={{height:"2vh", width:"5vw"}} /></li>
                        <a href="/"><li className=' text-white'>Accueil</li></a>
                        <a href="/connexion"><li className='none text-white'>Connexion</li></a>
                    </ul>
                    <hr className='w-12/12'/>
                </header>
                <main className="w-12/12 flex flex-col justify-center items-center">

                {children}

                </main>
            </body>
        </html>
    )
}