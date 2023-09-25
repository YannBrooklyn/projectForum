'use client'
import { GetUser, UpdateConfidUser } from "@/api/user"
import { useEffect, useState } from "react"
import jwt_decode from 'jsonwebtoken'




export function Confidentialite (prop: any) {

    
    const [pseudonyme, setPseudonyme] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    
 
    const [user, setUser] = useState({})

    const [idUser, setIdUser] = useState(0)
    const regexPseudoUpdate = /^([A-Za-zËÊÈéèêëÄÂÀÃãàâäÎÏÌîïìÜÛÙùüûÖÔÒôöõòÿ!_.'?\d\s-]){0,15}$/; 
    const regexPasswordUpdate = /^([A-Za-zËÊÈéèêëÄÂÀÃãàâäÎÏÌîïìÜÛÙùüûÖÔÒôöõòÿ!_.'?\d\s-]){0,255}$/; 
    const regexEmailUpdate = /^([-._A-Za-z\d]){0,100}@([a-zA-Z]){0,15}\.([a-zA-Z]){0,15}$/
    const regexID = /^([0-9]){1,}$/
    const [errorMessage, setErrorMessage] = useState('')
    const [succes, setSucces] = useState('')
    const regexToken = /^([A-Za-zËÊÈéèêëÄÂÀÃãàâäÎÏÌîïìÜÛÙùüûÖÔÒôöõòÿ!_.'?\d\s-]){2,}$/; 
    
    function RegexEmail () {
        
        if (email !== "") {
            return regexEmailUpdate.test(email)
        } else {
            return email
        }
    }

    const handleConfid = async (event: any) => {
        event.preventDefault();

        const data = {
            pseudo: pseudonyme,
            email: email,
            password: password,
            confirmPassword: confirmPassword,
            token: localStorage.tokenUser
        }
        console.log(!regexPseudoUpdate.test(pseudonyme) , pseudonyme == " " , !regexEmailUpdate.test(email) , !regexPasswordUpdate.test(password) , !regexPasswordUpdate.test(confirmPassword) , email == " " , password == " " , confirmPassword == " " , !regexID.test(idUser.toString()) , idUser === null , idUser === undefined )
        !regexToken.test(localStorage.tokenUser) || !regexPseudoUpdate.test(pseudonyme) || pseudonyme == " " || RegexEmail() === false || !regexPasswordUpdate.test(password) || !regexPasswordUpdate.test(confirmPassword) || email == " " || password == " " || confirmPassword == " " || !regexID.test(idUser.toString()) || idUser === null || idUser === undefined ?
        setErrorMessage('Merci de mettre des caractères valide !') :
        confirmPassword !== password ?
        setErrorMessage('Merci de mettre les même mot de passe.') :
        await UpdateConfidUser(data, idUser)
        .then((data)=>{
            if (data !== undefined) {

                if (data.status === 200) {
                    console.log(data)
                    setSucces(data.data.message)
                    setErrorMessage('')
                } else {
                    return Promise.reject(data)
                }
            }
        })
        .catch((error)=>{
            if (error) {

                setSucces('')
                setErrorMessage(error.response.data.message)
            }

            if (!error) {
                setSucces('Information modifié avec succès')
                setErrorMessage('')
            }
        })          
    }


    useEffect(()=>{

        const initIdUser = jwt_decode.decode(localStorage.tokenUser)
        initIdUser ? setIdUser(initIdUser.id) : null
    },[])
   
    return (
    
        <section className="w-full h-full" id="sectionConfid" style={{display:"none"}}>

            <form className="w-full h-full" onSubmit={handleConfid} action="" method="put">
                <div className="w-full h-full flex flex-col justify-center items-center gap-6">
                    <h3 style={{color:prop.textColor}} className="text-2xl font-bold">Information du compte</h3>
                    <h3 style={{color:"green"}}>{succes}</h3>
                    <h3 style={{color:"red"}}>{errorMessage}</h3>
                    <h4 style={{color:prop.textColor}}>Pseudonyme</h4>
                    <input onChange={(b)=> setPseudonyme(b.target.value)} value={pseudonyme} style={{backgroundColor:prop.backgroundColorZoneText, color:prop.textColor, height:"3vh", width:"25vh"}} placeholder="Choisi ton pseudo" type="text" pattern="^([A-Za-z\-ËÊÈéèêëÄÂÀÃãàâäÎÏÌîïìÜÛÙùüûÖÔÒôöõòÿ!_.?\d\s]){5,15}$" />
                    <h4 style={{color:prop.textColor}}>Email</h4>
                    <input onChange={(b)=> setEmail(b.target.value)} value={email} style={{backgroundColor:prop.backgroundColorZoneText, color:prop.textColor, height:"3vh", width:"25vh"}} placeholder="exemple@exemple.com" type="email" pattern="^([A-Za-z\-ËÊÈéèêëÄÂÀÃãàâäÎÏÌîïìÜÛÙùüûÖÔÒôöõòÿ!_.?\d]{3,100})+@([A-Za-z\-ËÊÈéèêëÄÂÀÃãàâäÎÏÌîïìÜÛÙùüûÖÔÒôöõòÿ!_.?\d]{3,15})+\.([A-Za-z\-ËÊÈéèêëÄÂÀÃãàâäÎÏÌîïìÜÛÙùüûÖÔÒôöõòÿ!_.?\d]{3,15})$" />
                
                    <h4 style={{color:prop.textColor}}>Mot de passe</h4>
                    <input onChange={(b)=> setPassword(b.target.value)} value={password} style={{backgroundColor:prop.backgroundColorZoneText, color:prop.textColor, height:"3vh", width:"25vh"}} placeholder="Mot de passe" type="password"  pattern="^([A-Za-z\-ËÊÈéèêëÄÂÀÃãàâäÎÏÌîïìÜÛÙùüûÖÔÒôöõòÿ!_.?\d\s]){6,255}$"/>
                    <h4 style={{color:prop.textColor}}>Mot de passe confirmation</h4>
                    <input onChange={(b)=> setConfirmPassword(b.target.value)} value={confirmPassword} style={{backgroundColor:prop.backgroundColorZoneText, color:prop.textColor, height:"3vh", width:"25vh"}} placeholder="Mot de passe confirmation" type="password" pattern="^([A-Za-z\-ËÊÈéèêëÄÂÀÃãàâäÎÏÌîïìÜÛÙùüûÖÔÒôöõòÿ!_.?\d\s]){6,255}$" />
                    <button className="rounded-full border border-black border-solid h-8 w-28 sm:rounded-full sm:border sm:border-black sm:border-solid sm:h-8 sm:w-28 md:rounded-full md:border md:border-black md:border-solid md:h-8 md:w-28 lg:rounded-full lg:border lg:border-black lg:border-solid lg:h-8 lg:w-28 xl:rounded-full xl:border xl:border-black xl:border-solid xl:h-8 xl:w-28" style={{backgroundColor:prop.backgroundColorUpdateButton, color:prop.textColorUpdateButton}}>Valider</button>
                </div>
            </form>
        </section>
    
    )
}