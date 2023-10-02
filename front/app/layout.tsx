'use client'
import { MenuBurgerLogin, MenuBurgerLogout, NavbarLogin, NavbarLogout, OpenMenuBurgerLogout, MenuBurger, Navbar } from './client-component'
import { CloseMenuBurgerLogout } from './client-component'
import Link from 'next/link'
import './mobile.css'
import { useEffect, useState } from 'react'
import { type } from 'os'
import { getAllCom } from '@/api/com'
import { getAllPost } from '@/api/post'
import { GetAllUser, StatutUser, offlineAllUsers } from '@/api/user'
import { getAllRole } from '@/api/role'
import { getSet } from '@/api/setting'
import jwt_decode from "jsonwebtoken"


export const metadata = {
    title: "Forum"
}


export default function RootLayout({
    children,
}: {
    children: React.ReactNode
    params: {
        nameCategorie: string
    }
}) {

    const [nameForum, setNameForum] = useState('')
    const [generalTextColor, setGeneralTextColor] = useState('')

    const [nameForumColor, setNameForumColor] = useState('')
    
    const [backgroundColorNavbar, setBackgroundColorNavbar] = useState('')
    const [backgroundColorFirst, setBackgroundColorFirst] = useState('')
    const [backgroundColorCadre, setBackgroundColorCadre] = useState('')

    const [usersOnline, setUsersOnline] = useState([]) 


    async function designSetting(){

         getSet(2)
        .then((res)=>{
            setNameForum(res.data.setting.nameForum)
            setGeneralTextColor(res.data.setting.generalTextColor)
            
            setNameForumColor(res.data.setting.nameForumColor)
            
            setBackgroundColorNavbar(res.data.setting.backgroundColorNavbar)
            setBackgroundColorFirst(res.data.setting.backgroundColorFirst)
            setBackgroundColorCadre(res.data.setting.backgroundColorCadre)
            
        })
        .catch((error)=>{
            console.log(error)
        })
    } 

    async function GetUsersOnline(){
        
        await GetAllUser()
        .then((res)=>{
            console.log(res)
            setUsersOnline(res)
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    

    setTimeout(() => {
        offlineAllUsers()
    },3000000);
    
    useEffect(()=>{

        GetUsersOnline()
        designSetting()

        localStorage.tokenUser ?
        document.body.addEventListener('click', async function () {
            const idUserForOnline = jwt_decode.decode(localStorage.tokenUser)
            const data = {
                token: localStorage.tokenUser,
                statsUser: 1
            }
            data.statsUser === 1 ?
            await StatutUser(data, idUserForOnline.id) 
            .then((res)=>{
                console.log(res)
            })
            .catch((error)=>{
                console.log(error)
            }) : null
        }) : null
    },[]) 
    
    
    return (
        <html lang="fr">
            
            <body style={{backgroundColor:backgroundColorFirst, display:"flex", flexDirection:"column", color:generalTextColor}}>
                <header className='flex items-center justify-between flex-col gap-4 w-12/12'>
                    <a href="/"><h2 className=' bold text-5xl' style={{backgroundColor:backgroundColorFirst, color:nameForumColor}}>{nameForum}</h2></a>
                    <nav className="" style={{width:"100%", backgroundColor:backgroundColorNavbar}}>

                        <MenuBurger/>
                        <Navbar/>
                    </nav>
                    <hr className='w-12/12'/>
                </header>
                <div className="flex flex-col justify-between w-full gap-36 " style={{justifyContent:"space-between", height:"100%"}}>

                    {children}

                    <footer className='border-solid border border-black w-full h-64'>
                        <div className='flex flex-col justify-center items-center justify-around h-full w-full'>
                            <h2 className='w-full h-11 text-center bold text-3xl' style={{backgroundColor:backgroundColorCadre, color:nameForumColor}}>{nameForum}</h2>
                            <div className='flex flex-col gap-4'>
                                <Stats textColor={generalTextColor}/>
                                <h4 className='text-center font-bold text-md' style={{color:generalTextColor}}>Qui est en ligne ?</h4>
                                <WhosOnline textColor={generalTextColor} users={usersOnline}/>
                                <Roles textColor={generalTextColor}/>
                            </div>
                        </div>
                    </footer>
                </div>

            </body>
        </html>
    )
}

export function WhosOnline(prop: any) {
    return (
        <div className='flex gap-1'>
            {prop.users.map((user: any, index: any)=>{
                if (user.online === true) {
                    return (

                        <h4 style={{color:prop.textColor}} key={index}>{user.pseudo},</h4>
                    )
                }
            })}
        </div>
    )
}

export function Stats (prop: any) {

    const [coms, setComs] = useState({})
    const [posts, setPosts] = useState({})
    const [users, setUsers] = useState({})
    
    async function GetStats() {

        await getAllCom()
        .then((res)=>{
            setComs(res)
        })
        .catch((error)=>{
            console.log(error)
        })

        await getAllPost()
        .then((res)=>{
            setPosts(res)
        })
        .catch((error)=>{
            console.log(error)
        })

        await GetAllUser()
        .then((res)=>{
            console.log(res)
            setUsers(res)
        })
        .catch((error)=>{
            console.log(error)
        })
    } 
    
    useEffect(()=>{
        GetStats()
    },[])

    return(
        <div className='flex flex-row gap-4' style={{color:prop.textColor}}>
            <h4>Nombres d'utilisateur : {users.length}</h4>
            <h4>Total de sujet : {posts.length}</h4>
            <h4>Total de message : {coms.length + posts.length}</h4>
        </div>

    )
}

export function Roles (prop: any) {

    const [roles, setRoles] = useState([])
    
    
    async function GetTheRoles() {

        await getAllRole()
        .then((res)=>{
            console.log(res.roles.length)
            setRoles(res.roles)
        })
        .catch((error)=>{
            console.log(error)
        })

        
    } 
    
    useEffect(()=>{
        GetTheRoles()
            
    },[])

    return(
        <div  className='flex flex-row w-full gap-2'>
            <h4 className='font-bold' style={{color:prop.textColor}}>Roles :</h4>
            {roles.length !== 0 || roles !== undefined ?
                roles.map((role, index)=>{
                    return (
                            <h4 key={index} className='font-bold' style={{color:role.colorRole}}>{role.nameRole}</h4>      
                    )
                }) : null
            }
         </div>  
    )
}