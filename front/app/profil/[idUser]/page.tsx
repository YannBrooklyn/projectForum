'use client'
import { useParams } from "next/navigation";
import { ComsProfil } from "./component/coms";
import { PostProfil } from "./component/post";
import { GetUser } from "@/api/user";
import { useEffect, useState } from "react";
import { getSet } from "@/api/setting";

export default function Profil() {
    const [userInfo, setUserInfo] = useState({})
    const [roleInfo, setRoleInfo] = useState({})
    const [likeCom, setLikeCom] = useState([])
    const [likePost, setLikePost] = useState([])
    const [comInfo, setComInfo] = useState([])
    const [postInfo, setPostInfo] = useState([])
    const idUser = useParams().idUser

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

    function InfoUser() {
        GetUser(idUser)
        .then((res)=>{
            console.log(res.user)
            setUserInfo(res.user)
            setRoleInfo(res.user.role)
            setLikePost(res.user.likesposts)
            setLikeCom(res.user.likescoms)
            setComInfo(res.user.coms)
            setPostInfo(res.user.posts)
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    useEffect(()=>{
        InfoUser()
        designSetting();
    },[])

    return (
        <main className="w-full flex flex-col justify-center items-center" style={{color:generalTextColor}}>
            {userInfo !== null && userInfo !== undefined && userInfo.id == idUser ?
                (
                    <>
                        <section className="w-5/6 flex flex-col justify-center items-center">
                            <div className="w-full flex flex-col items-center">
                                <h2 className="text-4xl">{userInfo.pseudo}</h2>
                                <h3 className="text-2xl">{roleInfo.nameRole}</h3>
                                <div className="flex flex-col items-center relative w-full">
                                    <img className="w-full h-52 md:h-72 xl:h-96" src={"/avatar/" + userInfo.banner} style={{ width:"100%", zIndex:"-1"}} alt="Bannière de profil" />
                                    <img id="avatarProfil" src={"/avatar/" + userInfo.avatar} alt="Photo de profil" className="border border-solid border-black rounded-full absolute top-40 left-5 h-20 w-20 md:left-10 md:top-56 md:h-28 md:w-28 xl:h-40 xl:w-40 xl:h-40 xl:top-72 xl:left-20" style={{ zIndex:"-1"}} />
                                    <h4>Posts:</h4>
                                    <h4>{comInfo.length + postInfo.length}</h4>
                                    <h4>Like:</h4>
                                    <h4>{likeCom.length + likePost.length}</h4>
                                </div>
                            </div>
                        </section>
                        <section>
                            <PostProfil textColor={generalTextColor} backgroundColorThird={backgroundColorThird} user={userInfo}/>
                            <ComsProfil textColor={generalTextColor} backgroundColorThird={backgroundColorThird} user={userInfo}/>
                        </section>
                    </>
                ) : (
                    <div className=" h-full w-full flex flex-col items-center justify-center gap-8" style={{color:generalTextColor}}>
                        <h1 className="text-5xl bold">Verification</h1>
                        <h3 className="text-2xl">Veuillez patientez quelques instant...</h3>
                    </div>
                )}
        </main>
    )
}
