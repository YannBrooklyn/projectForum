'use client'
import { getAllPost } from "@/api/post"
import { useEffect, useState, useSyncExternalStore } from "react"
import Link from "next/link"
import { useParams } from "next/navigation"


export function PresPost(prop: any) {
    const idCategorie = useParams().nameCategorie
    const [presPost, setPresPost] = useState([])
    const paramsCategorie = useParams().nameCategorie
    const getPresPost = () => {
        getAllPost()
        .then((res:any) => {
            setPresPost(res)
            console.log(res)
        })
        .catch((error)=> {
            console.log("wazaaa", + error)
        })
    }

    useEffect(()=> {
        getPresPost();
    }, [])

    return(
        <>
            {presPost != undefined && presPost.length > 0 ?
                presPost.map((prepost, index)=> {
                    if (prepost.idCategorie == idCategorie) {

                        return(
                            
                            <a key={index} href={ paramsCategorie + "/topic/" + prepost.id}>
                                <div  className="w-12/12 border-solid border border-black h-12">

                                    <h3 style={{color:prop.textColor, backgroundColor:prop.backgroundColorCategorie}}>{prepost.titlePost}</h3>
                                    <div className="flex justify-around">

                                    <h5 className="text-xs">De : {prepost.user.pseudo}</h5>
                                    <h5 className="text-xs">Réponse : {prepost.coms.length}</h5>
                                    </div>
                                </div>
                            </a>
                        )
                    }
                }) : null
            }
        </>
    );
}

export function ButtonNewTopic(prop: any){
    const params = useParams()
    const [token, setToken] = useState('')

    useEffect(()=>{
        const dataToken = localStorage.getItem('tokenUser')
        dataToken ?
            setToken(dataToken) : null
    },[])
    return(
        <>
        {token ? 
            (
                <Link href={"/" + params.nameCategorie + "/newTopic"}><button className="rounded-full border border-black border-solid h-8 w-28 sm:rounded-full sm:border sm:border-black sm:border-solid sm:h-8 sm:w-28 md:rounded-full md:border md:border-black md:border-solid md:h-8 md:w-28 lg:rounded-full lg:border lg:border-black lg:border-solid lg:h-8 lg:w-28 xl:rounded-full xl:border xl:border-black xl:border-solid xl:h-8 xl:w-28" style={{backgroundColor:prop.backgroundColorGeneralButton, color:prop.textColorGeneralButton}}>Crée un Topic</button></Link>
            ) : null}
        </>
    )
}