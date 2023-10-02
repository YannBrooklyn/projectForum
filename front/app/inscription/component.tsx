
import { newUser } from "@/api/user"
import { useState } from "react"
import { useRouter } from "next/navigation"

export function ContentRegister(prop: any){

    const [pseudonyme, setPseudonyme] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')
    const router = useRouter();
    const regexPseudo = /^([A-Za-zËÊÈéèêëÄÂÀÃãàâäÎÏÌîïìÜÛÙùüûÖÔÒôöõòÿ!_.'?\d\s-]){5,15}$/; 
    const regexPassword = /^([A-Za-zËÊÈéèêëÄÂÀÃãàâäÎÏÌîïìÜÛÙùüûÖÔÒôöõòÿ!_.'?\d\s-]){6,255}$/; 
    const regexEmail = /^([A-Za-z\-ËÊÈéèêëÄÂÀÃãàâäÎÏÌîïìÜÛÙùüûÖÔÒôöõòÿ!_.?\d]){3,100}@([A-Za-z\-ËÊÈéèêëÄÂÀÃãàâäÎÏÌîïìÜÛÙùüûÖÔÒôöõòÿ!_.?\d]){3,15}\.([A-Za-z\-ËÊÈéèêëÄÂÀÃãàâäÎÏÌîïìÜÛÙùüûÖÔÒôöõòÿ!_.?\d]){2,15}$/
    const [errorMessage, setErrorMessage] = useState('')
    const [succes, setSucces] = useState('')
    const regexToken = /^([A-Za-zËÊÈéèêëÄÂÀÃãàâäÎÏÌîïìÜÛÙùüûÖÔÒôöõòÿ!_.'?\d\s-]){2,}$/; 
    

    const handleReg = async (event: any) =>{
        event.preventDefault();

        const data = {
            pseudo: pseudonyme,
            email: email,
            password: password,
            confirmPassword: passwordConfirm,
            token: localStorage.tokenUser
        }

        !regexToken.test(localStorage.tokenUser) || !regexPassword.test(password)  || passwordConfirm == " " || !regexEmail.test(email) || !regexPseudo.test(pseudonyme) || pseudonyme == " " || pseudonyme == "" || email == "" || email == " " || !regexPassword.test(passwordConfirm) || password === undefined || password === null || password == " " || password == "" ?
        setErrorMessage('Merci de bien remplir les champs avec des caractères valide.') :
        password !== passwordConfirm ?
        setErrorMessage('Les 2 mot de passes sont pas identique.') :
        await newUser(data)
        .then((data) => {
            if (data !== undefined) {

                if (data.status === 200) {
                    
                    setSucces(data.data.message)
                    setErrorMessage('')
                    
                    router.push('/connexion')
                      
                } else {
                    return Promise.reject(data)
                }
            }
            
        })
        .catch((error) => {
            if(!error) {
                setSucces('Enregistrement réussi, vous allez être redirigé vers la page de connexion.')
                setErrorMessage('')
                router.push('/')
            }

            if (error) {

                setSucces('')
                setErrorMessage(error.response.data.message)
            }
        })
        
    }



    return (
        <form className="w-full flex flex-col items-center justify-center" action="" onSubmit={handleReg} method="post">
            <div className="flex flex-col justify-center items-center border border-black  h-96 w-96 rounded-3xl  sm:w-10/12 md:w-7/12 lg:w-6/12 xl:w-6/12 2xl:w-7/12" style={{gap:"2vh",  backgroundColor:prop.backgroundColorThird}}>
                <h3 style={{color:"green"}}>{succes}</h3>
                <h3 style={{color:"red"}}>{errorMessage}</h3>
                <h3 style={{color:prop.textColor}}>Pseudonyme</h3>
                <input className="h-6 w-52 sm:w-6/12 md:w-7/12 lg:w-6/12 xl:w-6/12 2xl:w-7/12" style={{backgroundColor:prop.backgroundColorZoneText, color:prop.textColor}} placeholder="Choisi un pseudo" type="text" onChange={(b) => setPseudonyme(b.target.value)} value={pseudonyme} pattern="^([A-Za-z\-ËÊÈéèêëÄÂÀÃãàâäÎÏÌîïìÜÛÙùüûÖÔÒôöõòÿ!_.?\d\s]){6,15}$"  required/>

                <h3 style={{color:prop.textColor}}>Email</h3>
                <input className="h-6 w-52 sm:w-6/12 md:w-7/12 lg:w-6/12 xl:w-6/12 2xl:w-7/12" style={{backgroundColor:prop.backgroundColorZoneText, color:prop.textColor}} placeholder="exemple@exemple.com" type="email" onChange={(b) => setEmail(b.target.value)} value={email} pattern="^([A-Za-z\-ËÊÈéèêëÄÂÀÃãàâäÎÏÌîïìÜÛÙùüûÖÔÒôöõòÿ!_.?\d]{3,100})+@([A-Za-z\-ËÊÈéèêëÄÂÀÃãàâäÎÏÌîïìÜÛÙùüûÖÔÒôöõòÿ!_.?\d]{3,15})+\.([A-Za-z\-ËÊÈéèêëÄÂÀÃãàâäÎÏÌîïìÜÛÙùüûÖÔÒôöõòÿ!_.?\d]{3,15})$" required />

                <h3 style={{color:prop.textColor}}>Mot de passe</h3>
                <input className="h-6 w-52 sm:w-6/12 md:w-7/12 lg:w-6/12 xl:w-6/12 2xl:w-7/12" style={{backgroundColor:prop.backgroundColorZoneText, color:prop.textColor}} type="password" onChange={(b) => setPassword(b.target.value)} value={password} pattern="^([A-Za-z\-ËÊÈéèêëÄÂÀÃãàâäÎÏÌîïìÜÛÙùüûÖÔÒôöõòÿ!_.?\d\s]){6,255}$"  required/>

                <h3 style={{color:prop.textColor}}>Mot de passe confirmation</h3>
                <input className="h-6 w-52 sm:w-6/12 md:w-7/12 lg:w-6/12 xl:w-6/12 2xl:w-7/12" style={{backgroundColor:prop.backgroundColorZoneText, color:prop.textColor}} type="password" onChange={(b) => setPasswordConfirm(b.target.value)} value={passwordConfirm} pattern="^([A-Za-z\-ËÊÈéèêëÄÂÀÃãàâäÎÏÌîïìÜÛÙùüûÖÔÒôöõòÿ!_.?\d\s]){6,255}$" required />

                <button className="rounded-full border border-black border-solid h-8 w-28 sm:rounded-full sm:border sm:border-black sm:border-solid sm:h-8 sm:w-28 md:rounded-full md:border md:border-black md:border-solid md:h-8 md:w-28 lg:rounded-full lg:border lg:border-black lg:border-solid lg:h-8 lg:w-28 xl:rounded-full xl:border xl:border-black xl:border-solid xl:h-8 xl:w-28" style={{background:prop.backgroundColorGeneralButton, color:prop.textColorGeneralButton}}>Inscription</button>
            </div>
        </form>
    )
}