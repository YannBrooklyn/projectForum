
'use client'
import jwt_decode from 'jsonwebtoken'
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react"
import { newPost } from "@/api/post";
import { getSet } from '@/api/setting';
import { getCateg } from '@/api/categ';



export function ContentNewTopic(){
    const [title, setTitle] = useState('')
    const [text, setText] = useState('')
    const [succes, setSucces] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const router = useRouter();
    const idCategorie = useParams().nameCategorie
    const regexTitleTopic = /^([A-Za-zËÊÈéèêëÄÂÀÃãàâäÎÏÌîïìÜÛÙùüûÖÔÒôöõòÿ!_.'?\d\s-]){8,45}$/; 
    const regexTextTopic = /^([A-Za-zËÊÈéèêëÄÂÀÃãàâäÎÏÌîïìÜÛÙùüûÖÔÒôöõòÿ!_.'?\d\s-]){8,255}$/;
    const regexId = /^([0-9]){1,}$/
    const regexToken = /^([A-Za-zËÊÈéèêëÄÂÀÃãàâäÎÏÌîïìÜÛÙùüûÖÔÒôöõòÿ!_.'?\d\s-]){2,}$/; 
    const paramsCategorie = useParams().nameCategorie
    const [idTheme, setIdTheme] = useState('')
    const [imagePost, setImagePost] = useState({})
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
    const regexImage = /^([a-zA-Z_.\d\s-]{1,25})\.(?:jpg|gif|png|bmp)$/

    function RegexImagePost() {
        if(!imagePost.name) {
            return imagePost
        } else {
            return regexImage.test(imagePost.name)
        }
    }

    async function getACategorie(){
        await getCateg(paramsCategorie)
        .then((res)=>{
            if (res.status === 200) {

                console.log(res.data.categorie.idTheme)
                setIdTheme(res.data.categorie.idTheme)
            } else {
                return Promise.reject(res)
            }

        })
        .catch((error)=>{
            console.log(error)
        })
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
        })
        .catch((error)=>{
            console.log(error)
        })
    } 
    
   
        useEffect(()=>{
            designSetting()
            getACategorie()
        },[])



    const handleNewPost = async (event: any) =>{
        const test = jwt_decode.decode(localStorage.tokenUser)
        const idUser =  test ? test.id : null
        const token = localStorage.tokenUser
        event.preventDefault();

        console.log(jwt_decode.decode(localStorage.tokenUser))

        const data = {
            title: title,
            text: text,
            idUser: idUser,
            idCategorie: idCategorie,
            token: token,
            idTheme: idTheme,
            imagePost: imagePost
        }

        
        console.log('tt', data)
        console.log(regexTextTopic.test(text), regexTitleTopic.test(title), regexId.test(idCategorie) , regexId.test(idUser) ,idUser )
        RegexImagePost() === false || !regexToken.test(token) || !title || title === null || regexTitleTopic.test(title) === false || title === undefined  || regexTextTopic.test(text) === false || !text || text === null || text === undefined || regexId.test(idCategorie) === false || regexId.test(idTheme) === false || regexId.test(idUser) === false ?
        setErrorMessage("Un des champs ne respect pas les conditions !") :
        await newPost(data)
        .then((data)=>{

            if (data !== undefined) {

                if (data.status === 200) {
                    setSucces('Topic crée avec succes, vous allez être rediriger vers votre topic.')
                    setErrorMessage('')
                    setTimeout(() => {
                        setSucces('')
                        router.push('/' + data.data.post.idCategorie + "/topic/" + data.data.post.id) 
                    }, 1500);
                } else {
                    return Promise.reject(data)
                }
            }
    
        })
        .catch((error)=> {
            if (!error) {
                setSucces('Topic crée avec succes, vous allez être rediriger vers la catégorie de votre topic.')
                setErrorMessage('')
                setTimeout(() => {
                        
                    router.push('/' + paramsCategorie) 
                }, 1500);
            }

            if (error) {
                setErrorMessage(error.response.data.message)
                setSucces('')
            }
        })


        

    }
        return (
        <form action="" onSubmit={handleNewPost} method="post" datatype='multipart/form-data'>
            <section className='w-full flex flex-col items-center gap-8 sm:w-full sm:flex sm:flex-col sm:items-center sm:gap-8 md:w-full md:flex md:flex-col md:items-center md:gap-8 lg:w-full lg:flex lg:flex-col lg:items-center lg:gap-8 xl:w-full xl:flex xl:flex-col xl:items-center xl:gap-8'>
                <h3 style={{color:"green"}}>{succes}</h3>
                <h3 style={{color:"red"}}>{errorMessage}</h3>
                <h2 style={{color:generalTextColor}} className='text-5xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-5xl'>Nouveau Topic</h2>
                <input className='w-10/12 sm:w-10/12 md:w-7/12 lg:w-7/12 xl:w-7/12' type="text"  placeholder="Votre titre..." id="" style={{backgroundColor:backgroundColorZoneText, color:generalTextColor}} onChange={(b) => setTitle(b.target.value)} value={title}  pattern="^([\-!?._@+a-zA-ZËÊÈéèêëÄÂÀÃãàâäÎÏÌîïìÜÛÙùüûÖÔÒôöõòÿ\d\s]{8,255})$" required />
                <textarea  className="w-10/12 resize-none sm:w-10/12 sm:resize-none md:w-10/12 md:resize-none lg:w-7/12 lg:resize-none xl:resize-none xl:w-7/12" onChange={(b)=> setText(b.target.value)} value={text} id="" cols={30} rows={10} placeholder="Votre texte..." style={{backgroundColor:backgroundColorZoneText, color:generalTextColor }} minLength={8} maxLength={255}></textarea>
                <input style={{color:generalTextColor, backgroundColor:backgroundColorZoneText}} onChange={(b)=> setImagePost(b.target.files[0])} type="file" name="imagePost" id="" />
                <button className="rounded-full border border-black border-solid h-8 w-28 sm:rounded-full sm:border sm:border-black sm:border-solid sm:h-8 sm:w-28 md:rounded-full md:border md:border-black md:border-solid md:h-8 md:w-28 lg:rounded-full lg:border lg:border-black lg:border-solid lg:h-8 lg:w-28 xl:rounded-full xl:border xl:border-black xl:border-solid xl:h-8 xl:w-28" style={{background:backgroundColorGeneralButton, color:textColorGeneralButton}}>Poster</button>
            </section>
        </form>
    )
}