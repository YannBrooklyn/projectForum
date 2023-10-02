'use client'
import { newCateg } from "@/api/categ";
import { getAllTheme } from "@/api/theme";
import { useEffect, useState } from "react"


export default function CreateCateg(prop: any) {
    const [nameCateg, setNameCateg] = useState('')
    const regexNameCategorie = /^([A-Za-zËÊÈéèêëÄÂÀÃãàâäÎÏÌîïìÜÛÙùüûÖÔÒôöõòÿ!_.'?\d\s-]){6,45}$/; 
    const [errorMessage, setErrorMessage] = useState('')
    const [succes, setSucces] = useState('')
    const regexToken = /^([A-Za-zËÊÈéèêëÄÂÀÃãàâäÎÏÌîïìÜÛÙùüûÖÔÒôöõòÿ!_.'?\d\s-]){2,}$/; 
    const [theme, setTheme] = useState('')
    const [allTheme, setAllTheme] = useState([])

    async function handleCateg(event: any) {
        event.preventDefault();
        const token = localStorage.tokenUser
        const data = {
            nameCategorie: nameCateg,
            idTheme: theme,
            token: token
        }
        !regexToken.test(token) || nameCateg === null || nameCateg === undefined || !nameCateg || !regexNameCategorie.test(nameCateg) ?
        setErrorMessage('Merci de mettre des caractères valides et un minimum de 6 caractères.') :
        await newCateg(data)
        .then((res)=>{
            if (res !== undefined) {
                if (res.status === 200) {
                    setNameCateg('')
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
                setSucces('Catégorié crée avec succès')
                setErrorMessage('')
                setNameCateg('')
            }

            if (error) {
                console.log(error)
                setErrorMessage(error.response.data.message)
                setSucces('')
            }
        })
    }

    function getAllTheTheme () {
        getAllTheme()
        .then((res)=>{
            console.log(res)
            setAllTheme(res)
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    useEffect(()=>{
        getAllTheTheme()
    },[])

    return (
        <section>
            <div>
                <form action="" onSubmit={handleCateg} method="post">
                <div className="flex flex-col items-center gap-6">

                    <h2 className="font-bold" style={{color:prop.textColor}}>Nom de categorie</h2>
                    <h3 style={{color: "green"}}>{succes}</h3>
                    <h3 style={{color:"red"}}>{errorMessage}</h3>
                    <input style={{color:prop.textColor, backgroundColor:prop.backgroundColorZoneText}} value={nameCateg} onChange={(b) => setNameCateg(b.target.value)} type="text" name="" id=""  pattern="^([\-!?._@+a-zA-ZËÊÈéèêëÄÂÀÃãàâäÎÏÌîïìÜÛÙùüûÖÔÒÕôöõòÿ\d\s]{6,45})$" required  />
                    <select style={{color:prop.textColor, backgroundColor:prop.backgroundColorZoneText}} value={theme}  onChange={(b) => setTheme(b.target.value)} name="" id="">
                            <option  style={{color:prop.textColor, backgroundColor:prop.backgroundColorZoneText}} value="0">Selectionnez un theme</option>
                            {allTheme.map((theTheme, index)=>{

                                return (
                                    <option style={{color:prop.textColor, backgroundColor:prop.backgroundColorZoneText}} key={index} value={theTheme.id}>{theTheme.nameTheme}</option>
                                )
                            })}
                    </select>
                    <button className="rounded-full border border-black border-solid h-8 w-28 sm:rounded-full sm:border sm:border-black sm:border-solid sm:h-8 sm:w-28 md:rounded-full md:border md:border-black md:border-solid md:h-8 md:w-28 lg:rounded-full lg:border lg:border-black lg:border-solid lg:h-8 lg:w-28 xl:rounded-full xl:border xl:border-black xl:border-solid xl:h-8 xl:w-28 text-center" style={{backgroundColor:prop.backgroundColorGeneralButton, color:prop.textColorGeneralButton}}>Crée</button>
                </div>
                </form>
            </div>
        </section>
    )
}