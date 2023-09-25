'use client'

import { UpdateRole, getAllRole } from "@/api/role"
import { UpdateUser } from "@/api/user"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"




export default function ModalUpdateRole(params: any) {

    const [nameRole, setNameRole] = useState('')
    const [colorRole, setColorRole] = useState('')
    const regexNameRoleUpdate = /^([A-Za-zËÊÈéèêëÄÂÀÃãàâäÎÏÌîïìÜÛÙùüûÖÔÒôöõòÿ!_.'?\d\s-]){0,50}$/; 
    const regexColorRoleUpdate= /^#+([a-zA-Z0-9]){0,6}$/
    const [errorMessage, setErrorMessage] = useState('')
    const [succes, setSucces] = useState('')
    const regexToken = /^([A-Za-zËÊÈéèêëÄÂÀÃãàâäÎÏÌîïìÜÛÙùüûÖÔÒôöõòÿ!_.'?\d\s-]){2,}$/; 
    

    function regexColor() {
        if (colorRole == "") {
            return colorRole
        } else {
            return regexColorRoleUpdate.test(colorRole)
        }
    }

    async function handleUpdateRole(event: any) {
        event.preventDefault();
        const token = localStorage.tokenUser

        const data = {
            name: nameRole,
            color: colorRole,
            token: token
        }

        function HandleCloseModalEditer () {
            const modalEditer = document.querySelector('#blackScreenEditerRole')
            modalEditer ?
            modalEditer.style.display = "none" : null
        }

        if (regexNameRoleUpdate.test(nameRole) && regexColor() !== false && regexToken.test(token)){
            console.log(regexNameRoleUpdate.test(nameRole))
            await UpdateRole(data, params.idRole)
            .then((data)=>{
                
                if (data.status === 200) {
                    setSucces(data.data.message)
                    setErrorMessage("")
                    setTimeout(() => {
                        setNameRole('')
                        setSucces('')
                        setColorRole('')
                        HandleCloseModalEditer()
                    }, 1500);
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
                    setSucces("Role modifier")
                    setErrorMessage("")
                    setTimeout(() => {
                        setSucces('')
                        setNameRole('')
                        setColorRole('')
                        HandleCloseModalEditer()
                    }, 1500);
                }
            })
        }
        console.log(regexNameRoleUpdate.test(nameRole), regexColorRoleUpdate.test(colorRole), colorRole)
        console.log(params.idRole)
    }

    function CloseModalEditer () {
        const modalEditer = document.querySelector('#blackScreenEditerRole')
        modalEditer ?
        modalEditer.style.display = "none" : null
    }


    

    return (
        
        
        <div  id="blackScreenEditerRole" className="flex-col justify-center items-center top-0 left-0 fixed h-full w-full" style={{display:"none", zIndex:"1",  backgroundColor:"rgba(0, 0, 0, 0.598)"}}>
            <div id="modalEditer" className="flex flex-col justify-center items-center fixed h-96 w-96 lg:w-3/6 xl:w-2/6" style={{ zIndex:"3", backgroundColor:params.backgroundColorThird}}>
                <form className="h-full w-full" onSubmit={handleUpdateRole} action="" method="put">
                    <div className=" h-full w-full flex flex-col justify-center items-center gap-6">
                        <h3 className="absolute top-0 right-0 text-xl" style={{color:params.textColor}} onClick={CloseModalEditer}>X</h3>
                        <h3 style={{color:"green"}}>{succes}</h3>
                        <h3 style={{color:"red"}}>{errorMessage}</h3>
                        <h4 style={{color:params.textColor}}>Nom du role</h4>
                        <input value={nameRole} onChange={(b)=> setNameRole(b.target.value)} type="text" pattern="^([A-Za-z\-ËÊÈéèêëÄÂÀÃãàâäÎÏÌîïìÜÛÙùüûÖÔÒôöõòÿ!_.?\d\s]){5,15}$" required/>
                        <h4 style={{color:params.textColor}}>Role</h4>
                        <h4 style={{color:params.textColor}}>Couleur du role</h4>
                        <input style={{color:params.textColor, backgroundColor:params.backgroundColorZoneText}} value={colorRole} onChange={(b)=> setColorRole(b.target.value)} type="color" name="" id="" pattern="^#+([A-Za-z0-9]){6,6}" required />
                        <button className="rounded-full border border-black border-solid h-8 w-28 sm:rounded-full sm:border sm:border-black sm:border-solid sm:h-8 sm:w-28 md:rounded-full md:border md:border-black md:border-solid md:h-8 md:w-28 lg:rounded-full lg:border lg:border-black lg:border-solid lg:h-8 lg:w-28 xl:rounded-full xl:border xl:border-black xl:border-solid xl:h-8 xl:w-28" style={{backgroundColor:params.backgroundColorUpdateButton, color:params.textColorUpdateButton}}>Modifier</button>
                    </div>
                </form>
            </div>
        </div>
        
    )
}

