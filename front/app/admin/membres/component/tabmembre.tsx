'use client'
import { GetAllUser } from "@/api/user"
import { useEffect, useState } from "react"
import ModalUpdate from "./modalUpdate"
import ModalDelete from "./modalDelete"



// export function ModalEditerAdmin () {
//     const domainName = "http://localhost:3000"
//     history.pushState({}, "", domainName + "/admin/membres/" + params.idUser)

//     const buttonModifier = document.querySelector('#blackScreenEditer')
//     buttonModifier ?
//     buttonModifier.style.display = "flex" : null

//     return (

//     )
// } 

export function TrModal(params: any) {

    function OpenModalEditer() {
        
        params.setProp(params.idUser)
        const buttonModifier = document.querySelector('#blackScreenEditer')
    buttonModifier ?
    buttonModifier.style.display = "flex" : null
    }

    function OpenModalSupprimer() {
        
        params.setProp(params.idUser)
        const buttonSupprimer = document.querySelector('#blackScreenSupprimer')
    buttonSupprimer ?
    buttonSupprimer.style.display = "flex" : null
    }

    return (
        
        <>
        
        <td className="border"><button style={{backgroundColor:params.backgroundColorUpdateButton, border:"none", color:params.textColorUpdateButton, borderRadius:"0.5vh"}} onClick={OpenModalEditer} type="button">modifier</button></td>
        <td className="border"><button style={{backgroundColor:params.backgroundColorDeleteButton, border:"none", color:params.textColorDeleteButton, borderRadius:"0.5vh"}} onClick={OpenModalSupprimer} type="button">supprimer</button></td>
        </>
        
    )
}

export default function TableauMembre(prop: any) {

    const [allMember, setAllMember] = useState([])


    const [idUserFromTR, setIdUserFromTR] = useState('')
    
    function GetAllTheMember () {
        GetAllUser()
        .then((res)=>{
            console.log(res)
            setAllMember(res)
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    useEffect(()=>{
        GetAllTheMember()
    },[])
    return (
        <section className="h-full w-full  overflow-x-scroll lg:overflow-x-hidden">
            <ModalUpdate backgroundColorThird={prop.backgroundColorThird} textColor={prop.textColor} backgroundColorZoneText={prop.backgroundColorZoneText} backgroundColorUpdateButton={prop.backgroundColorUpdateButton} textColorUpdateButton={prop.textColorUpdateButton} idUser={idUserFromTR}/>
            <ModalDelete backgroundColorThird={prop.backgroundColorThird} textColor={prop.textColor} backgroundColorZoneText={prop.backgroundColorZoneText} backgroundColorDeleteButton={prop.backgroundColorDeleteButton} textColorDeleteButton={prop.textColorDeleteButton} idUser={idUserFromTR}/>
            <table className="text-center w-full border border-black " style={{backgroundColor:prop.backgroundColorThird}}>
                <thead>
                    <tr>
                        <th className="border" style={{color:prop.textColor}} colSpan={8}>Tous les membres</th>
                    </tr>
                    <tr style={{color:prop.textColor}}>
                        <th className="border">Pseudo</th>
                        <th className="border">Email</th>
                        <th className="border">Password</th>
                        <th className="border">Avatar</th>
                        <th className="border">Bannière</th>
                        <th className="border">Role</th>
                        <th className="border">Modifier</th>
                        <th className="border">Supprimer</th>
                    </tr>
                </thead>
                <tbody>
                    {allMember.map((member, index)=>{
                        return (
                            
                            <tr style={{color:prop.textColor}} key={index}>
                            <td className="border">{member.pseudo}</td>
                            <td className="border">{member.email}</td>
                            <td className="border">Non affichable</td>
                            <td className="border">Non affichable</td>
                            <td className="border">Non affichable</td>
                            <td className="border">{member.role.nameRole}</td>
                            <TrModal backgroundColorUpdateButton={prop.backgroundColorUpdateButton} backgroundColorDeleteButton={prop.backgroundColorDeleteButton} textColorDeleteButton={prop.textColorDeleteButton} textColorUpdateButton={prop.textColorDeleteButton} idUser={member.id} setProp={setIdUserFromTR}/>
                        </tr>
                        
                        
                        )
                    })}
                </tbody>
            </table>
            
        </section>
    )
}

