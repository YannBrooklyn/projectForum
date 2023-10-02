'use client'
import { useEffect, useState } from "react";
import  { ContentTopic } from "./topic-component";
import { OpenModalEditer } from "./topic-component";
import { OpenModalSupprimer } from "./topic-component";
import jwt_decode from "jsonwebtoken"
import { GetUser } from "@/api/user";
import { useParams } from "next/navigation";
import { getPost, getPostNoParams } from "@/api/post";
import { getSet } from "@/api/setting";

export default function Topic(){
    
    const idPost = useParams().idTopic
    const [post, setPost] = useState('')
    const [generalTextColor, setGeneralTextColor] = useState('')
    const [navbarTextColor, setNavbarTextColor] = useState('')
    const [nameForumColor, setNameForumColor] = useState('')
    const [textColorGeneralButton, setTextColorGeneralButton] = useState('')
    const [textColorDeleteButton, setTextColorDeleteButton] = useState('')
    const [textColorUpdateButton, setTextColorUpdateButton] = useState('')
    const [textColorCardMember, setTextColorCardMember] = useState('')
    const [backgroundColorNavbar, setBackgroundColorNavbar] = useState('')
    const [backgroundColorFirst, setBackgroundColorFirst] = useState('')
    const [backgroundColorSecond, setBackgroundColorSecond] = useState('')
    const [backgroundColorCadre, setBackgroundColorCadre] = useState('')
    const [backgroundColorCategorie, setBackgroundColorCategorie] = useState('')
    const [backgroundColorButtonBurger, setBackgroundColorButtonBurger] = useState('')
    const [backgroundColorGeneralButton, setBackgroundColorGeneralButton] = useState('')
    const [backgroundColorDeleteButton, setBackgroundColorDeleteButton] = useState('')
    const [backgroundColorUpdateButton, setBackgroundColorUpdateButton] = useState('')
    const [backgroundColorCardMember, setBackgroundColorCardMember] = useState('')
    const [backgroundColorZoneText, setBackgroundColorZoneText] = useState('')

    async function designSetting(){

        await getSet(2)
        .then((res)=>{
            setGeneralTextColor(res.data.setting.generalTextColor)
            setNavbarTextColor(res.data.setting.navbarTextColor)
            setNameForumColor(res.data.setting.nameForumColor)
            setTextColorGeneralButton(res.data.setting.textColorGeneralButton)
            setTextColorDeleteButton(res.data.setting.textColorDeleteButton)
            setTextColorUpdateButton(res.data.setting.textColorUpdateButton)
            setTextColorCardMember(res.data.setting.textColorCardMember)
            setBackgroundColorNavbar(res.data.setting.backgroundColorNavbar)
            setBackgroundColorFirst(res.data.setting.backgroundColorFirst)
            setBackgroundColorSecond(res.data.setting.backgroundColorSecond)
            setBackgroundColorCadre(res.data.setting.backgroundColorCadre)
            setBackgroundColorCategorie(res.data.setting.backgroundColorCategorie)
            setBackgroundColorButtonBurger(res.data.setting.backgroundColorButtonBurger)
            setBackgroundColorGeneralButton(res.data.setting.backgroundColorGeneralButton)
            setBackgroundColorDeleteButton(res.data.setting.backgroundColorDeleteButton)
            setBackgroundColorUpdateButton(res.data.setting.backgroundColorUpdateButton)
            setBackgroundColorCardMember(res.data.setting.backgroundColorCardMember)
            setBackgroundColorZoneText(res.data.setting.backgroundColorZoneText)
        })
        .catch((error)=>{
            console.log(error)
        })
    } 
    
    



    async function getThePost(){

        await getPostNoParams(idPost)
            .then((res)=>{
                console.log(res)
                setPost(res)
            })
            .catch((error)=>{
                console.log(error)
            })
        }   
    
    useEffect(()=>{
       getThePost()
       designSetting()
    },[])
    

    return (
        
        <main className="flex flex-col items-center justify-center">
            {post !== null && post !== undefined && post.id == idPost ?
            (

                <ContentTopic />
                ) : (
                    <div className=" h-full w-full flex flex-col items-center justify-center gap-8" style={{color:"white"}}>
                        <h1 className="text-5xl bold">Verification</h1>
                        <h3 className="text-2xl">Veuillez patientez quelques instant...</h3>
                    </div>
                )}

            
        </main>
    );
}



export function ButtonModals(prop: any) {
    const [token, setToken] = useState('')
    const [userInfo, setUserInfo] = useState({})
    const idPost = useParams().idTopic
    const [postInfo, setPostInfo] = useState({})
    const [generalTextColor, setGeneralTextColor] = useState('')
    const [navbarTextColor, setNavbarTextColor] = useState('')
    const [nameForumColor, setNameForumColor] = useState('')
    const [textColorGeneralButton, setTextColorGeneralButton] = useState('')
    const [textColorDeleteButton, setTextColorDeleteButton] = useState('')
    const [textColorUpdateButton, setTextColorUpdateButton] = useState('')
    const [textColorCardMember, setTextColorCardMember] = useState('')
    const [backgroundColorNavbar, setBackgroundColorNavbar] = useState('')
    const [backgroundColorFirst, setBackgroundColorFirst] = useState('')
    const [backgroundColorSecond, setBackgroundColorSecond] = useState('')
    const [backgroundColorCadre, setBackgroundColorCadre] = useState('')
    const [backgroundColorCategorie, setBackgroundColorCategorie] = useState('')
    const [backgroundColorButtonBurger, setBackgroundColorButtonBurger] = useState('')
    const [backgroundColorGeneralButton, setBackgroundColorGeneralButton] = useState('')
    const [backgroundColorDeleteButton, setBackgroundColorDeleteButton] = useState('')
    const [backgroundColorUpdateButton, setBackgroundColorUpdateButton] = useState('')
    const [backgroundColorCardMember, setBackgroundColorCardMember] = useState('')
    const [backgroundColorZoneText, setBackgroundColorZoneText] = useState('')
    const [backgroundColorThird, setBackgroundColorThird] = useState('')
    const [nameForum, setNameForum] = useState('')
    const [iconeLikeFalse, setIconeLikeFalse] = useState('')
    const [iconeLikeTrue, setIconeLikeTrue] = useState('')
    const [iconeDeletePost, setIconeDeletePost] = useState('')
    const [iconeUpdatePost, setIconeUpdatePost] = useState('')

    async function Verify() {
        const idUser = localStorage.tokenUser ? jwt_decode.decode(localStorage.tokenUser) : null

        localStorage.tokenUser ?
        await GetUser(idUser.id)
        .then((res)=>{
            console.log("idUser", res.user.id)
            setUserInfo(res.user)
        })
        .catch((error)=>{
            console.log(error)
        }) : null
    }


    async function VerifyPost() {
        
        await getPostNoParams(idPost)
        .then((res)=>{
            console.log("idUserPost", res.idUser)
            setPostInfo(res)
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    async function designSetting(){

        await getSet(2)
        .then((res)=>{
            setGeneralTextColor(res.data.setting.generalTextColor)
            setNavbarTextColor(res.data.setting.navbarTextColor)
            setNameForumColor(res.data.setting.nameForumColor)
            setTextColorGeneralButton(res.data.setting.textColorGeneralButton)
            setTextColorDeleteButton(res.data.setting.textColorDeleteButton)
            setTextColorUpdateButton(res.data.setting.textColorUpdateButton)
            setTextColorCardMember(res.data.setting.textColorCardMember)
            setBackgroundColorNavbar(res.data.setting.backgroundColorNavbar)
            setBackgroundColorFirst(res.data.setting.backgroundColorFirst)
            setBackgroundColorSecond(res.data.setting.backgroundColorSecond)
            setBackgroundColorCadre(res.data.setting.backgroundColorCadre)
            setBackgroundColorCategorie(res.data.setting.backgroundColorCategorie)
            setBackgroundColorButtonBurger(res.data.setting.backgroundColorButtonBurger)
            setBackgroundColorGeneralButton(res.data.setting.backgroundColorGeneralButton)
            setBackgroundColorDeleteButton(res.data.setting.backgroundColorDeleteButton)
            setBackgroundColorUpdateButton(res.data.setting.backgroundColorUpdateButton)
            setBackgroundColorCardMember(res.data.setting.backgroundColorCardMember)
            setBackgroundColorZoneText(res.data.setting.backgroundColorZoneText)
            setBackgroundColorThird(res.data.setting.backgroundColorThird)
            setNameForum(res.data.setting.nameForum)
            setIconeUpdatePost(res.data.setting.iconeUpdatePost)
            setIconeDeletePost(res.data.setting.iconeDeletePost)
            setIconeLikeTrue(res.data.setting.iconeLikeTrue)
            setIconeLikeFalse(res.data.setting.iconeLikeFalse)
        })
        .catch((error)=>{
            console.log(error)
        })
    } 


    useEffect(()=>{
        const dataToken = localStorage.getItem('tokenUser')
        dataToken ?
        setToken(dataToken) : null
       Verify()
       VerifyPost()
       designSetting()
    },[])

    return (
        <>
        {token ?
            (
                userInfo.idRole == 1 || userInfo.idRole == 2 || userInfo.id == postInfo.idUser ?
                    (
                        <div>
                            <button onClick={OpenModalEditer}>
                                <img src={"/image/icone/" + prop.iconeUpdatePost} className="text-white w-12 h-12" alt="Editer" />
                            </button>
                            <button onClick={OpenModalSupprimer}>
                                <img src={"/image/icone/" + prop.iconeDeletePost} className="text-white w-12 h-12" alt="Supprimer" />
                            </button>
                        </div>
                    ) : null
            ) : null
        }
        </>
    );
}