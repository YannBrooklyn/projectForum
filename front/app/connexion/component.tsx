'use client'



import { useState } from "react"
import { useEffect } from "react"
import { useRouter } from "next/navigation"

import { LogUser } from "@/api/user"



export function ContentLogin(prop: any) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigateTo = useRouter();
    const regexPseudoUpdate = /^([A-Za-zËÊÈéèêëÄÂÀÃãàâäÎÏÌîïìÜÛÙùüûÖÔÒôöõòÿ!_.'?\d\s-]){0,15}$/; 
    const regexPassword = /^([A-Za-zËÊÈéèêëÄÂÀÃãàâäÎÏÌîïìÜÛÙùüûÖÔÒôöõòÿ!_.'?\d\s-]){6,255}$/; 
    const regexEmail = /^([-._A-Za-z\d]){3,100}@([a-zA-Z]){3,15}\.([a-zA-Z]){2,15}$/
    const regexToken = /^([A-Za-zËÊÈéèêëÄÂÀÃãàâäÎÏÌîïìÜÛÙùüûÖÔÒôöõòÿ!_.'?\d\s-]){2,}$/; 
    const [errorMessage, setErrorMessage] = useState('')
    const [succes, setSucces] = useState('')

    const handleLog = async (event: any) => {
        event.preventDefault();

        const data = {
            email: email,
            password: password,
            token: localStorage.tokenUser
        }
        // !regexToken.test(localStorage.tokenUser) || !regexEmail.test(email) || email == " " || email == "" || email === null || email === undefined || password === null || password === undefined || !regexPassword.test(password) || password == " " || password == "" ?
        // setErrorMessage('Merci de remplir les champs avec des caractères valide.') :
        await LogUser(data)
        .then((data) => {
            console.log(data)
            if (data !== undefined) { 
                if(data.status === 200) {
                    setSucces("Identification réussi, vous allez redirigé vers la page d'accueil")
                    setErrorMessage('')
                    navigateTo.push('/')
                } else {

                    console.log(data)
                    return Promise.reject(data)
                }
            }
            
        })
        .catch((error)=>{  
            console.log("ihihihihiiiiiii",error)
            
            if (!error) {
                
                setSucces("Identification réussi, vous allez redirigé vers la page d'accueil")
                setErrorMessage('')
                navigateTo.push('/')
            }

            if (error) {

                setSucces("")
                setErrorMessage(error.response.data.message)
                console.log("400", error)
            } 
        })
    }

    return(

        <form className="w-full flex flex-col items-center justify-center" action="" onSubmit={handleLog} method="post">

            <div className="flex flex-col justify-center items-center border-2 border-black rounded-3xl w-96 h-96 sm:rounded-3xl sm:w-10/12 md:w-7/12 lg:w-6/12 xl:w-6/12 2xl:w-7/12 " style={{gap:"2vh", backgroundColor:prop.backgroundColorThird}}>
                    <h3 style={{color: "green"}}>{succes}</h3>
                    <h3 style={{color:"red"}}>{errorMessage}</h3>
                    <h3 style={{color:prop.textColor}}>Email</h3>
                    <input className="w-64 h-8 sm:w-10/12 md:w-7/12 lg:w-6/12 xl:w-6/12 2xl:w-7/12" type="email" style={{backgroundColor:prop.backgroundColorZoneText, color:prop.textColor}} placeholder="exemple@exemple.com" onChange={(b) => setEmail(b.target.value)} value={email} name="" pattern="^([A-Za-z\-ËÊÈéèêëÄÂÀÃãàâäÎÏÌîïìÜÛÙùüûÖÔÒôöõòÿ!_.?\d]{3,100})+@([A-Za-z\-ËÊÈéèêëÄÂÀÃãàâäÎÏÌîïìÜÛÙùüûÖÔÒôöõòÿ!_.?\d]{3,15})+\.([A-Za-z\-ËÊÈéèêëÄÂÀÃãàâäÎÏÌîïìÜÛÙùüûÖÔÒôöõòÿ!_.?\d]{3,15})$" required/>
                    <h3 style={{color:prop.textColor}}>Mot de passe</h3>
                    <input className="w-64 h-8 sm:w-10/12 md:w-7/12 lg:w-6/12 xl:w-6/12 2xl:w-7/12" type="password" style={{backgroundColor:prop.backgroundColorZoneText, color:prop.textColor}} placeholder="Mot de Passe" onChange={(b) => setPassword(b.target.value)} value={password} name="" pattern="^([A-Za-z\-ËÊÈéèêëÄÂÀÃãàâäÎÏÌîïìÜÛÙùüûÖÔÒôöõòÿ!_.?\d\s]){6,255}$" required />
                    <button className="rounded-full border border-black border-solid h-8 w-28 sm:rounded-full sm:border sm:border-black sm:border-solid sm:h-8 sm:w-28 md:rounded-full md:border md:border-black md:border-solid md:h-8 md:w-28 lg:rounded-full lg:border lg:border-black lg:border-solid lg:h-8 lg:w-28 xl:rounded-full xl:border xl:border-black xl:border-solid xl:h-8 xl:w-28" style={{background:prop.backgroundColorGeneralButton, color:prop.textColorGeneralButton}}>Connexion</button>
            </div>
        </form>
    )
}