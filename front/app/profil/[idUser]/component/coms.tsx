'use client'
import { GetUser } from "@/api/user"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"


export function ComsProfil(user: any){
    const [allComsUser, setAllComsUser] = useState([])
    const idUser = useParams().idUser

    function getComsUser() {
        GetUser(idUser)
        .then((res)=>{
            console.log(res.user.coms)
            setAllComsUser(res.user.coms)
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    useEffect(()=>{
        getComsUser()
    },[])

    return (
        <section>
            <h1>Tout les commentaire de {user.user.pseudo}</h1>
            {allComsUser.map((comsUser, index)=>{
                if (allComsUser.length === 0 || allComsUser === undefined || allComsUser === null) {
                    return (
                        <div style={{borderStyle:"solid", borderWidth:"0.3vh", backgroundColor:user.backgroundColorThird, borderColor:"black", width:"85vw", height:"5vh"}} key={index}>      
                            <h3 style={{fontSize:"3vh", color:user.textColor}}>Aucun commentaire</h3>
                        </div>
                    ) } else {
                    return (
                        <div style={{borderStyle:"solid", borderWidth:"0.3vh", backgroundColor:user.backgroundColorThird, borderColor:"black", width:"85vw", height:"5vh"}} key={index}>      
                        <a href={"/" + comsUser.idCategorie + "/topic/" + comsUser.idPost}><h3 style={{fontSize:"3vh", color:user.textColor}}>{comsUser.textComs}</h3></a>
                    </div>   
                    )
                }
            })}
        </section>

    )
}