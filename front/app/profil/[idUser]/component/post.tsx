'use client'
import { GetUser } from "@/api/user"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"


export function PostProfil(user: any){
    const [allPostUser, setAllPostUser] = useState([])
    const idUser = useParams().idUser

    function getPostUser() {
        GetUser(idUser)
        .then((res)=>{
            console.log(res.user.posts)
            setAllPostUser(res.user.posts)
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    useEffect(()=>{
        getPostUser()
    },[])

    return (
        <section>
            <h1>Tout les Topic de {user.user.pseudo}</h1>
            {allPostUser.map((postUser, index)=>{
                if (allPostUser.length === 0 || allPostUser === undefined || allPostUser === null) {
                    return (
                        <div style={{borderStyle:"solid", borderWidth:"0.3vh", backgroundColor:user.backgroundColorThird, borderColor:"black", width:"85vw", height:"5vh"}} key={index}>      
                            <h3 style={{fontSize:"3vh", color:user.textColor}}>Aucun commentaire</h3>
                        </div>
                    ) } else {
                    return (
                        <div style={{borderStyle:"solid", borderWidth:"0.3vh", backgroundColor:user.backgroundColorThird, borderColor:"black", width:"85vw", height:"5vh"}} key={index}>      
                        <a href={"/" + postUser.idCategorie + "/topic/" + postUser.id}><h3 style={{fontSize:"3vh", color:user.textColor}}>{postUser.textPost}</h3></a>
                    </div>   
                    )
                }
            })}
        </section>

    )
}