'use client'
import { GetUser, UpdateConfidUser, UpdateBannerUser } from "@/api/user"
import { useEffect, useState } from "react"
import jwt_decode from 'jsonwebtoken'

import { UpdatePPUser } from "@/api/user";




export default function Banner (prop: any) {
    
    const [idUser, setIdUser] = useState(0)
    const [banner, setBanner] = useState({})
    const [avatar, setAvatar] = useState({})
    const [user, setUser] = useState({})
    const regexImage = /^([a-zA-Z_.\d\s-]{1,25})\.(?:jpg|gif|png|bmp)$/
    const regexID = /^([0-9]){1,}$/
    const [errorMessageBanner, setErrorMessageBanner] = useState('')
    const [succesBanner, setSuccesBanner] = useState('')
    const [errorMessageAvatar, setErrorMessageAvatar ] = useState('')
    const [succesAvatar, setSuccesAvatar] = useState('')
    const [userInfo, setUserInfo] = useState({})
    const regexToken = /^([A-Za-zËÊÈéèêëÄÂÀÃãàâäÎÏÌîïìÜÛÙùüûÖÔÒôöõòÿ!_.'?\d\s-]){2,}$/; 
    

    function regexAvatar() {
        if (!avatar.name) {
            console.log('totototottototto')
            return avatar
        } else {
            return regexImage.test(avatar.name)
        }
    }

    function RegexBanniere() {
        if(!banner.name) {
            return banner
        } else {
            return regexImage.test(banner.name)
        }
    }
    

    const handleBanner = async (event: any) =>{
        event.preventDefault();
        const data = {
            banner: banner,
            token: localStorage.tokenUser
        }

        

        !regexToken.test(localStorage.tokenUser) || RegexBanniere() === false || !regexID.test(idUser.toString()) || idUser === null || idUser === undefined ? 
        setErrorMessageBanner('Merci de mettre des caractères valide pour les images, seul les images png gif bmp jpg sont toléré.') :
        await UpdateBannerUser(data, idUser)
        .then((data)=>{
            if (data !== undefined) {

                if (data.status === 200) {
                    console.log(data)
                    setSuccesBanner(data.data.message)
                    setErrorMessageBanner('')
                } else {
                    return Promise.reject(data)
                }
            }
        })
        .catch((error)=>{
            if (error) {

                setErrorMessageBanner(error.response.data.message)
                setSuccesBanner('')
            }
            if (!error) {
                setSuccesBanner('Bannière modifié')
                setErrorMessageBanner('')
            }
        })
    }

    const handlePhoto = async (event: any) =>{
        event.preventDefault();
        const data = {
            avatar: avatar,
            token: localStorage.tokenUser
        }



        !regexToken.test(localStorage.tokenUser) || regexAvatar() === false || !regexID.test(idUser.toString()) || idUser === null || idUser === undefined ?
        setErrorMessageAvatar('Merci de mettre des caractères valide pour les images, seul les images png gif bmp jpg sont toléré.') :
        await UpdatePPUser(data, idUser)
        .then((data)=>{
            if (data !== undefined) {

                if (data.status === 200) {
                    console.log(data)
                    setSuccesAvatar(data.data.message)
                    setErrorMessageAvatar('')
                } else {
                    return Promise.reject(data)
                }
            }
        })
        .catch((error)=>{
            if (error) {

                setErrorMessageAvatar(error.response.data.message)
                setSuccesAvatar('')
            }
            if (!error) {
                setSuccesAvatar('Avatar modifié avec succès')
                setErrorMessageAvatar('')
            }
        })
    }

    async function getInfoUser() {
        const token = jwt_decode.decode(localStorage.tokenUser)
        
        await GetUser(token.id)
        .then((res)=>{
            console.log(res)
            setUserInfo(res.user)
        })
        .catch((error)=>{
            console.log(res)
        })
    }
    
    
    useEffect(()=>{
        getInfoUser()
        const initIdUser = jwt_decode.decode(localStorage.tokenUser)
        initIdUser ? setIdUser(initIdUser.id) : null
    },[])
   

    return (
        <>
        <section className="w-full h-full" id="sectionBanner"  style={{display:"block"}}>

            <div className="w-full h-full" style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                <form className="w-full h-full" onSubmit={handleBanner} action="" method="put" encType="multipart/form-data">

                    <div className="w-full h-full flex flex-col justify-center items-center gap-6">
                        <h3 style={{color:"green"}}>{succesBanner}</h3>
                        <h3 style={{color:"red"}}>{errorMessageBanner}</h3>
                        <h3 style={{color:prop.textColor}} className="text-2xl font-bold">Banniere Profil</h3>
                        <img className="w-full h-52 sm:w-96 " src={"/avatar/" + userInfo.banner} alt="Bannière Utilisateur" />
                        <input style={{color:prop.textColor, backgroundColor:prop.backgroundColorZoneText}} onChange={(b)=> setBanner(b.target.files[0])} type="file" name="banner" id="" />
                        <button className="rounded-full border border-black border-solid h-8 w-28 sm:rounded-full sm:border sm:border-black sm:border-solid sm:h-8 sm:w-28 md:rounded-full md:border md:border-black md:border-solid md:h-8 md:w-28 lg:rounded-full lg:border lg:border-black lg:border-solid lg:h-8 lg:w-28 xl:rounded-full xl:border xl:border-black xl:border-solid xl:h-8 xl:w-28" style={{backgroundColor:prop.backgroundColorUpdateButton, color:prop.textColorUpdateButton}}>Modifier</button>
                    </div>
                </form>
            </div>
        </section>

        <section className="w-full h-full" id="sectionPP" style={{display:"none"}}>
            <form className="w-full" action="" onSubmit={handlePhoto} method="put" encType="multipart/form-data">
                <div className="w-full flex flex-col justify-center items-center gap-6">
                    <h3 style={{color:"green"}}>{succesAvatar}</h3>
                    <h3 style={{color:"red"}}>{errorMessageAvatar}</h3>
                    <h3 style={{color:prop.textColor}} className="text-2xl font-bold">Photo de profil</h3>
                    <img className="w-40 h-40" src={"/avatar/" + userInfo.avatar} alt="Photo de profil" />
                    <input style={{color:prop.textColor, backgroundColor:prop.backgroundColorZoneText}} onChange={(b)=> setAvatar(b.target.files[0])} type="file" name="avatar"/>
                    <button className="rounded-full border border-black border-solid h-8 w-28 sm:rounded-full sm:border sm:border-black sm:border-solid sm:h-8 sm:w-28 md:rounded-full md:border md:border-black md:border-solid md:h-8 md:w-28 lg:rounded-full lg:border lg:border-black lg:border-solid lg:h-8 lg:w-28 xl:rounded-full xl:border xl:border-black xl:border-solid xl:h-8 xl:w-28" style={{backgroundColor:prop.backgroundColorUpdateButton, color:prop.textColor}}>Modifier</button>
                </div>
            </form>
        </section>
        </>
    )
}