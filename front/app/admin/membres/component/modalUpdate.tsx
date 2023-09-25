'use client'

import { UpdateRole, getAllRole } from "@/api/role"
import { UpdateUser } from "@/api/user"

import { useParams } from "next/navigation"
import { useEffect, useState } from "react"




export default function ModalUpdate(params: any) {
    console.log("rrorororor", params.idUser)
    
    const [pseudo, setPseudo] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [avatar, setAvatar] = useState({})
    const [banniere, setBanniere] = useState({})
    const [role, setRole] = useState('')
    const [allRole, setAllRole] = useState([])
    const [messageErreur, setMessageErreur] = useState('')
    const [succes, setSucces] = useState('')


    const regexPseudoUpdate = /^([A-Za-zËÊÈéèêëÄÂÀÃãàâäÎÏÌîïìÜÛÙùüûÖÔÒôöõòÿ!_.'?\d\s-]){0,15}$/; 
    const regexPasswordUpdate = /^([A-Za-zËÊÈéèêëÄÂÀÃãàâäÎÏÌîïìÜÛÙùüûÖÔÒôöõòÿ!_.'?\d\s-]){0,255}$/; 
    const regexEmailUpdate = /^([-._A-Za-z\d]){0,100}@([a-zA-Z]){0,15}\.([a-zA-Z]){0,15}$/
    const regexRoleUpdate = /^([0-9]{1,})$/
    const regexImage = /^([a-zA-Z_.\d\s-]{1,25})\.(?:jpg|gif|png|bmp)$/
    const regexToken = /^([A-Za-zËÊÈéèêëÄÂÀÃãàâäÎÏÌîïìÜÛÙùüûÖÔÒôöõòÿ!_.'?\d\s-]){2,}$/; 
    
    
    function RegexBanniere() {
        if(!banniere.name) {
            return banniere
        } else {
            return regexImage.test(banniere.name)
        }
    }
    
    
    function RegexEmail () {
        
        if (email !== "") {
            return regexEmailUpdate.test(email)
        } else {
            return email
        }
    }

    function regexRole() {
        if (role == "0" || role === "") {
            return role
        } else {
            return regexRoleUpdate.test(role)
        }
    }

    function regexAvatar() {
        if (!avatar.name) {
            console.log('totototottototto')
            return avatar
        } else {
            return regexImage.test(avatar.name)
        }
    }

    async function handleUpdateUser(event: any) {
        event.preventDefault();

        const data = {
            pseudo: pseudo,
            email: email,
            password: password,
            avatar: avatar,
            banniere: banniere,
            role: parseInt(role),
            token: localStorage.tokenUser
        }

        function HandleCloseModalEditer () {

            const modalEditer = document.querySelector('#blackScreenEditer')
            modalEditer ?
            modalEditer.style.display = "none" : null
        }

        console.log(data)
        
            if (regexToken.test(localStorage.tokenUser) && regexPseudoUpdate.test(pseudo) && RegexEmail() !== false && regexPasswordUpdate.test(password) && regexRole() !== false && regexAvatar() !== false && RegexBanniere() !== false) {
                console.log(regexPseudoUpdate.test(pseudo), RegexEmail(), regexPasswordUpdate.test(password), regexRoleUpdate.test(role), regexRole(), regexAvatar())
                
                console.log(data, role)
                console.log('yey')
                await UpdateUser(data, params.idUser)
                .then((data)=>{
                    if (data !== undefined) {

                        if (data.status === 200) {
                            setSucces(data.data.message)
                            setMessageErreur("")
                            setTimeout(() => {
                                setSucces('')
                                HandleCloseModalEditer()
                            }, 1500);
                        } else {
                            return Promise.reject(data)
                        }
                    }
            
                })
                .catch((error)=>{
                    if (error) {
                        
                            setSucces('')
                            setMessageErreur(error.response.data.message)
                    }

                    if (!error) {
                        
                        setMessageErreur('')
                        setSucces('Utilisateur modifié avec succès')
                        setTimeout(() => {
                            setSucces('')
                            HandleCloseModalEditer()
                        }, 1500);
                    }
                })
            } 
        
        console.log(params.idUser)
    }

    function getAllTheRole () {
        getAllRole()
        .then((res)=>{
            console.log(res)
            setAllRole(res.roles)
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    function CloseModalEditer () {

        const modalEditer = document.querySelector('#blackScreenEditer')
        modalEditer ?
        modalEditer.style.display = "none" : null
    }

    

    useEffect(()=>{
        getAllTheRole()
        
    }, [])

    return (
        
        
        <div id="blackScreenEditer" className="flex-col justify-center items-center top-0 left-0 fixed h-full w-full" style={{display:"none", zIndex:"1",  backgroundColor:"rgba(0, 0, 0, 0.598)"}}>
            <div id="modalEditer" className="flex flex-col justify-center items-center fixed h-96 w-96 lg:w-3/6 xl:w-2/6" style={{ zIndex:"3", backgroundColor:params.backgroundColorThird}}>
                <form  className="h-full w-full" onSubmit={handleUpdateUser} action="" method="put" encType="multipart/form-data">
                    <div className=" h-full w-full flex flex-col justify-center items-center">
                        <h3 className="absolute top-0 right-0 text-xl" style={{color:params.textColor}} onClick={CloseModalEditer}>X</h3>
                        <h4 style={{color:"red", fontWeight:"bold"}}>{messageErreur}</h4>    
                        <h4 style={{color:"green", fontWeight:"bold"}}>{succes}</h4>
                        <h4 style={{color:params.textColor}}>Pseudo</h4>
                        <input style={{color:params.textColor, backgroundColor:params.backgroundColorZoneText}} className="lg:w-4/6 xl:w-3/6" value={pseudo} onChange={(b) => setPseudo(b.target.value)} type="text" pattern="^([A-Za-z\-ËÊÈéèêëÄÂÀÃãàâäÎÏÌîïìÜÛÙùüûÖÔÒôöõòÿ!_.?\d\s]){5,15}$" />
                        <h4 style={{color:params.textColor}}>Email</h4>
                        <input style={{color:params.textColor, backgroundColor:params.backgroundColorZoneText}} className="lg:w-4/6 xl:w-3/6" value={email} onChange={(b)=> setEmail(b.target.value)} type="email" pattern="^([A-Za-z\-ËÊÈéèêëÄÂÀÃãàâäÎÏÌîïìÜÛÙùüûÖÔÒôöõòÿ!_.?\d]{3,100})+@([A-Za-z\-ËÊÈéèêëÄÂÀÃãàâäÎÏÌîïìÜÛÙùüûÖÔÒôöõòÿ!_.?\d]{3,15})+\.([A-Za-z\-ËÊÈéèêëÄÂÀÃãàâäÎÏÌîïìÜÛÙùüûÖÔÒôöõòÿ!_.?\d]{3,15})$" />
                        <h4 style={{color:params.textColor}}>Password</h4>
                        <input style={{color:params.textColor, backgroundColor:params.backgroundColorZoneText}} className="lg:w-4/6 xl:w-3/6" value={password} onChange={(b) => setPassword(b.target.value)} type="password"  pattern="^([A-Za-z\-ËÊÈéèêëÄÂÀÃãàâäÎÏÌîïìÜÛÙùüûÖÔÒôöõòÿ!_.?\d\s]){6,255}$"  />
                        <h4 style={{color:params.textColor}}>Avatar</h4>
                        <input style={{color:params.textColor, backgroundColor:params.backgroundColorZoneText}} className="lg:w-4/6 xl:w-3/6 text-white"  onChange={(b)=> setAvatar(b.target.files[0])} name="avatar" type="file"  />
                        <h4 style={{color:params.textColor}}>Bannière</h4>
                        <input style={{color:params.textColor, backgroundColor:params.backgroundColorZoneText}} className="lg:w-4/6 xl:w-3/6 text-white"  onChange={(b) => setBanniere(b.target.files[0])} name="banniere" type="file"/>
                        <h4 style={{color:params.textColor}}>Role</h4>
                        <select style={{color:params.textColor, backgroundColor:params.backgroundColorZoneText}} value={role} className="lg:w-4/6 xl:w-3/6" onChange={(b) => setRole(b.target.value)} name="" id="">
                            <option value="0">Selectionnez un rôle</option>
                            {allRole.map((theRole, index)=>{

                                return (
                                    <option key={index} value={theRole.id}>{theRole.nameRole}</option>
                                    )
                                })}
                        </select>
                        <button type="submit" className="rounded-full border border-black border-solid h-8 w-28 sm:rounded-full sm:border sm:border-black sm:border-solid sm:h-8 sm:w-28 md:rounded-full md:border md:border-black md:border-solid md:h-8 md:w-28 lg:rounded-full lg:border lg:border-black lg:border-solid lg:h-8 lg:w-28 xl:rounded-full xl:border xl:border-black xl:border-solid xl:h-8 xl:w-28" style={{backgroundColor:params.backgroundColorUpdateButton, color:params.textColorUpdateButton}}>Modifier</button>
                    </div>
                </form>
            </div>
        </div>
        
    )
}

