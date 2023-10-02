'use client'

import { UpdateRole, getAllRole } from "@/api/role"
import { UpdateTheme } from "@/api/theme"

import { useParams } from "next/navigation"
import { useEffect, useState } from "react"




export default function ModalUpdateTheme(params: any) {

    const [nameTheme, setNameTheme] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const [succes, setSucces] = useState('')
    const regexThemeUpdate = /^([A-Za-zËÊÈéèêëÄÂÀÃãàâäÎÏÌîïìÜÛÙùüûÖÔÒôöõòÿ!_.?\d\s'-]){6,45}$/;
    const regexToken = /^([A-Za-zËÊÈéèêëÄÂÀÃãàâäÎÏÌîïìÜÛÙùüûÖÔÒôöõòÿ!_.'?\d\s-]){2,}$/; 


    console.log("rrorororor", params)
   

    async function handleUpdateTheme(event: any) {
        event.preventDefault();
        const token = localStorage.tokenUser
        const data = {
            nameTheme: nameTheme,
            token: token
        }

        function HandleCloseModalEditer () {
                
            const modalEditer = document.querySelector('#blackScreenEditerTheme')
            modalEditer ?
            modalEditer.style.display = "none" : null
        }


        
            if (regexThemeUpdate.test(nameTheme) && regexToken.test(token)) {
                await UpdateTheme(data, params.idTheme)
                .then((res)=>{
                    
                    if (res !== undefined) {
                        if (res.status === 200) {

                            setSucces(res.data.message)
                            setErrorMessage('')
                            
                            setTimeout(()=>{
                                setSucces('')
                                setNameTheme('')
                                HandleCloseModalEditer()
                            }, 1500)
                        } else {
                            return Promise.reject(res)
                        }                         
                    }
                })
                .catch((error)=>{
                    if (!error) {
                        setSucces('Theme Modifer')
                        setErrorMessage('')
                        setTimeout(()=>{
                            setSucces('')
                            setNameTheme('')
                            HandleCloseModalEditer()
                        }, 1500)
                    }

                    if (error) {

                        setSucces('')
                        setErrorMessage(error.response.data.message)
                    }
                })
                
            } else {
                setErrorMessage("Une erreur est survenu, veuillez mettre au minimum 6 caractères. Sinon erreur au niveau de l'ID Theme.")
                setSucces('')
            }
            
        
        console.log(params.idTheme)
    }


    function CloseModalEditer () {
                
        const modalEditer = document.querySelector('#blackScreenEditerTheme')
        modalEditer ?
        modalEditer.style.display = "none" : null
    }
    


    
    return (
        
        
        <div  id="blackScreenEditerTheme" className="flex-col justify-center items-center top-0 left-0 fixed h-full w-full" style={{display:"none", zIndex:"1",  backgroundColor:"rgba(0, 0, 0, 0.598)"}}>
            <div id="modalEditer" className="flex flex-col justify-center items-center fixed h-96 w-96 lg:w-3/6 xl:w-2/6" style={{ zIndex:"3", backgroundColor:params.backgroundColorThird}}>
                <form  id="testForm" className="h-full w-full" onSubmit={handleUpdateTheme} action="" method="put">
                    <div className=" h-full w-full flex flex-col justify-center items-center gap-6">
                        <h3 className="absolute top-0 right-0 text-xl" style={{color:params.textColor}} onClick={CloseModalEditer}>X</h3>
                        <h3 style={{color: "green"}}>{succes}</h3>
                        <h3 style={{color:"red"}}>{errorMessage}</h3>
                        <h4 style={{color:params.textColor}}>Nom de Theme</h4>
                        <input style={{color:params.textColor, backgroundColor:params.backgroundColorZoneText}} value={nameTheme} onChange={(b) => setNameTheme(b.target.value)} type="text" name="" id="testInput" pattern="^([A-Za-z\-ËÊÈéèêëÄÂÀÃãàâäÎÏÌîïìÜÛÙùüûÖÔÒôöõòÿ!_.?\d\s]){6,255}$" required />
                        <button className="rounded-full border border-black border-solid h-8 w-28 sm:rounded-full sm:border sm:border-black sm:border-solid sm:h-8 sm:w-28 md:rounded-full md:border md:border-black md:border-solid md:h-8 md:w-28 lg:rounded-full lg:border lg:border-black lg:border-solid lg:h-8 lg:w-28 xl:rounded-full xl:border xl:border-black xl:border-solid xl:h-8 xl:w-28" style={{backgroundColor:params.backgroundColorUpdateButton, color:params.textColorUpdateButton}} >Modifier</button>
                    </div>
                </form>
            </div>
        </div>
        
    )
}

