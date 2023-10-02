import { memo, useEffect, useState } from "react";
import { ButtonModals } from "./page";
import { delPost, getPost, putPost } from "@/api/post";
import { useParams, useRouter } from "next/navigation";
import jwt_decode from 'jsonwebtoken'
import { delComs, getAllCom, getCom, newCom, putComs } from "@/api/com";
import { GetAllUser, GetUser } from "@/api/user";
import { actionLikePost, getAllLikePost, getLikePost } from "@/api/likepost";
import { actionLikeCom, AllLikeCom, getLikeCom } from "@/api/likecom";
import { button } from "@material-tailwind/react";
import { getSet } from "@/api/setting";
import { getCateg } from "@/api/categ";





export function ModalEditer(prop: any){
    const [title, setTitle] = useState('')
    const [text, setText] = useState('')
    const paramsCategorie = useParams().nameCategorie
    const paramsTopic = useParams().idTopic
    const router = useRouter();
    const [succes, setSucces] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const [token, setToken] = useState('')
    const regexTitleTopic = /^([A-Za-zËÊÈéèêëÄÂÀÃãàâäÎÏÌîïìÜÛÙùüûÖÔÒôöõòÿ!_.'?\d\s-]){8,45}$/; 
    const regexTextTopic = /^([A-Za-zËÊÈéèêëÄÂÀÃãàâäÎÏÌîïìÜÛÙùüûÖÔÒôöõòÿ!_.'?\d\s-]){8,255}$/;
    const regexId = /^([0-9]){1,}$/
    const regexToken = /^([A-Za-zËÊÈéèêëÄÂÀÃãàâäÎÏÌîïìÜÛÙùüûÖÔÒôöõòÿ!_.'?\d\s-]){2,}$/; 
    
    
    

    const handleEditPost = async (event: any)=>{

        
        event.preventDefault()
        
        const data = {
            text: text,
            title: title,
            token: localStorage.tokenUser
        }



        function HandleCloseModalEditer() {
            
            let divModalEditer = document.getElementById("divModalEditer")
            divModalEditer ?
            divModalEditer.style.display = "none" : null
        }

        
        !regexId.test(paramsTopic) || !regexToken.test(token) || !text || regexTextTopic.test(text) === false || text === null || text === undefined || title === undefined || title === null || regexTitleTopic.test(title) === false || !title ?
        setErrorMessage("Un des champs ne respect pas les conditions !") :
        await putPost(data, paramsTopic)
        .then((result)=>{
            if (result !== undefined) {

                if (result.status === 200) {
                    console.log(result)
                    setSucces(result.data.message)
                    setErrorMessage('')
                    setTimeout(() => {
                        setSucces('')
                        HandleCloseModalEditer()
                    }, 1500);
                } else {
                    return Promise.reject(result)
                }
            }
            
        })
        .catch((error)=>{
            if (!error) {
                setSucces('Message editer avec succès')
                setErrorMessage('')
                setTimeout(() => {
                    setSucces('')
                    HandleCloseModalEditer()
                }, 1500);
            }

            if (error) {
                setSucces('')
                setErrorMessage(error.response.data.message)
            }
        })
    }


    function CloseModalEditer() {
        let divModalEditer = document.getElementById("divModalEditer")
        divModalEditer ?
        divModalEditer.style.display = "none" : null
    }

    useEffect(()=>{
        const dataToken = localStorage.getItem('tokenUser')
        dataToken ?
        setToken(dataToken) : null
    },[])

    return(
        <>
        {token ?
            (

                <div id="divModalEditer" className="hidden justify-center items-center w-full h-full fixed left-0 top-0" style={{backgroundColor:"rgba(0, 0, 0, 0.598)"}}>
                    <div id="ModalEditer" className="flex justify-center items-center flex-col fixed w-96 h-3/6 " style={{gap:"1vh" , backgroundColor:prop.backgroundColorThird, color:prop.textColor}}>
                        <h3 className="absolute top-0 right-0 text-xl" style={{color:prop.textColor}}  onClick={CloseModalEditer}>X</h3>
                        <h2 className="font-bold text-bold text-lg" style={{color:prop.textColor}}>Edition du texte</h2>
                        <h3 style={{color:"red"}} className="text-lg">{errorMessage}</h3>
                        <h3 style={{color:"green"}} className="text-lg">{succes}</h3>
                        <form className="w-full h-full" onSubmit={handleEditPost} action="" method="put">
                            <div className="flex flex-col gap-4 justify-center items-center w-full h-full">
                                <h3 style={{color:prop.textColor}}>Titre du sujet</h3>
                                <input className="w-64" type="text" style={{backgroundColor:prop.backgroundColorZoneText, color:prop.textColor}} onChange={(b)=>{setTitle(b.target.value)}} value={title}  pattern="^([\-!?._@+a-zA-ZËÊÈéèêëÄÂÀÃãàâäÎÏÌîïìÜÛÙùüûÖÔÒÕôöõòÿ\d\s]{8,255})$" required />
                                <h3 style={{color:prop.textColor}}>Message du sujet</h3>
                                
                                <textarea className="resize-none w-64" style={{backgroundColor:prop.backgroundColorZoneText, color:prop.textColor}} onChange={(b)=>{setText(b.target.value)}} value={text} name="" id="textareaModalEditer" cols={30} rows={10} minLength={8} maxLength={255} placeholder="Ecrivez votre texte..."></textarea>
                                <button className="rounded-full border border-black border-solid h-8 w-28 sm:rounded-full sm:border sm:border-black sm:border-solid sm:h-8 sm:w-28 md:rounded-full md:border md:border-black md:border-solid md:h-8 md:w-28 lg:rounded-full lg:border lg:border-black lg:border-solid lg:h-8 lg:w-28 xl:rounded-full xl:border xl:border-black xl:border-solid xl:h-8 xl:w-28" style={{backgroundColor:prop.backgroundColorUpdateButton, color:prop.textColorUpdateButton}} >Editer</button>
                            </div>
                        </form>
                    </div>
                </div>
            ) : null
        }
    </>
    )
}



export function ModalSupprimer(prop: any){
    const paramsTopic = useParams().idTopic
    const router = useRouter();
    const [succes, setSucces] = useState('')
    const [token, setToken] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const regexTopicDelete = /^([0-9]{1,})$/
    const paramsCateg = useParams().nameCategorie
    const regexToken = /^([A-Za-zËÊÈéèêëÄÂÀÃãàâäÎÏÌîïìÜÛÙùüûÖÔÒôöõòÿ!_.'?\d\s-]){2,}$/; 
    
    
    const handleDelPost = async (event: any) => {
        event.preventDefault();

        function HandleCloseModalSupprimer() {
            let divModalSupprimer = document.getElementById("divModalSupprimer")
            divModalSupprimer ?
            divModalSupprimer.style.display = "none" : null
        }
        const data = {
            token: token
        }
        !regexTopicDelete.test(paramsTopic) || !regexToken.test(token) ?
        setErrorMessage('Une erreur dans les parametres') :
        await delPost(data, paramsTopic)
        .then((result)=>{

            if (result !== undefined) {

                if (result.status === 200) {
                    console.log(result)
                    setSucces(result.data.message)
                    setErrorMessage('')
                    setTimeout(() => {
                        HandleCloseModalSupprimer()
                        router.push('/' + paramsCateg);
                        console.log(paramsTopic)
                    }, 1500);
                } else {
                    return Promise.reject(result)
                }
            }   
            
            
            console.log(result)
        })
        .catch((error)=>{
            if (!error) {
                setSucces('Post supprimer')
                setErrorMessage('')
                setTimeout(() => {
                    setSucces('')
                    HandleCloseModalSupprimer()
                    router.push('/' + paramsCateg);
                }, 1500);
            }
            if (error) {
                setErrorMessage(error.response.data.message)
                setSucces('')
            }
        })
    }

    function CloseModalSupprimer() {
        let divModalSupprimer = document.getElementById("divModalSupprimer")
        divModalSupprimer ?
        divModalSupprimer.style.display = "none" : null
    }
    
    useEffect(()=>{
        const dataToken = localStorage.getItem('tokenUser')
        dataToken ?
        setToken(dataToken) : null
    },[])

    return(
        <>
            {token ?
                (

                    <div id="divModalSupprimer" className="hidden justify-center items-center w-full h-full fixed left-0 top-0" style={{backgroundColor:"rgba(0, 0, 0, 0.598)"}}>
                        <div id="ModalSupprimer"  className="flex justify-center items-center flex-col fixed w-96 h-3/6 " style={{gap:"1vh" , backgroundColor:prop.backgroundColorThird, color:prop.textColor}}>
                            <h3 className="absolute top-0 right-0 text-xl" style={{color:prop.textColor}} onClick={CloseModalSupprimer}>X</h3>
                            <h2 style={{color:"red"}} className="text-lg">{errorMessage}</h2>
                            <h2 style={{color:"green"}} className="text-lg">{succes}</h2>
                            <h2 style={{color: prop.textColor}}>Supprimer ce commentaire ?</h2>
                            <form onSubmit={handleDelPost} action="" method="delete">

                                <button className="rounded-full border border-black border-solid h-8 w-28 sm:rounded-full sm:border sm:border-black sm:border-solid sm:h-8 sm:w-28 md:rounded-full md:border md:border-black md:border-solid md:h-8 md:w-28 lg:rounded-full lg:border lg:border-black lg:border-solid lg:h-8 lg:w-28 xl:rounded-full xl:border xl:border-black xl:border-solid xl:h-8 xl:w-28" style={{backgroundColor:prop.backgroundColorDeleteButton, color:prop.textColorDeleteButton}} >Supprimer</button>
                            </form>
                        </div>
                    </div>
                ) : null
            }
        </>
    )
}


// Open&Close ModalEditer

export function OpenModalEditer() {
    let divModalEditer = document.getElementById("divModalEditer")
    divModalEditer ?
    divModalEditer.style.display = "flex" : null
}




// Open&Close ModalSupprimer

export function OpenModalSupprimer() {
    let divModalSupprimer = document.getElementById("divModalSupprimer")
    divModalSupprimer ?
    divModalSupprimer.style.display = "flex" : null
}




export function CardMember(params: any) {
    console.log(params)
    const idUser = params.idUser
    const [post, setPost] = useState({})
    const [userInfo, setUserInfo] = useState([])
    const [likeComInfo, setLikeComInfo] = useState(0)
    const [likePostInfo, setLikePostInfo] = useState(0)
    const [postsInfo, setPostsInfo] = useState(0)
    const [comsInfo, setComsInfo] = useState(0)
    const [roleInfo, setRoleInfo] = useState({})

    const data = {
        params: useParams().idTopic
    }

    const getThePost = () => {

        getPost(data)
        .then((res:any)=>{
            setPost(res.user)
            console.log('getpost', res.user)
            GetUser(res.user.id)
            .then((res)=> {
                console.log(res)
                setUserInfo(res.user)
                setLikeComInfo(res.user.likescoms.length)
                setLikePostInfo(res.user.likesposts.length)
                setPostsInfo(res.user.posts.length)
                setComsInfo(res.user.coms.length)
                setRoleInfo(res.user.role)
            })
            .catch((error)=>{
                console.log(error)
            })
        })
        .catch((error)=> {
            console.log(error)
        })
    }


    useEffect(()=>{
        getThePost();
    },[])

    return (

        <div className="flex flex-col items-center justify-center border-black border h-64 w-2/5 sm:h-64 sm:w-48 md:h-64 md:w-48 lg:w-48 xl:w-48 2xl:w-48" style={{backgroundColor:params.backgroundColorCardMember}}>
            <img style={{height: '50%', width: '80%'}} src={"/avatar/"+ userInfo.avatar} alt="Photo de profil"/>
            <h4 className="font-bold" style={{color: roleInfo.colorRole}}>{post.pseudo}</h4>
            <h4 style={{color:params.textColor}}>{roleInfo.nameRole}</h4>
            <h5 style={{color:params.textColor}}>Messages: {comsInfo + postsInfo}</h5>
            <h5 style={{color:params.textColor}}>Likes: {likeComInfo + likePostInfo}</h5>
        </div>
    )
}

export function CardCommentaire(user: any) {
    
    console.log(user)
    const [likePostInfo, setLikePostInfo]= useState([])
    const [likeComInfo, setLikeComInfo]= useState([])
    const [userInfo, setUserInfo] = useState({})
    const [roleInfo, setRoleInfo] = useState([])
    const [comsInfo, setComsInfo] = useState([])
    const [postsInfo, setPostsInfo] = useState([])
    const [avatar, setAvatar] = useState('')
    const getUserInfo = () =>{
        GetUser(user.test)
        .then((res)=> {
            setUserInfo(res.user)
            setLikePostInfo(res.user.likesposts)
            setLikeComInfo(res.user.likescoms)
            setComsInfo(res.user.coms)     
            setPostsInfo(res.user.posts)
            setRoleInfo(res.user.role)
            console.log(res.user)
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    let test = userInfo.avatar === null || userInfo.avatar === undefined || !userInfo.avatar ? "2b8c5c114261ef01822c6ce236e73faa" : userInfo.avatar

    useEffect(()=>{
        getUserInfo()
    }, [])
    return (
        <div className="flex flex-col items-center justify-center border-black border h-64 w-2/5 sm:h-64 sm:w-48 md:h-64 md:w-48 lg:w-48 xl:w-48 2xl:w-48" style={{backgroundColor:user.backgroundColorCardMember}}>
            
            <img style={{height:"50%", width:'80%'}} src={"/avatar/" + test} alt="Photo de Profil"/>
            <h4 style={{color: roleInfo.colorRole, fontWeight:"bold"}}>{user.user}</h4>
            <h4 style={{color:user.textColor}}>{roleInfo.nameRole}</h4>
            <h5 style={{color:user.textColor}}>Messages: {comsInfo.length + postsInfo.length}</h5>
            <h5 style={{color:user.textColor}}>Likes: {likeComInfo.length + likePostInfo.length}</h5>
        </div>
    )
}




export function ModalEditerCom(paramsCom : any){
     
    const [text, setText] = useState('')
    const paramsTopic = useParams().idTopic
    const paramsCategorie = useParams().nameCategorie
    const router = useRouter();
    const [succes, setSucces] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const test = paramsCom.paramsCom
    const [token, setToken] = useState('')

    const regexTextTopic = /^([A-Za-zËÊÈéèêëÄÂÀÃãàâäÎÏÌîïìÜÛÙùüûÖÔÒôöõòÿ!_.'?\d\s-]){8,255}$/;


   console.log("AAAAAAAAAAAAAAAAAAAAAA",paramsCom.paramsCom)
            
    function HandleCloseModalEditerCom() {
        let divModalEditerCom = document.getElementById("divModalEditerCom")
        divModalEditerCom ?
        divModalEditerCom.style.display = "none" : null
    }

    const handleEditCom = async (event: any)=>{
        const regexToken = /^([A-Za-zËÊÈéèêëÄÂÀÃãàâäÎÏÌîïìÜÛÙùüûÖÔÒôöõòÿ!_.'?\d\s-]){2,}$/; 

        event.preventDefault()
        const data = {
            text: text,
            token: token
        }
        console.log("BBBBBBBBBBBBBBBBBBBBBBBBBB",paramsCom)
        console.log('zzzzz', regexTextTopic.test(text), text, !text)
        !regexToken.test(token) ||  !text || text === null || text === undefined  || regexTextTopic.test(text) === false ?
         setErrorMessage('Merci de mettre des caractères valide et de mettre au minimum 8 caractères.'):
        await putComs(data, paramsCom.paramsCom)
        .then((result)=>{
            if (result.status === 200) {
                console.log(result)
                setErrorMessage('')
                setSucces(result.data.message)
                

                setTimeout(() => {
                    setSucces('')
                    setText('')
                    HandleCloseModalEditerCom()
                }, 1500);
            } else {
                return Promise.reject(result)
            }
    
            
        })
        .catch((error)=>{
            if (!error) {
                setSucces('Commentaire modifier avec succès')
                setErrorMessage('')
                setTimeout(() => {
                    setSucces('')
                    setText('')
                    HandleCloseModalEditerCom()
                }, 1500);
            }
            if (error) {
                setErrorMessage(error.response.data.message)
                setSucces('')
            }
        })
    }

    function CloseModalEditerCom() {
        let divModalEditerCom = document.getElementById("divModalEditerCom")
        divModalEditerCom ?
        divModalEditerCom.style.display = "none" : null
    }

    useEffect(()=>{
        const dataToken = localStorage.getItem('tokenUser')
        dataToken ?
        setToken(dataToken) : null
    },[])


    return(
        <>
        {token ? 
            (

                <div id="divModalEditerCom" className="hidden justify-center items-center w-full h-full fixed left-0 top-0" style={{backgroundColor:"rgba(0, 0, 0, 0.598)"}}>
                    <div id="ModalEditerCom" className="flex justify-center items-center flex-col fixed w-96 h-3/6 " style={{gap:"1vh" , backgroundColor:paramsCom.backgroundColorThird, color:paramsCom.textColor}}>
                        <h3 className="absolute top-0 right-0 text-xl" style={{color:paramsCom.textColor}}  onClick={CloseModalEditerCom}>X</h3>
                        <h2 style={{color:paramsCom.textColor}}className="font-bold text-bold text-lg">Edition du texte</h2>
                        <h3 style={{color:"red"}}>{errorMessage}</h3>
                        <h3 style={{color:"green"}}>{succes}</h3>
                        <form className="h-full w-full" onSubmit={handleEditCom} action="" method="put">
                            <div className="flex flex-col gap-4 justify-center items-center w-full h-full">
                                <h3 style={{color:paramsCom.textColor}}>Message du sujet</h3>

                                <textarea className="resize-none w-64" style={{backgroundColor:paramsCom.backgroundColorZoneText, color:paramsCom.textColor}} onChange={(b)=>{setText(b.target.value)}} value={text} name="" id="textareaModalEditer" cols={30} rows={10} minLength={8} maxLength={255} placeholder="Ecrivez votre texte..."></textarea>
                                <button  className="rounded-full border border-black border-solid h-8 w-28 sm:rounded-full sm:border sm:border-black sm:border-solid sm:h-8 sm:w-28 md:rounded-full md:border md:border-black md:border-solid md:h-8 md:w-28 lg:rounded-full lg:border lg:border-black lg:border-solid lg:h-8 lg:w-28 xl:rounded-full xl:border xl:border-black xl:border-solid xl:h-8 xl:w-28" style={{backgroundColor:paramsCom.backgroundColorUpdateButton, color:paramsCom.textColorUpdateButton}}>Editer</button>
                            </div>
                        </form>
                    </div>
                </div>
            ) : null}
        </>
    )
}



export function ModalSupprimerCom(paramsCom : any){
    const [text, setText] = useState('')
    const paramsTopic = useParams().idTopic
    const paramsCategorie = useParams().nameCategorie
    const router = useRouter();
    const [succes, setSucces] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const regexComDelete = /^([0-9]{1,})$/
    const [token, setToken] = useState('')
    const regexToken = /^([A-Za-zËÊÈéèêëÄÂÀÃãàâäÎÏÌîïìÜÛÙùüûÖÔÒôöõòÿ!_.'?\d\s-]){2,}$/; 


   console.log('delete', paramsCom)
    function HandleCloseModalSupprimerCom() {
        let divModalSupprimerCom = document.getElementById("divModalSupprimerCom")
        divModalSupprimerCom ?
        divModalSupprimerCom.style.display = "none" : null
    }
  

    const handleDelCom = async (event: any)=>{
        event.preventDefault()
        console.log('delete', paramsCom)

        const data = {
            token: token
        }
        
        !regexToken.test(token) || !regexComDelete.test(paramsCom.paramsCom) ?
        setErrorMessage('Une erreur est survenu !') :
        await delComs(data, paramsCom.paramsCom)
        .then((result)=>{
            if (result !== undefined) {

                if (result.status === 200) {
                    console.log(result)
                    setErrorMessage('')
                    
                    setSucces(result.data.message)
                    setTimeout(() => {
                
                        HandleCloseModalSupprimerCom()
                        setSucces('')    
                    }, 1500);
                    
                } else {
                    return Promise.reject(result)
                }
            }
        })
        .catch((error)=>{
            if (!error) {
                setSucces('Commentaire supprimé')
                setErrorMessage('')
                setTimeout(() => {
                
                    HandleCloseModalSupprimerCom()
                    setSucces('')    
                }, 1500);
            }

            if (error) {
                setErrorMessage(error.response.data.message)
                setSucces('')
            }
        })
    }

    function CloseModalSupprimerCom() {
        let divModalSupprimerCom = document.getElementById("divModalSupprimerCom")
        divModalSupprimerCom ?
        divModalSupprimerCom.style.display = "none" : null
    }
    
    useEffect(()=>{
        const dataToken = localStorage.getItem('tokenUser')
        dataToken ?
        setToken(dataToken) : null
    },[])

    return(
        <>
            {token ?
                (

                    <div id="divModalSupprimerCom" className="hidden justify-center items-center w-full h-full fixed left-0 top-0" style={{backgroundColor:"rgba(0, 0, 0, 0.598)"}}>
                        <div id="ModalSupprimer"  className="flex justify-center items-center flex-col fixed w-96 h-3/6 " style={{gap:"1vh" , backgroundColor:paramsCom.backgroundColorThird, color:paramsCom.textColor}}>
                            <h3 className="absolute top-0 right-0 text-xl" style={{color:paramsCom.textColor}} onClick={CloseModalSupprimerCom}>X</h3>
                            <h2 className="text-lg" style={{color:"red"}}>{errorMessage}</h2>
                            <h2 className="text-lg" style={{color:"green"}}>{succes}</h2>
                            <h2 style={{color:paramsCom.textColor}}>Supprimer ce commentaire ?</h2>
                            <form onSubmit={handleDelCom} action="" method="delete">

                                <button className="rounded-full border border-black border-solid h-8 w-28 sm:rounded-full sm:border sm:border-black sm:border-solid sm:h-8 sm:w-28 md:rounded-full md:border md:border-black md:border-solid md:h-8 md:w-28 lg:rounded-full lg:border lg:border-black lg:border-solid lg:h-8 lg:w-28 xl:rounded-full xl:border xl:border-black xl:border-solid xl:h-8 xl:w-28" style={{backgroundColor:paramsCom.backgroundColorDeleteButton, color:paramsCom.textColorDeleteButton}} >Supprimer</button>
                            </form>
                        </div>
                    </div>
                ) : null
            }
        </>
    )
}








export function ButtonModalsCom(params: any) {
    
    console.log(params)
    const [token, setToken] = useState('')
    const [userInfo, setUserInfo] = useState({})
    const idCom = params.idCom
    console.log(params.idCom)
    const [comInfo, setComInfo] = useState({})

    const OpenModalEditerCom = () => {
        
        params.setProp(params.idCom)
        
        
        let divModalEditerCom = document.getElementById("divModalEditerCom")
        if (divModalEditerCom) {
            divModalEditerCom.style.display = "flex"
        }
    }

    const OpenModalSupprimerCom = () => {
        params.setProp(params.idCom)
        let divModalSupprimerCom = document.getElementById("divModalSupprimerCom")
        
        if (divModalSupprimerCom) {            
            divModalSupprimerCom.style.display = "flex"
        }
    }

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


    async function VerifyCom() {
       
        console.log(idCom)
        await getCom(idCom)
        .then((res)=>{
            console.log("idUserPost", res.idUser)
            setComInfo(res)
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
       VerifyCom()
    },[])


    return (
        <>
        {token ?
            (
                userInfo.idRole == 1 || userInfo.idRole == 2 || userInfo.id == comInfo.idUser ?
                (
                    <div>
                        <button onClick={OpenModalEditerCom}>
                            <img src={"/image/icone/" + params.iconeUpdatePost} className="text-white w-12 h-12" alt="Editer" />
                        </button>
                        
                        <button onClick={OpenModalSupprimerCom}>
                            <img  src={"/image/icone/" + params.iconeDeletePost} className="text-white w-12 h-12" alt="Supprimer" />
                        </button>
                    
                    </div>
                ) : null
            ) : null
        }
        </>
    );
}

export function LikeCom(prop: any) {
    const idCategorie = useParams().nameCategorie
    const idPost = useParams().idTopic
    const [verifyLike, setVerifyLike] = useState([])
    const [token, setToken] = useState('')
    const regexToken = /^([A-Za-zËÊÈéèêëÄÂÀÃãàâäÎÏÌîïìÜÛÙùüûÖÔÒôöõòÿ!_.'?\d\s-]){2,}$/; 
    const regexID = /^([0-9]){1,}$/
    
    const handleLikeCom = async (event: any) => {
        event.preventDefault();
        const idUser = jwt_decode.decode(localStorage.tokenUser)
        
        const data = {
            idPost: idPost,
            idCategorie: idCategorie,
            idUser: idUser.id,
            idCom: prop.idCom,
            idTheme: prop.idTheme,
            token: token
        }
        regexToken.test(token) && regexID.test(idCategorie) && regexID.test(idPost) && regexID.test(prop.idCom) && regexID.test(idUser.id) ?
        await actionLikeCom(data) : null
        
    }
    
    async function FunctionVerifyLike() {
        const idUser = jwt_decode.decode(localStorage.tokenUser)
        const dataLike = {
            idUser: idUser ? idUser.id : null,
            idCategorie: idCategorie,
            idPost: idPost,
            idCom: prop.idCom,
            token: token,
            idTheme: prop.idTheme
        }
        
        
        
        dataLike ?
        await getLikeCom(dataLike)
        .then((res)=> {
            setVerifyLike(res.message)
            console.log(res)
        })
        .catch((error)=>{
            console.log(error)
        }) : null
        
    }
    
    
    useEffect(()=>{
        FunctionVerifyLike()
        
        
            const dataToken = localStorage.getItem('tokenUser')
            dataToken ?
            setToken(dataToken) : null
        
         
        
    }, [])
    
    return (
        <>
        {token ?
            (

                <form action="" onSubmit={handleLikeCom} method="post">
                    {verifyLike !== null ? (                
                        <button><img className="h-8 w-8" src={"/image/icone/" + prop.iconeLikeTrue} alt="Liké" /></button>
                        ) : (
                        <button><img className="h-8 w-8" src={"/image/icone/" + prop.iconeLikeFalse} alt="Non liké" /></button>
                        )
                    }
                </form>
            ) : null
        }
        
        </>
    )
}



export function Commentaire(prop: any) {
    const [idCom, setIdCom] = useState('')
    const [com, setCom] = useState([])
    const paramsTopic = useParams().idTopic
    const [paramsUser, setParamsUser] = useState('')
    const paramsCategorie = useParams().nameCategorie
    const [users, setUsers] = useState([])
    const getTheCom = () =>{
        getAllCom()
        .then((res:any)=>{
            setCom(res)
        })
    }

    useEffect(()=>{
        getTheCom();
        
    },[])

    return (
        <>
            {com !== undefined && com.length > 0 ?
                com.map((coms, index)=>{
                    if (paramsTopic == coms.idPost) {
                        return (
                            
                            <div key={index} className="flex flex-col justify-center items-center gap-4 border border-black h-96">
                                <ButtonModalsCom iconeDeletePost={prop.iconeDeletePost} iconeUpdatePost={prop.iconeUpdatePost} setProp={setIdCom} idCom={coms.id}/>
                                <ModalEditerCom backgroundColorThird={prop.backgroundColorThird} backgroundColorUpdateButton={prop.backgroundColorUpdateButton} backgroundColorZoneText={prop.backgroundColorZoneText} textColor={prop.textColor} textColorUpdateButton={prop.textColorUpdateButton} paramsCom={idCom}/>
                                
                                <ModalSupprimerCom backgroundColorThird={prop.backgroundColorThird} backgroundColorDeleteButton={prop.backgroundColorDeleteButton} backgroundColorZoneText={prop.backgroundColorZoneText} textColor={prop.textColor} textColorDeleteButton={prop.textColorDeleteButton} paramsCom={idCom}/>                                    
                                <div key={index} className="flex w-full">
                                    <CardCommentaire  backgroundColorCardMember={prop.backgroundColorCardMember} textColor={prop.textColor}  user={coms.user.pseudo} test={coms.idUser}/>
                                    <p style={{color:prop.textColor}} className="w-7/12">{coms.textComs}</p>
                                </div>
                                <LikeCom iconeLikeFalse={prop.iconeLikeFalse} iconeLikeTrue={prop.iconeLikeTrue} idCom={coms.id} idTheme={prop.idTheme}/>    
                                <hr/>
                            </div>
                            
                        )
                    }
                }): null
            }
        </>
        
    );
}


export function TextareaCom(prop: any) {
    const [text, setText] = useState('')
    const router = useRouter();
    const idCategorie = useParams().nameCategorie
    const idTopic = useParams().idTopic
    const regexTextTopic = /^([A-Za-zËÊÈéèêëÄÂÀÃãàâäÎÏÌîïìÜÛÙùüûÖÔÒôöõòÿ!_.'?\d\s-]){8,255}$/;
    const regexID = /^([0-9]){1,}$/
    const regexToken = /^([A-Za-zËÊÈéèêëÄÂÀÃãàâäÎÏÌîïìÜÛÙùüûÖÔÒôöõòÿ!_.'?\d\s-]){2,}$/; 
    const [succes, setSucces] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const [idTheme, setIdTheme] = useState('')

    async function getACategorie(){
        await getCateg(idCategorie)
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

    const handleNewCom = async (event: any) => {
        const token = localStorage.tokenUser
        const initIdUser = jwt_decode.decode(localStorage.tokenUser)
        const idUser = initIdUser ? initIdUser.id : null
        event.preventDefault();

        const data = {
            text: text,
            idUser: idUser,
            idCategorie: idCategorie,
            idTopic: idTopic,
            token: token,
            idTheme: idTheme
        }

        

        !regexToken.test(token) || !text || text === null || text === undefined || !regexTextTopic.test(text) || !regexID.test(idUser) || !regexID.test(idCategorie) || !regexID.test(idTopic) ?
        setErrorMessage('Merci de mettre des caractères valide, minimum 8 caractères.') :
        await newCom(data) 
        .then((data)=> {
            console.log(data.data)
            if (data !== undefined) {

                if (data.status === 200) {
                    
                    setTimeout(() => {
                        setSucces('')
                        setText('')
                        router.push('/' + data.data.com.idCategorie + "/topic/" + data.data.com.idPost) 
                    }, 1500);
                    setSucces('Votre message a été envoyer avec succès')
                    setErrorMessage('')
                } else {
                    return Promise.reject(data)
                }
            }   
        })
        .catch((error)=> {
            if (!error) {
                setSucces('Message envoyer')
                setErrorMessage('')
                router.push('/')
            }

            if (error) {

                setErrorMessage(error.response.data.message)
                setSucces('')
            }
        })
    }

    useEffect(()=>{
        getACategorie()
    })

    return(
        <form onSubmit={handleNewCom} action="" method="post">
            <h3 style={{color:"red"}}>{errorMessage}</h3>
            <h3 style={{color:"green"}}>{succes}</h3>
            <textarea onChange={(b)=> setText(b.target.value)} value={text} id="" cols={30} rows={10} placeholder="Votre texte..." className="w-full resize-none" style={{backgroundColor:prop.backgroundColorZoneText, color:prop.textColor}}></textarea>
            <button className="rounded-full border border-black border-solid h-8 w-28 sm:rounded-full sm:border sm:border-black sm:border-solid sm:h-8 sm:w-28 md:rounded-full md:border md:border-black md:border-solid md:h-8 md:w-28 lg:rounded-full lg:border lg:border-black lg:border-solid lg:h-8 lg:w-28 xl:rounded-full xl:border xl:border-black xl:border-solid xl:h-8 xl:w-28" style={{background:prop.backgroundColorButtonGeneral, color:prop.textColorGeneralButton}}>Poster</button>
        </form>
    )
}



export function LikeTopic(getIdUser: any) {
    const idCategorie = useParams().nameCategorie
    const idPost = useParams().idTopic
    const [verifyLike, setVerifyLike] = useState([])
    const [token, setToken] = useState('')
    const regexToken = /^([A-Za-zËÊÈéèêëÄÂÀÃãàâäÎÏÌîïìÜÛÙùüûÖÔÒôöõòÿ!_.'?\d\s-]){2,}$/; 
    const regexID = /^([0-9]){1,}$/
    const [idTheme, setIdTheme] = useState('')


    async function getACategorie(){
        await getCateg(idCategorie)
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

    console.log(getIdUser.propFromParent)
    
    const handleLikePost = async (event: any) => {
        event.preventDefault();
        const idUser = jwt_decode.decode(localStorage.tokenUser)
        
        const data = {
            idPost: idPost,
            idCategorie: idCategorie,
            idUser: idUser.id,
            token: localStorage.tokenUser,
            idTheme: idTheme
        }
        regexToken.test(token) && regexID.test(idCategorie) && regexID.test(idPost) && regexID.test(idUser.id) ?
        await actionLikePost(data) : null
        
    }
    
    async function FunctionVerifyLike() {
        const idUser = jwt_decode.decode(localStorage.tokenUser)
        const dataLike = {
            idUser: idUser ? idUser.id : null,
            idCategorie: idCategorie,
            idPost: idPost,
            token: localStorage.tokenUser,
            idTheme: idTheme
        }
        
        
        dataLike ?
        await getLikePost(dataLike)
        .then((res)=> {

            setVerifyLike(res.result)
            
            console.log(res)
        })
        .catch((error)=>{
            console.log(error)
        }) : null
        
    }
    
    
    useEffect(()=>{
        FunctionVerifyLike()
        getACategorie()
        
            const dataToken = localStorage.getItem('tokenUser')
            dataToken ?
            setToken(dataToken) : null
        
    }, [])
    
    return (
        <>
        {token ?
            (

                <form action="" onSubmit={handleLikePost} method="post">
                    {verifyLike !== null ? (                
                        <button><img className="h-8 w-8" src={"/image/icone/" + getIdUser.iconeLikeTrue} alt="Liké" /></button>
                        ) : (
                        <button><img className="h-8 w-8" src={"/image/icone/" + getIdUser.iconeLikeFalse} alt="Non liké" /></button>
                        )
                    }
                </form>
            ) : null
        }
        </>
    )
}


export function ContentTopic() {

    const [post, setPost] = useState({})
    const [idUser, setIdUser] = useState(0)
    const [idUserForLike, setIdUserForLike] = useState('')
    const [token, setToken] = useState('')
    const idCategorie = useParams().nameCategorie
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
    const [idTheme, setIdTheme] = useState('')

    async function getACategorie(){
        await getCateg(idCategorie)
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

    const data = {
        params: useParams().idTopic,
        token: token
    }

    const getThePost = () => {
        getPost(data)
        .then((res:any)=>{
            setPost(res)
            setIdUser(res.idUser)
            console.log(res.idUser)
            console.log('getpost', res)
        })
        .catch((error)=> {
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
            designSetting()
            getThePost();
            getACategorie()
    },[])

    return (
        <section className="w-11/12" style={{backgroundColor:backgroundColorThird, color:generalTextColor}}>
            <h2 className="text-center text-5xl" style={{color:generalTextColor, backgroundColor:backgroundColorFirst}}>{post.titlePost}</h2>
            <ModalEditer backgroundColorThird={backgroundColorThird} backgroundColorUpdateButton={backgroundColorUpdateButton} backgroundColorZoneText={backgroundColorZoneText} textColor={generalTextColor} textColorUpdateButton={textColorUpdateButton}/>
            <ModalSupprimer backgroundColorThird={backgroundColorThird} backgroundColorDeleteButton={backgroundColorDeleteButton} backgroundColorZoneText={backgroundColorZoneText} textColor={generalTextColor} textColorDeleteButton={textColorDeleteButton}/>
            <div className="flex flex-col justify-center items-center border border-black gap-6 h-96" >
                <ButtonModals iconeDeletePost={iconeDeletePost} iconeUpdatePost={iconeUpdatePost}/>
                <div className="flex w-full">
                    <CardMember idUser={idUser} backgroundColorCardMember={backgroundColorCardMember} textColor={generalTextColor}/>
                    <p style={{color:generalTextColor}}>{post.textPost}</p>
                </div>
                <LikeTopic iconeLikeFalse={iconeLikeFalse} iconeLikeTrue={iconeLikeTrue}/>
            </div>
            <hr/>
            <Commentaire idTheme={idTheme} backgroundColorThird={backgroundColorThird} backgroundColorUpdateButton={backgroundColorUpdateButton} backgroundColorDeleteButton={backgroundColorDeleteButton} backgroundColorZoneText={backgroundColorZoneText} textColor={generalTextColor} backgroundColorCardMember={backgroundColorCardMember}  iconeDeletePost={iconeDeletePost} iconeUpdatePost={iconeUpdatePost} iconeLikeFalse={iconeLikeFalse} iconeLikeTrue={iconeLikeTrue} textColorUpdateButton={textColorUpdateButton} textColorDeleteButton={textColorDeleteButton}/>
            {token ?
                ( 
                    <TextareaCom backgroundColorZoneText={backgroundColorZoneText} textColor={generalTextColor} textColorButton={textColorGeneralButton} backgroundColorButtonGeneral={backgroundColorGeneralButton}/>
                ) : null
            }
        </section>
    )
}


