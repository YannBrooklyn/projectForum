'use client'
import { getAllActu } from "@/api/post"
import { useEffect, useState, useSyncExternalStore } from "react"
import Link from "next/link"
import { useParams } from "next/navigation"


export function PresPost(prop: any) {
    const idCategorie = useParams().nameCategorie
    const [presPost, setPresPost] = useState([])
    const paramsCategorie = useParams().nameCategorie
    const getPresPost = () => {
        getAllActu()
        .then((res:any) => {
            setPresPost(res)
            console.log('rorrororo' + res)
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
                            <h3 className="w-12/12 border-solid border border-black h-12" style={{color:prop.textColor, backgroundColor:prop.backgroundColorCategorie}}>{prepost.titlePost}</h3>
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