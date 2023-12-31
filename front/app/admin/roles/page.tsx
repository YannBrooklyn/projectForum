"use client"
import './mobile.css'

import AllRole from "./component/allRole";
import CreateRole from "./component/createRole";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { GetUser } from '@/api/user';
import jwt_decode from "jsonwebtoken"
import { getSet } from '@/api/setting';

export default function Membres() {

    const [token, setToken] = useState('')
    const [isAdmin , setIsAdmin] = useState({})
    const [verifyToken, setVerifyToken] = useState('')
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

    async function verifyAdmin() {
        const idUser = localStorage.tokenUser ? jwt_decode.decode(localStorage.tokenUser) : null

        localStorage.tokenUser ?
        await GetUser(idUser.id)
        .then((res)=>{
            console.log(res.user.idRole)
            setIsAdmin(res.user)
        })
        .catch((error)=>{
            console.log(error)
        }) : null
    }

    async function designSetting(){

        await getSet()
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
        designSetting();
        verifyAdmin()
        const dataToken = localStorage.tokenUser
        dataToken ?
        setToken(dataToken) : null
        if (!localStorage.tokenUser) {
            window.location.href="/"
        }

        
    },[])
    return (
        <main className=' w-full'>
            {token && isAdmin.idRole == 1 ?
                (
                    <>
                        <nav style={{color:navbarTextColor, backgroundColor: backgroundColorFirst}}>
                            <ul className='flex font-bold justify-between text-xs' >

                                <a href="/admin/membres"><li>Membres</li></a>
                                <a href="/admin/categorie"><li>Catégories</li></a>
                                <a href="/admin/roles"><li>Roles</li></a>
                                <a href="/admin/settings"><li>Paramètre Forum</li></a>
                            </ul>
                        </nav>
                        <CreateRole backgroundColorThird={backgroundColorThird} backgroundColorGeneralButton={backgroundColorGeneralButton} textColorGeneralButton={textColorDeleteButton} backgroundColorZoneText={backgroundColorZoneText} textColor={generalTextColor}/>
                        <AllRole backgroundColorThird={backgroundColorThird} backgroundColorGeneralButton={backgroundColorGeneralButton} textColorGeneralButton={textColorDeleteButton} backgroundColorZoneText={backgroundColorZoneText} textColor={generalTextColor} backgroundColorDeleteButton={backgroundColorDeleteButton} backgroundColorUpdateButton={backgroundColorUpdateButton} textColorUpdateButton={textColorUpdateButton} textColorDeleteButton={textColorDeleteButton}/>
                    </>
                ) :  null
            }
        </main>
    )
}