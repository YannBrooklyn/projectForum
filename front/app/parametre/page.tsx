'use client'
import { useEffect, useState } from "react"
import Banner from "./component/banner"
import  {Confidentialite} from "./component/confidentialite"
import jwt_decode from "jsonwebtoken"
import { Mystery_Quest } from "next/font/google"
import { getSet } from "@/api/setting"
export default function Parametre() {

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

    function OpenBanniere() {
        const mySectionPP = document.getElementById('sectionPP')
        const mySectionBanner = document.getElementById('sectionBanner')
        const mySectionConfid = document.getElementById('sectionConfid')

        if (mySectionBanner.style.display === "none") {
            mySectionBanner.style.display = "block";
            mySectionPP.style.display = "none";
            mySectionConfid.style.display = "none";
        }
    }

    function OpenPP() {
        const mySectionPP = document.getElementById('sectionPP')
        const mySectionBanner = document.getElementById('sectionBanner')
        const mySectionConfid = document.getElementById('sectionConfid')

        if(mySectionPP.style.display === "none") {
            mySectionPP.style.display = "block";
            mySectionBanner.style.display = "none";
            mySectionConfid.style.display = "none"
        }
    }

    function OpenConfid() {
        const mySectionPP = document.getElementById('sectionPP')
        const mySectionBanner = document.getElementById('sectionBanner')
        const mySectionConfid = document.getElementById('sectionConfid')

        if (mySectionConfid.style.display === "none") {
            mySectionConfid.style.display = "block"
            mySectionBanner.style.display = "none";
            mySectionPP.style.display = "none";
        }
    }
    const [token, setToken] = useState('')

    useEffect(()=>{
        designSetting();
        const dataToken = localStorage.getItem('tokenUser')
        dataToken ?
        setToken(dataToken) : null

        if (!localStorage.tokenUser) {
            window.location.href="/"
        }
    },[])


    return(
        <main>
            {token ? 
                (
                    <section className="w-full h-auto flex flex-col justify-center items-center" style={{color:generalTextColor}}>
                        <h1 className="font-bold text-3xl">Parametre Compte</h1>
                        <div className="flex flex-col  w-11/12 h-full md:w-4/6 lg:w-3/6" style={{backgroundColor:backgroundColorSecond}}>
                            <div className="flex border-none justify-evenly" style={{backgroundColor:backgroundColorFirst}}>
                                <button className="border border-black" onClick={OpenBanniere} style={{backgroundColor:backgroundColorSecond, color:generalTextColor}}>Banniere</button>
                                <button className="border border-black" onClick={OpenPP} style={{backgroundColor:backgroundColorSecond, color:generalTextColor}}>Photo de Profil</button>
                                <button className="border border-black" onClick={OpenConfid} style={{backgroundColor:backgroundColorSecond, color:generalTextColor}}>Confidentialité</button>
                            </div>
                            <Banner backgroundColorZoneText={backgroundColorZoneText} textColor={generalTextColor} backgroundColorUpdateButton={backgroundColorUpdateButton} textColorUpdateButton={textColorUpdateButton}/>
                            <Confidentialite backgroundColorZoneText={backgroundColorZoneText} textColor={generalTextColor} backgroundColorUpdateButton={backgroundColorUpdateButton} textColorUpdateButton={textColorUpdateButton} />
                        </div>
                    </section>
                ) : null}
        </main>
        
    )
}



