'use client'

import { getAllRole } from "@/api/role"
import { UpdateUser, DeleteUser } from "@/api/user"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"




export default function ModalDelete(params: any) {

    const [succes, setSucces] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const regexMembreDelete = /^([0-9]{1,})$/
    const regexToken = /^([A-Za-zËÊÈéèêëÄÂÀÃãàâäÎÏÌîïìÜÛÙùüûÖÔÒôöõòÿ!_.'?\d\s-]){2,}$/; 
    

    async function handleDeleteUser(event: any) {
        event.preventDefault();

        const data = {
            token: localStorage.tokenUser
        }

        function HandleCloseModalSupprimer () {
        
            const modalSupprimer = document.querySelector('#blackScreenSupprimer')
            modalSupprimer ?
            modalSupprimer.style.display = "none" : null
        }

        if (regexToken.test(localStorage.tokenUser) && regexMembreDelete.test(params.idUser)) {

            await DeleteUser(data, params.idUser)
            .then((data)=>{
                
        
                if (data.status === 200) {
        
                    setSucces(data.data.message)
                    setErrorMessage('')
                    setTimeout(()=>{

                        setSucces('')
                        HandleCloseModalSupprimer()
                    }, 1500)
                } else {
                    return Promise.reject(data)
                }
        
                
            })
            .catch((error)=>{
                if (error) {

                    setSucces('')
                    setErrorMessage(error.response.data.message)
                }

                if (!error) {
                    setSucces("Utilisateur supprimer")
                    setErrorMessage('')
                    setTimeout(()=>{

                        setSucces('')
                        HandleCloseModalSupprimer()
                    }, 1500)
                }
            })
        } 
            
    }

    

    function CloseModalSupprimer () {
        
        const modalSupprimer = document.querySelector('#blackScreenSupprimer')
        modalSupprimer ?
        modalSupprimer.style.display = "none" : null
    }

    

    return (
        
        
        <div  id="blackScreenSupprimer" className="flex-col justify-center items-center top-0 left-0 fixed h-full w-full" style={{display:"none", zIndex:"1", top:"0", left:"0", backgroundColor:"rgba(0, 0, 0, 0.598)"}}>
            <div id="modalSupprimer" className="flex flex-col justify-center items-center fixed h-96 w-96 lg:w-3/6 xl:w-2/6" style={{ zIndex:"3", backgroundColor:params.backgroundColorThird}}>
                <form className="w-full h-full" onSubmit={handleDeleteUser} action="" method="delete">
                    <div className="flex flex-col justify-center items-center w-full h-full">
                        <h3 className="absolute top-0 right-0 text-xl" style={{color:params.textColor}} onClick={CloseModalSupprimer}>X</h3>
                        <h3 style={{color: "green"}}>{succes}</h3>
                        <h3 style={{color: "red"}}>{errorMessage}</h3>
                        <h3 className="text-center" style={{color:params.textColor}}>Supprimer cette utilisateur ?</h3>
                        <button className="rounded-full border border-black border-solid h-8 w-28 sm:rounded-full sm:border sm:border-black sm:border-solid sm:h-8 sm:w-28 md:rounded-full md:border md:border-black md:border-solid md:h-8 md:w-28 lg:rounded-full lg:border lg:border-black lg:border-solid lg:h-8 lg:w-28 xl:rounded-full xl:border xl:border-black xl:border-solid xl:h-8 xl:w-28 text-center" style={{backgroundColor:params.backgroundColorDeleteButton, color:params.textColorDeleteButton}}>Supprimer</button>
                    </div>
                </form>
            </div>
        </div>
        
    )
}
