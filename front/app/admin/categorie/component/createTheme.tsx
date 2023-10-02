'use client'
import { newTheme } from "@/api/theme";
import { useState } from "react"


export default function CreateTheme(prop: any) {
    const [nameTheme, setNameTheme] = useState('')
    const regexTheme = /^([A-Za-zËÊÈéèêëÄÂÀÃãàâäÎÏÌîïìÜÛÙùüûÖÔÒôöõòÿ!_.'?\d\s-]){6,45}$/; 
    const [errorMessage, setErrorMessage] = useState('')
    const [succes, setSucces] = useState('')
    const regexToken = /^([A-Za-zËÊÈéèêëÄÂÀÃãàâäÎÏÌîïìÜÛÙùüûÖÔÒôöõòÿ!_.'?\d\s-]){2,}$/; 

    async function handleTheme(event: any) {
        event.preventDefault();
        const token = localStorage.tokenUser
        const data = {
            nameTheme: nameTheme,
            token: token
        }
        !regexToken.test(token) || nameTheme === null || nameTheme === undefined || !nameTheme || !regexTheme.test(nameTheme) ?
        setErrorMessage('Merci de mettre des caractères valides et un minimum de 6 caractères.') :
        await newTheme(data)
        .then((res)=>{
            if (res !== undefined) {
                if (res.status === 200) {
                    setNameTheme('')
                    setSucces(res.data.message)
                    setErrorMessage('')
                } else { 
                console.log(res)
                return Promise.reject(res)
                }
            }
            
        })
        .catch((error)=>{
            
            if (!error) {
                setSucces('Theme crée avec succès')
                setErrorMessage('')
                setNameTheme('')
            }

            if (error) {
                console.log(error)
                setErrorMessage(error.response.data.message)
                setSucces('')
            }
        })
    }

    return (
        <section>
            <div>
                <form action="" onSubmit={handleTheme} method="post">
                <div className="flex flex-col items-center gap-6">

                    <h2 className="font-bold" style={{color:prop.textColor}}>Nom du Theme</h2>
                    <h3 style={{color: "green"}}>{succes}</h3>
                    <h3 style={{color:"red"}}>{errorMessage}</h3>
                    <input style={{color:prop.textColor, backgroundColor:prop.backgroundColorZoneText}} value={nameTheme} onChange={(b) => setNameTheme(b.target.value)} type="text" name="" id=""  pattern="^([\-!?._@+a-zA-ZËÊÈéèêëÄÂÀÃãàâäÎÏÌîïìÜÛÙùüûÖÔÒÕôöõòÿ\d\s]{6,45})$" required  />
                    <button className="rounded-full border border-black border-solid h-8 w-28 sm:rounded-full sm:border sm:border-black sm:border-solid sm:h-8 sm:w-28 md:rounded-full md:border md:border-black md:border-solid md:h-8 md:w-28 lg:rounded-full lg:border lg:border-black lg:border-solid lg:h-8 lg:w-28 xl:rounded-full xl:border xl:border-black xl:border-solid xl:h-8 xl:w-28 text-center" style={{backgroundColor:prop.backgroundColorGeneralButton, color:prop.textColorGeneralButton}}>Crée</button>
                </div>
                </form>
            </div>
        </section>
    )
}