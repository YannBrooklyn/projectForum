import { Children, useState } from "react"
import jwt_decode from "jsonwebtoken";
import { useEffect } from "react"
import { getAllCateg } from "@/api/categ";
import { getSet } from "@/api/setting";
import { GetUser, StatutUser } from "@/api/user";
import { getAllTheme } from "@/api/theme";






export function Categorie(prop: any) {

    const [categories, setCategories] = useState([])

    const getCateg = () => {
        getAllCateg()
        .then((res: any) => {
            console.log("rrrrr",res)
            setCategories(res)
        })
        .catch((error)=> {
            console.log("yooo", error)
        })
    }

    
    

    useEffect(()=> {
        getCateg();
        
    }, [])
    console.log(categories);
    

    return (
        <>    
            {categories !== undefined && categories.length > 0 ?
                categories.map((categ, index) =>{
                    if (prop.idTheme == categ.idTheme) {
                    return (
                        <a key={index} href={"/" + categ.id + "/"}>
                            <div className="flex justify-between" style={{color:prop.textColor, height:"6vh", backgroundColor:prop.backgroundColor, width:"100%", borderStyle:"solid", borderWidth:"0.2vh", borderColor:"black"}}>
                                <h4 style={{color:prop.textColor}}>{categ.nameCategorie}</h4>
                                <div className="flex flex-row gap-12 text-xs">
                                <h4 style={{color:prop.textColor}}>{categ.posts.length}<br/>Topic</h4>
                                <h4 style={{color:prop.textColor}}>{categ.posts.length + categ.coms.length}<br/>Message</h4>
                                </div>
                            </div>
                        </a>
                    ) }
                }) : null
            }
        </>
    );
}

export function Theme(prop: any) {

    

    const [themes, setThemes] = useState([])

    const getTheme = () => {
        getAllTheme()
        .then((res: any) => {
            console.log("rrrrr",res)
            setThemes(res)
        })
        .catch((error)=> {
            console.log("yooo", error)
        })
    }
    const content = <Categorie/>

    useEffect(()=> {
        
        getTheme();
    }, [])
    console.log("ttt" + themes);
    

    
            return (
                <>
                
                {themes != undefined && themes.length > 0 ?
                    themes.map((theme, index) =>{
                        return(

                                <section key={index}>
                                    <h4 style={{color:prop.textColor, height:"6vh", backgroundColor:prop.backgroundColorSecond, textAlign:"center", width:"100%", borderStyle:"solid", borderWidth:"0.2vh", borderColor:"black"}}>{theme.nameTheme}</h4>
                                    <Categorie idTheme={theme.id} textColor={prop.textColor} backgroundColor={prop.backgroundColor}/>
                                </section>
                            
                        )
                }): null}
            
                </>
            )
            
    
}





export function OpenMenuBurger(){
    let myNavBurger = document.getElementById("navBurger")
    myNavBurger ?
    myNavBurger.style.display = "flex" : null
    
}

export function CloseMenuBurgerLogout(){
    let myNavBurger = document.getElementById("navBurger")
    myNavBurger ?
    myNavBurger.style.display = "none" : null
    
}

export  function MenuBurgerLogin(params: any){
    const idUser = jwt_decode.decode(params.idUser)
    async function Logout() {
        
        const idUserForOnline = jwt_decode.decode(localStorage.tokenUser)
        const data = {
            token: localStorage.tokenUser? localStorage.tokenUser : null,
            statsUser: 0
        }
        data.statsUser === 0 && localStorage.tokenUser ?
        await StatutUser(data, idUserForOnline.id) 
        .then((res)=>{
            console.log(res)
            localStorage.removeItem('tokenUser')
        })
        .catch((error)=>{
            console.log(error)
        }) : null
    
    }

    const [role, setRole] = useState('')
    async function getRole() {
        await   GetUser(idUser.id)
        .then((res)=>{
            console.log(res.user.idRole)
            setRole(res.user.idRole)
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    useEffect(()=>{
        getRole()
    },[])
        return (
            <div style={{display:"flex", flexDirection:"column", justifyContent:"center", height:"100%", width:"100%"}}>
                <button onClick={CloseMenuBurgerLogout} style={{position:"absolute", top:"0", right:"0", color:"white", fontSize:"2vh"}}>X</button>
                <a href="/"><button style={{backgroundColor:params.backgroundColorButtonBurger, color:params.navbarTextColor, borderColor:"black", borderWidth:"0.2vh", width:"100%", height:"5vh"}}>Accueil</button></a>
                {role == "1"? 
                (
                    <a href="/admin/membres"><button style={{backgroundColor:params.backgroundColorButtonBurger, color:params.navbarTextColor, borderColor:"black", borderWidth:"0.2vh", width:"100%", height:"5vh"}}>Pannel</button></a>
                ): null}
                <a href={"/profil/" + idUser.id}><button style={{backgroundColor:params.backgroundColorButtonBurger, color:params.navbarTextColor, borderColor:"black", borderWidth:"0.2vh", width:"100%", height:"5vh"}}>Profil</button></a>
                <a href="/parametre"><button style={{backgroundColor:params.backgroundColorButtonBurger, color:params.navbarTextColor, borderColor:"black", borderWidth:"0.2vh", width:"100%", height:"5vh"}}>Parametre</button></a>
                <a href="/" onClick={Logout}><button style={{backgroundColor:params.backgroundColorButtonBurger, color:params.navbarTextColor, borderColor:"black", borderWidth:"0.2vh", width:"100%", height:"5vh"}}>Deconnexion</button></a>
            </div>
        )
    
}

export function MenuBurgerLogout(prop: any){
    return (
            <div style={{display:"flex", flexDirection:"column", justifyContent:"center", height:"100%", width:"100%"}}>
                <button onClick={CloseMenuBurgerLogout} style={{position:"absolute", top:"0", right:"0", color:"white", fontSize:"2vh"}}>X</button>
                <a href="/"><button style={{backgroundColor:prop.backgroundColorButtonBurger, color:prop.navbarTextColor, borderColor:"black", borderWidth:"0.2vh", width:"100%", height:"5vh"}}>Accueil</button></a>
                <a href="/forum"><button style={{backgroundColor:prop.backgroundColorButtonBurger, color:prop.navbarTextColor, borderColor:"black", borderWidth:"0.2vh", width:"100%", height:"5vh"}}>Forum</button></a>
                <a href="/inscription"><button style={{backgroundColor:prop.backgroundColorButtonBurger, color:prop.navbarTextColor, borderColor:"black", borderWidth:"0.2vh", width:"100%", height:"5vh"}}>Inscription</button></a>
                <a href="/connexion"><button style={{backgroundColor:prop.backgroundColorButtonBurger, color:prop.navbarTextColor, borderColor:"black", borderWidth:"0.2vh", width:"100%", height:"5vh"}}>Connexion</button></a>
            </div>     
        )

}




export function MenuBurger() {
    
    const [token, setToken] = useState('')



    const [generalTextColor, setGeneralTextColor] = useState('')
    const [navbarTextColor, setNavbarTextColor] = useState('')
    const [nameForumColor, setNameForumColor] = useState('')
    const [textColorGeneralButton, setTextColorGeneralButton] = useState('')
    const [textColorDeleteButton, setTextColorDeleteButton] = useState('')
    const [textColorUpdateButton, setTextColorUpdateButton] = useState('')
    const [textColorCardMember, setTextColorCardMember] = useState('')
    const [backgroundColorNavbar, setBackgroundColorNavbar] = useState('')
    const [backgroundColorFirst, setBackgroundColorFirst] = useState('')
    const [backgroundColorSecond, setBackgroundColorSecond] = useState('')
    const [backgroundColorCadre, setBackgroundColorCadre] = useState('')
    const [backgroundColorCategorie, setBackgroundColorCategorie] = useState('')
    const [backgroundColorButtonBurger, setBackgroundColorButtonBurger] = useState('')
    const [backgroundColorGeneralButton, setBackgroundColorGeneralButton] = useState('')
    const [backgroundColorDeleteButton, setBackgroundColorDeleteButton] = useState('')
    const [backgroundColorUpdateButton, setBackgroundColorUpdateButton] = useState('')
    const [backgroundColorCardMember, setBackgroundColorCardMember] = useState('')
    const [backgroundColorZoneText, setBackgroundColorZoneText] = useState('')
    const [backgroundColorThird, setBackgroundColorThird] = useState('')

    async function designSetting(){

        await getSet()
        .then((res)=>{
            setGeneralTextColor(res.data.setting.generalTextColor)
            setNavbarTextColor(res.data.setting.navbarTextColor)
            setNameForumColor(res.data.setting.nameForumColor)
            setTextColorGeneralButton(res.data.setting.textColorGeneralButton)
            setTextColorDeleteButton(res.data.setting.textColorDeleteButton)
            setTextColorUpdateButton(res.data.setting.textColorUpdateButton)
            setTextColorCardMember(res.data.setting.textColorCardMember)
            setBackgroundColorNavbar(res.data.setting.backgroundColorNavbar)
            setBackgroundColorFirst(res.data.setting.backgroundColorFirst)
            setBackgroundColorSecond(res.data.setting.backgroundColorSecond)
            setBackgroundColorCadre(res.data.setting.backgroundColorCadre)
            setBackgroundColorCategorie(res.data.setting.backgroundColorCategorie)
            setBackgroundColorButtonBurger(res.data.setting.backgroundColorButtonBurger)
            setBackgroundColorGeneralButton(res.data.setting.backgroundColorGeneralButton)
            setBackgroundColorDeleteButton(res.data.setting.backgroundColorDeleteButton)
            setBackgroundColorUpdateButton(res.data.setting.backgroundColorUpdateButton)
            setBackgroundColorCardMember(res.data.setting.backgroundColorCardMember)
            setBackgroundColorZoneText(res.data.setting.backgroundColorZoneText)
            setBackgroundColorThird(res.data.setting.backgroundColorThird)
        })
        .catch((error)=>{
            console.log(error)
        })
    } 
    
    


        useEffect(()=> {
            const dataToken = localStorage.getItem('tokenUser')
            dataToken ?
                setToken(dataToken) : null
                designSetting()
        },[])
       
    

    
    return (
        <div id="navBurger" className="fixed top-0 left-0 h-full w-5/12" style={{ zIndex:"3", display:"none", backgroundColor:backgroundColorThird}}>
                        
            {
                token == null || token == '' || token == undefined ?
                <MenuBurgerLogout backgroundColorButtonBurger={backgroundColorButtonBurger} navbarTextColor={navbarTextColor}/> :
                <MenuBurgerLogin backgroundColorButtonBurger={backgroundColorButtonBurger} navbarTextColor={navbarTextColor} idUser={token}/>

            }         
       </div>
    )

}






export function NavbarDesktopLogin(prop: any) {

    const idUser = jwt_decode.decode(prop.token)

    const [role, setRole] = useState('')

    async function Logout() {
        
        const idUserForOnline = jwt_decode.decode(localStorage.tokenUser)
        const data = {
            token: localStorage.tokenUser? localStorage.tokenUser : null,
            statsUser: 0
        }
        data.statsUser === 0 && localStorage.tokenUser ?
        await StatutUser(data, idUserForOnline.id) 
        .then((res)=>{
            console.log(res)
            localStorage.removeItem('tokenUser')
        })
        .catch((error)=>{
            console.log(error)
        }) : null
    
    }

    async function getRole() {
        await   GetUser(idUser.id)
        .then((res)=>{
            console.log(res.user.idRole)
            setRole(res.user.idRole)
        })
        .catch((error)=>{
            console.log(error)
        })
    }
    useEffect(()=>{
        getRole()
    },[])

    

    return (
        <ul className="hidden md:flex md:gap-8 md:justify-around">
            <a href="/"><li className="font-bold" style={{color:prop.navbarTextColor}}>Accueil</li></a>
            {role == "1"? 
            (
                <a href="/admin/membres"><li className="font-bold" style={{color:prop.navbarTextColor}}>Pannel</li></a>
            ): null}
            <a href={"/profil/" + idUser.id}><li className="font-bold" style={{color:prop.navbarTextColor}}>Profil</li></a>
            <a href="/parametre"><li className="font-bold" style={{color:prop.navbarTextColor}}>Parametre</li></a>
            <a id="buttonLogout" href="/" onClick={Logout}><li className="font-bold" style={{color:prop.navbarTextColor}}>Deconnexion</li></a>
        </ul>
    )
}


export function NavbarDesktopLogout(prop: any) {

    
    
    return (
        <ul className="hidden md:flex md:gap-8 md:justify-around">
            <a href="/"><li className="font-bold " style={{color:prop.navbarTextColor}}>Accueil</li></a>
            <a href="/inscription"><li className="font-bold " style={{color:prop.navbarTextColor}}>Inscription</li></a>
            <a href="/connexion"><li className="font-bold " style={{color:prop.navbarTextColor}}>Connexion</li></a>
        </ul>
    )
}


export function NavbarLogin(prop: any){

    async function Logout() {
        
            const idUserForOnline = jwt_decode.decode(localStorage.tokenUser)
            const data = {
                token: localStorage.tokenUser? localStorage.tokenUser : null,
                statsUser: 0
            }
            data.statsUser === 0 && localStorage.tokenUser ?
            await StatutUser(data, idUserForOnline.id) 
            .then((res)=>{
                console.log(res)
                localStorage.removeItem('tokenUser')
            })
            .catch((error)=>{
                console.log(error)
            }) : null
        
    }

    return(
        <ul className='flex gap-8 justify-around md:hidden'>
            <li id="iconeNavBurger" className="text-2xl" onClick={OpenMenuBurger} style={{margin:"0", padding:'0', color:prop.navbarTextColor}}>☰</li>
            <a href="/"><li className="font-bold " style={{color:prop.navbarTextColor}}>Accueil</li></a>
            <a href="/" onClick={Logout}><li className="font-bold " style={{color:prop.navbarTextColor}}>Deconnexion</li></a>
        </ul>
    )  

}


export function NavbarLogout(prop: any) {
    return (
        <>
                    <ul className='flex gap-8 justify-around md:hidden'>
                        <li id="iconeNavBurger" className="text-2xl" onClick={OpenMenuBurger} style={{margin:"0", padding:'0', color:prop.navbarTextColor}}>☰</li>
                        <a href="/"><li className="font-bold " style={{color:prop.navbarTextColor}}>Accueil</li></a>
                        <a href="/connexion"><li className="font-bold " style={{color:prop.navbarTextColor}}>Connexion</li></a>
                    </ul>
                </>
            )  
}

export function Navbar() {


    const [generalTextColor, setGeneralTextColor] = useState('')
    const [navbarTextColor, setNavbarTextColor] = useState('')
    const [nameForumColor, setNameForumColor] = useState('')
    const [textColorGeneralButton, setTextColorGeneralButton] = useState('')
    const [textColorDeleteButton, setTextColorDeleteButton] = useState('')
    const [textColorUpdateButton, setTextColorUpdateButton] = useState('')
    const [textColorCardMember, setTextColorCardMember] = useState('')
    const [backgroundColorNavbar, setBackgroundColorNavbar] = useState('')
    const [backgroundColorFirst, setBackgroundColorFirst] = useState('')
    const [backgroundColorSecond, setBackgroundColorSecond] = useState('')
    const [backgroundColorCadre, setBackgroundColorCadre] = useState('')
    const [backgroundColorCategorie, setBackgroundColorCategorie] = useState('')
    const [backgroundColorButtonBurger, setBackgroundColorButtonBurger] = useState('')
    const [backgroundColorGeneralButton, setBackgroundColorGeneralButton] = useState('')
    const [backgroundColorDeleteButton, setBackgroundColorDeleteButton] = useState('')
    const [backgroundColorUpdateButton, setBackgroundColorUpdateButton] = useState('')
    const [backgroundColorCardMember, setBackgroundColorCardMember] = useState('')
    const [backgroundColorZoneText, setBackgroundColorZoneText] = useState('')

    const [token, setToken] = useState('')


    async function designSetting(){

        await getSet()
        .then((res)=>{
            setGeneralTextColor(res.data.setting.generalTextColor)
            setNavbarTextColor(res.data.setting.navbarTextColor)
            setNameForumColor(res.data.setting.nameForumColor)
            setTextColorGeneralButton(res.data.setting.textColorGeneralButton)
            setTextColorDeleteButton(res.data.setting.textColorDeleteButton)
            setTextColorUpdateButton(res.data.setting.textColorUpdateButton)
            setTextColorCardMember(res.data.setting.textColorCardMember)
            setBackgroundColorNavbar(res.data.setting.backgroundColorNavbar)
            setBackgroundColorFirst(res.data.setting.backgroundColorFirst)
            setBackgroundColorSecond(res.data.setting.backgroundColorSecond)
            setBackgroundColorCadre(res.data.setting.backgroundColorCadre)
            setBackgroundColorCategorie(res.data.setting.backgroundColorCategorie)
            setBackgroundColorButtonBurger(res.data.setting.backgroundColorButtonBurger)
            setBackgroundColorGeneralButton(res.data.setting.backgroundColorGeneralButton)
            setBackgroundColorDeleteButton(res.data.setting.backgroundColorDeleteButton)
            setBackgroundColorUpdateButton(res.data.setting.backgroundColorUpdateButton)
            setBackgroundColorCardMember(res.data.setting.backgroundColorCardMember)
            setBackgroundColorZoneText(res.data.setting.backgroundColorZoneText)
        })
        .catch((error)=>{
            console.log(error)
        })
    } 

    useEffect(()=> {
        const dataToken = localStorage.getItem('tokenUser')
        dataToken ?
            setToken(dataToken) : null
            
                designSetting()
            
    },[])

   

    return (
        <>
        {token == '' || token == undefined || token == null ? (
            <div className="h-2">
            <NavbarLogout navbarTextColor={navbarTextColor}/>
            <NavbarDesktopLogout navbarTextColor={navbarTextColor}/>
            </div>
            ) : (
                <div className="h-2">
                <NavbarLogin navbarTextColor={navbarTextColor}/>
                <NavbarDesktopLogin token={token} navbarTextColor={navbarTextColor}/>
                </div>
            )
        }
        </>

    )
}

