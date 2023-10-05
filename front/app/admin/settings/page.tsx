"use client"
import { getSet, updateSet } from "@/api/setting"
import { useEffect, useState } from "react"
import MobileSet from "./component/mobileSetting"
import TabletSet from "./component/tabletSetting"
import DesktopSet from "./component/desktopSetting"
import { GetUser } from "@/api/user"
import jwt_decode from "jsonwebtoken"
import ChangeSetting from "./component/changeSetting"


export default function Settings() {
    const [token, setToken] = useState('')
    const [isAdmin , setIsAdmin] = useState({})
    const [nameForum, setNameForum] = useState('')
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
    const [iconeLikeFalse, setIconeLikeFalse] = useState({})
    const [iconeLikeTrue, setIconeLikeTrue] = useState({})
    const [iconeDeletePost, setIconeDeletePost] = useState({})
    const [iconeUpdatePost, setIconeUpdatePost] = useState({})
    const [succes, setSucces] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const [baliseIMGDeletePost, setBaliseIMGDeletePost] = useState('')
    const [baliseIMGUpdatePost, setBaliseIMGUpdatePost] = useState('')
    const [baliseIMGLikeFalse, setBaliseIMGLikeFalse] = useState('')
    const [baliseIMGLikeTrue, setBaliseIMGLikeTrue] = useState('')
    const regexToken = /^([A-Za-zËÊÈéèêëÄÂÀÃãàâäÎÏÌîïìÜÛÙùüûÖÔÒôöõòÿ!_.'?\d\s-]){2,}$/; 
    
    const regexNameForum = /^([A-Za-zËÊÈéèêëÄÂÀÃãàâäÎÏÌîïìÜÛÙùüûÖÔÒôöõòÿ!_.'?\d\s-]){5,20}$/; 
    const regexColor = /^#+([a-zA-Z0-9]){6,6}$/
    const regexImage = /^([a-zA-Z_.\d\s-]{1,25})\.(?:jpg|gif|png|bmp)$/
    
    function regexIconeDeletePost() {
        if (!iconeDeletePost.name) {
            return iconeDeletePost
        } else {
                return regexImage.test(iconeDeletePost.name)
            }
        }

    function regexIconeUpdatePost() {
        if (!iconeUpdatePost.name) {
            return iconeUpdatePost
        } else {
            return regexImage.test(iconeUpdatePost.name)
        }
    }

    function regexIconeLikeTrue() {
        if (!iconeLikeTrue.name) {
            console.log('totototottototto')
            return iconeLikeTrue
        } else {
            return regexImage.test(iconeLikeTrue.name)
        }
    }

    function regexIconeLikeFalse() {
        if (!iconeLikeFalse.name) {
            return iconeLikeFalse
        } else {
            return regexImage.test(iconeLikeFalse.name)
        }
    }

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
    

    async function handleSetting (event: any) {
        event.preventDefault();

        const token = localStorage.tokenUser
        const data = {

            generalTextColor: generalTextColor,
            navbarTextColor: navbarTextColor,
            nameForumColor: nameForumColor,
            textColorGeneralButton: textColorGeneralButton,
            textColorDeleteButton: textColorDeleteButton,
            textColorUpdateButton: textColorUpdateButton,
            textColorCardMember: textColorCardMember,
            backgroundColorNavbar: backgroundColorNavbar,
            backgroundColorFirst: backgroundColorFirst,
            backgroundColorSecond: backgroundColorSecond,
            backgroundColorCadre: backgroundColorCadre,
            backgroundColorCategorie: backgroundColorCategorie,
            backgroundColorButtonBurger: backgroundColorButtonBurger,
            backgroundColorGeneralButton: backgroundColorGeneralButton,
            backgroundColorDeleteButton: backgroundColorDeleteButton,
            backgroundColorUpdateButton: backgroundColorUpdateButton,
            backgroundColorCardMember: backgroundColorCardMember,
            backgroundColorZoneText: backgroundColorZoneText,
            backgroundColorThird: backgroundColorThird,
            iconeLikeFalse: iconeLikeFalse,
            iconeLikeTrue: iconeLikeTrue,
            iconeDeletePost: iconeDeletePost,
            iconeUpdatePost: iconeUpdatePost,
            nameForum: nameForum,
            token: token,
        }
        console.log(data)
        console.log(regexIconeDeletePost())
        console.log(iconeLikeTrue)
        console.log(!regexNameForum.test(nameForum) , !regexColor.test(generalTextColor) , !regexColor.test(navbarTextColor) , !regexColor.test(nameForumColor) , !regexColor.test(textColorGeneralButton) , !regexColor.test(textColorUpdateButton) , !regexColor.test(textColorDeleteButton) , !regexColor.test(textColorCardMember) , !regexColor.test(backgroundColorNavbar) , !regexColor.test(backgroundColorFirst) , !regexColor.test(backgroundColorSecond) , "rrrr", !regexColor.test(backgroundColorThird) , !regexColor.test(backgroundColorCadre) , !regexColor.test(backgroundColorCategorie) , !regexColor.test(backgroundColorButtonBurger) , !regexColor.test(backgroundColorGeneralButton) , !regexColor.test(backgroundColorDeleteButton) , !regexColor.test(backgroundColorUpdateButton) , !regexColor.test(backgroundColorZoneText) , !regexColor.test(backgroundColorCardMember) , regexIconeDeletePost() === false , regexIconeLikeFalse() === false , regexIconeLikeTrue() === false , regexIconeUpdatePost() === false)
        !regexToken.test(token) || !regexNameForum.test(nameForum) || !regexColor.test(generalTextColor) || !regexColor.test(navbarTextColor) || !regexColor.test(nameForumColor) ||!regexColor.test(textColorGeneralButton) || !regexColor.test(textColorUpdateButton) || !regexColor.test(textColorDeleteButton) || !regexColor.test(textColorCardMember) || !regexColor.test(backgroundColorNavbar) || !regexColor.test(backgroundColorFirst) || !regexColor.test(backgroundColorSecond) || !regexColor.test(backgroundColorThird) || !regexColor.test(backgroundColorCadre) || !regexColor.test(backgroundColorCategorie) || !regexColor.test(backgroundColorButtonBurger) || !regexColor.test(backgroundColorGeneralButton) || !regexColor.test(backgroundColorDeleteButton) || !regexColor.test(backgroundColorUpdateButton) || !regexColor.test(backgroundColorZoneText) || !regexColor.test(backgroundColorCardMember) || regexIconeDeletePost() === false || regexIconeLikeFalse() === false || regexIconeLikeTrue() === false || regexIconeUpdatePost() === false ? 
        setErrorMessage('Les images accepter sont seulement les png|gif|bmp|jpg. Verifier les couleurs et les caractères que vous voulez envoyer.') :
        await updateSet(data, 2)
        .then((res)=>{
            if (res !== undefined) {
                if (res.status === 200) {
                    setSucces(res.data.message)
                    setErrorMessage('')
                    setTimeout(() => {
                        setSucces('')
                    }, 1500);
                } else {
                    return Promise.reject(res)
                }
            }
        })
        .catch((error)=>{
            if (error) {
                setSucces('')
                setErrorMessage(error.response.data.message)
            }

            if (!error) {
                setSucces('Parametre Modifé')
                setErrorMessage('')
                setTimeout(() => {
                    setSucces('')
                }, 1500);
            }
        })
    }  

    async function getDesign() {
        await getSet()
        .then((res)=>{
            setNameForum(res.data.setting.nameForum)
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
            setBaliseIMGLikeFalse(res.data.setting.iconeLikeFalse)
            setBaliseIMGLikeTrue(res.data.setting.iconeLikeTrue)
            setBaliseIMGDeletePost(res.data.setting.iconeDeletePost)
            setBaliseIMGUpdatePost(res.data.setting.iconeUpdatePost)
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    useEffect(()=>{
        getDesign()
        verifyAdmin()
        const dataToken = localStorage.tokenUser
        dataToken ?
        setToken(dataToken) : null
        
        if (!localStorage.tokenUser) {
            window.location.href="/"
        }
    },[])

    return (
        <main>
            {token && isAdmin.idRole == 1 ?
                (
                    <>
                        <nav style={{color:navbarTextColor, backgroundColor: backgroundColorNavbar}}>
                            <ul className='flex font-bold justify-between text-xs' >

                                <a href="/admin/membres"><li>Membres</li></a>
                                <a href="/admin/categorie"><li>Catégories</li></a>
                                <a href="/admin/roles"><li>Roles</li></a>
                                <a href="/admin/settings"><li>Paramètre Forum</li></a>
                            </ul>
                        </nav>
                        <ChangeSetting  backgroundColorThird={backgroundColorThird} backgroundColorGeneralButton={backgroundColorGeneralButton} textColorGeneralButton={textColorDeleteButton} backgroundColorZoneText={backgroundColorZoneText} textColor={generalTextColor} backgroundColorDeleteButton={backgroundColorDeleteButton} backgroundColorUpdateButton={backgroundColorUpdateButton} textColorUpdateButton={textColorUpdateButton} textColorDeleteButton={textColorDeleteButton}/>
                        <form action="" onSubmit={handleSetting} method="put" encType="multipart/form-data">
                            <MobileSet setIconeDeletePost={setIconeDeletePost} setIconeLikeFalse={setIconeLikeFalse} setIconeLikeTrue={setIconeLikeTrue} setIconeUpdatePost={setIconeUpdatePost} setNameForum={setNameForum} setGeneralTextColor={setGeneralTextColor} setNavbarTextColor={setNavbarTextColor} setNameForumColor={setNameForumColor} setTextColorGeneralButton={setTextColorGeneralButton} setTextColorDeleteButton={setTextColorDeleteButton} setTextColorUpdateButton={setTextColorUpdateButton} setTextColorCardMember={setTextColorCardMember} setBackgroundColorNavbar={setBackgroundColorNavbar} setBackgroundColorFirst={setBackgroundColorFirst} setBackgroundColorSecond={setBackgroundColorSecond} setBackgroundColorCadre={setBackgroundColorCadre} setBackgroundColorCategorie={setBackgroundColorCategorie} setBackgroundColorButtonBurger={setBackgroundColorButtonBurger} setBackgroundColorGeneralButton={setBackgroundColorGeneralButton} setBackgroundColorDeleteButton={setBackgroundColorDeleteButton} setBackgroundColorUpdateButton={setBackgroundColorUpdateButton} setBackgroundColorCardMember={setBackgroundColorCardMember} setBackgroundColorZoneText={setBackgroundColorZoneText} setBackgroundColorThird={setBackgroundColorThird} setBaliseIMGLikeFalse={setBaliseIMGLikeFalse} setBaliseIMGLikeTrue={setBaliseIMGLikeTrue} setBaliseIMGDeletePost={setBaliseIMGDeletePost} setBaliseIMGUpdatePost={setBaliseIMGUpdatePost} errorMessage={errorMessage} succes={succes} baliseIMGDeletePost={baliseIMGDeletePost} baliseIMGLikeFalse={baliseIMGLikeFalse} baliseIMGLikeTrue={baliseIMGLikeTrue} baliseIMGUpdatePost={baliseIMGUpdatePost} generalTextColor={generalTextColor} navbarTextColor={navbarTextColor} nameForumColor={nameForumColor} textColorGeneralButton={textColorGeneralButton} textColorDeleteButton={textColorDeleteButton} textColorUpdateButton={textColorUpdateButton} textColorCardMember={textColorCardMember} backgroundColorNavbar={backgroundColorNavbar} backgroundColorFirst={backgroundColorFirst} backgroundColorSecond={backgroundColorSecond} backgroundColorCadre={backgroundColorCadre} backgroundColorCategorie={backgroundColorCategorie} backgroundColorButtonBurger={backgroundColorButtonBurger} backgroundColorGeneralButton={backgroundColorGeneralButton} backgroundColorDeleteButton={backgroundColorDeleteButton} backgroundColorUpdateButton={backgroundColorUpdateButton} backgroundColorCardMember={backgroundColorCardMember} backgroundColorZoneText={backgroundColorZoneText} backgroundColorThird={backgroundColorThird} iconeLikeFalse={iconeLikeFalse} iconeLikeTrue={iconeLikeTrue} iconeDeletePost={iconeDeletePost} iconeUpdatePost={iconeUpdatePost} nameForum={nameForum}  />
                        </form>

                        <form action="" onSubmit={handleSetting} method="put" encType="multipart/form-data">
                            <TabletSet setIconeDeletePost={setIconeDeletePost} setIconeLikeFalse={setIconeLikeFalse} setIconeLikeTrue={setIconeLikeTrue} setIconeUpdatePost={setIconeUpdatePost} setNameForum={setNameForum} setGeneralTextColor={setGeneralTextColor} setNavbarTextColor={setNavbarTextColor} setNameForumColor={setNameForumColor} setTextColorGeneralButton={setTextColorGeneralButton} setTextColorDeleteButton={setTextColorDeleteButton} setTextColorUpdateButton={setTextColorUpdateButton} setTextColorCardMember={setTextColorCardMember} setBackgroundColorNavbar={setBackgroundColorNavbar} setBackgroundColorFirst={setBackgroundColorFirst} setBackgroundColorSecond={setBackgroundColorSecond} setBackgroundColorCadre={setBackgroundColorCadre} setBackgroundColorCategorie={setBackgroundColorCategorie} setBackgroundColorButtonBurger={setBackgroundColorButtonBurger} setBackgroundColorGeneralButton={setBackgroundColorGeneralButton} setBackgroundColorDeleteButton={setBackgroundColorDeleteButton} setBackgroundColorUpdateButton={setBackgroundColorUpdateButton} setBackgroundColorCardMember={setBackgroundColorCardMember} setBackgroundColorZoneText={setBackgroundColorZoneText} setBackgroundColorThird={setBackgroundColorThird} setBaliseIMGLikeFalse={setBaliseIMGLikeFalse} setBaliseIMGLikeTrue={setBaliseIMGLikeTrue} setBaliseIMGDeletePost={setBaliseIMGDeletePost} setBaliseIMGUpdatePost={setBaliseIMGUpdatePost} errorMessage={errorMessage} succes={succes} baliseIMGDeletePost={baliseIMGDeletePost} baliseIMGLikeFalse={baliseIMGLikeFalse} baliseIMGLikeTrue={baliseIMGLikeTrue} baliseIMGUpdatePost={baliseIMGUpdatePost} generalTextColor={generalTextColor} navbarTextColor={navbarTextColor} nameForumColor={nameForumColor} textColorGeneralButton={textColorGeneralButton} textColorDeleteButton={textColorDeleteButton} textColorUpdateButton={textColorUpdateButton} textColorCardMember={textColorCardMember} backgroundColorNavbar={backgroundColorNavbar} backgroundColorFirst={backgroundColorFirst} backgroundColorSecond={backgroundColorSecond} backgroundColorCadre={backgroundColorCadre} backgroundColorCategorie={backgroundColorCategorie} backgroundColorButtonBurger={backgroundColorButtonBurger} backgroundColorGeneralButton={backgroundColorGeneralButton} backgroundColorDeleteButton={backgroundColorDeleteButton} backgroundColorUpdateButton={backgroundColorUpdateButton} backgroundColorCardMember={backgroundColorCardMember} backgroundColorZoneText={backgroundColorZoneText} backgroundColorThird={backgroundColorThird} iconeLikeFalse={iconeLikeFalse} iconeLikeTrue={iconeLikeTrue} iconeDeletePost={iconeDeletePost} iconeUpdatePost={iconeUpdatePost} nameForum={nameForum}  />
                        </form>

                        <form action="" onSubmit={handleSetting} method="put" encType="multipart/form-data">
                            <DesktopSet setIconeDeletePost={setIconeDeletePost} setIconeLikeFalse={setIconeLikeFalse} setIconeLikeTrue={setIconeLikeTrue} setIconeUpdatePost={setIconeUpdatePost} setNameForum={setNameForum} setGeneralTextColor={setGeneralTextColor} setNavbarTextColor={setNavbarTextColor} setNameForumColor={setNameForumColor} setTextColorGeneralButton={setTextColorGeneralButton} setTextColorDeleteButton={setTextColorDeleteButton} setTextColorUpdateButton={setTextColorUpdateButton} setTextColorCardMember={setTextColorCardMember} setBackgroundColorNavbar={setBackgroundColorNavbar} setBackgroundColorFirst={setBackgroundColorFirst} setBackgroundColorSecond={setBackgroundColorSecond} setBackgroundColorCadre={setBackgroundColorCadre} setBackgroundColorCategorie={setBackgroundColorCategorie} setBackgroundColorButtonBurger={setBackgroundColorButtonBurger} setBackgroundColorGeneralButton={setBackgroundColorGeneralButton} setBackgroundColorDeleteButton={setBackgroundColorDeleteButton} setBackgroundColorUpdateButton={setBackgroundColorUpdateButton} setBackgroundColorCardMember={setBackgroundColorCardMember} setBackgroundColorZoneText={setBackgroundColorZoneText} setBackgroundColorThird={setBackgroundColorThird} setBaliseIMGLikeFalse={setBaliseIMGLikeFalse} setBaliseIMGLikeTrue={setBaliseIMGLikeTrue} setBaliseIMGDeletePost={setBaliseIMGDeletePost} setBaliseIMGUpdatePost={setBaliseIMGUpdatePost} errorMessage={errorMessage} succes={succes} baliseIMGDeletePost={baliseIMGDeletePost} baliseIMGLikeFalse={baliseIMGLikeFalse} baliseIMGLikeTrue={baliseIMGLikeTrue} baliseIMGUpdatePost={baliseIMGUpdatePost} generalTextColor={generalTextColor} navbarTextColor={navbarTextColor} nameForumColor={nameForumColor} textColorGeneralButton={textColorGeneralButton} textColorDeleteButton={textColorDeleteButton} textColorUpdateButton={textColorUpdateButton} textColorCardMember={textColorCardMember} backgroundColorNavbar={backgroundColorNavbar} backgroundColorFirst={backgroundColorFirst} backgroundColorSecond={backgroundColorSecond} backgroundColorCadre={backgroundColorCadre} backgroundColorCategorie={backgroundColorCategorie} backgroundColorButtonBurger={backgroundColorButtonBurger} backgroundColorGeneralButton={backgroundColorGeneralButton} backgroundColorDeleteButton={backgroundColorDeleteButton} backgroundColorUpdateButton={backgroundColorUpdateButton} backgroundColorCardMember={backgroundColorCardMember} backgroundColorZoneText={backgroundColorZoneText} backgroundColorThird={backgroundColorThird} iconeLikeFalse={iconeLikeFalse} iconeLikeTrue={iconeLikeTrue} iconeDeletePost={iconeDeletePost} iconeUpdatePost={iconeUpdatePost} nameForum={nameForum}  />
                        </form>
                    </>
                ) : null
            }

        </main>
    )
}