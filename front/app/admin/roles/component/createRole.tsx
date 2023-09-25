'use client'
import { newRole } from "@/api/role";
import { useState } from "react";


export default function CreateRole(prop: any) {

    const [nameRole, setNameRole] = useState('')
    const [colorRole, setColorRole] = useState('')
    const regexNameRole = /^([A-Za-zËÊÈéèêëÄÂÀÃãàâäÎÏÌîïìÜÛÙùüûÖÔÒôöõòÿ!_.'?\d\s-]){4,50}$/; 
    const regexColorRole = /^#+([a-zA-Z0-9]){6,6}$/
    const [errorMessage, setErrorMessage] = useState('')
    const [succes, setSucces] = useState('')
    const regexToken = /^([A-Za-zËÊÈéèêëÄÂÀÃãàâäÎÏÌîïìÜÛÙùüûÖÔÒôöõòÿ!_.'?\d\s-]){2,}$/; 
    

    async function handleRole(event: any) {
        event.preventDefault();
        const token = localStorage.tokenUser
        const data = {
            name: nameRole,
            color: colorRole,
            token: token
        }
        console.log(data)
        !regexToken.test(token) || !regexColorRole.test(colorRole) || !regexNameRole.test(nameRole) ||nameRole === null || nameRole === undefined || nameRole === " " || nameRole === "" || colorRole === null || colorRole === undefined || colorRole === " " || colorRole === "" ?
        setErrorMessage('Merci de mettre des caractères valide, de mettre un minimum de 4 caractère pour le role et une couleur pour le role.') :
        await newRole(data)
        .then((data)=>{
            if (data !== undefined) {

                if (data.status === 200) {
                    
                    setSucces(data.data.message)
                    setErrorMessage("")
                    setTimeout(() => {
                        setNameRole('')
                        setSucces('')
                    }, 1500);
                } else {
                    return Promise.reject(data)
                }
            }

        
    
            
        })
        .catch((error)=>{
            if (!error) {

                setErrorMessage('')
                setSucces('Nouveau role créegg')
                setTimeout(() => {
                    setNameRole('')
                    setSucces('')
                }, 1500);
            }

            if (error) {
                setErrorMessage(error.response.data.message)
                setSucces('')
            }
        })
    }

    return (
        <section>
            <div>
                <form action="" onSubmit={handleRole} method="post">
                    <div className="flex flex-col items-center gap-3">
                        <h2 className="font-bold" style={{color:prop.textColor}}>Nom du role</h2>
                        <h3 style={{color:"green"}}>{succes}</h3>
                        <h3 style={{color:"red"}}>{errorMessage}</h3>
                        <input style={{color:prop.textColor, backgroundColor:prop.backgroundColorZoneText}} value={nameRole} onChange={(b) => setNameRole(b.target.value)} type="text" pattern="^([A-Za-z\-ËÊÈéèêëÄÂÀÃãàâäÎÏÌîïìÜÛÙùüûÖÔÒôöõòÿ!_.?\d\s]){4,15}$" required />
                        <h2>Couleur du role</h2>
                        <input onChange={(b) => setColorRole(b.target.value)} type="color" pattern="^#+([A-Za-z0-9]){6,6}"/>
                        <button  className="rounded-full border border-black border-solid h-8 w-28 sm:rounded-full sm:border sm:border-black sm:border-solid sm:h-8 sm:w-28 md:rounded-full md:border md:border-black md:border-solid md:h-8 md:w-28 lg:rounded-full lg:border lg:border-black lg:border-solid lg:h-8 lg:w-28 xl:rounded-full xl:border xl:border-black xl:border-solid xl:h-8 xl:w-28 text-center" style={{backgroundColor:prop.backgroundColorGeneralButton, color:prop.textColorGeneralButton}}>Crée</button>
                    </div>
                </form>
            </div>
        </section>
    )
}