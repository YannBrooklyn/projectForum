'use client'
import { getAllRole } from "@/api/role"
import { table } from "console"
import { useEffect, useState } from "react"
import ModalUpdateRole from "./modalUpdate"
import ModalDeleteRole from "./modalDelete"



export function TrModal(params: any) {

    function OpenModalEditer() {
        console.log("rerere")
        params.setProp(params.idRole)
        const buttonModifier = document.querySelector('#blackScreenEditerRole')
        buttonModifier ?
        buttonModifier.style.display = "flex" : null
    }

    function OpenModalSupprimer() {
        
        params.setProp(params.idRole)
        const buttonSupprimer = document.querySelector('#blackScreenSupprimerRole')
    buttonSupprimer ?
    buttonSupprimer.style.display = "flex" : null
    }

    return (
        
        <>
        
        <td className="border"><button style={{backgroundColor:params.backgroundColorUpdateButton, border:"none", color:params.textColorUpdateButton, borderRadius:"0.5vh"}} onClick={OpenModalEditer}>modifier</button></td>
        <td className="border"><button style={{backgroundColor:params.backgroundColorDeleteButton, border:"none", color:params.textColorDeleteButton, borderRadius:"0.5vh"}} onClick={OpenModalSupprimer}>supprimer</button></td>
        </>
        
    )
}


export default function AllRole (prop: any) {
    const [roleInfo, setRoleInfo] = useState([])

    const [idRoleFromTR, setIdRoleFromTR] = useState('')

    async function allTheRole () {
        getAllRole()
        .then((res)=>{
            console.log(res.roles)
            setRoleInfo(res.roles)
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    useEffect(()=>{
        allTheRole()
    },[])

    return (
        <section className="w-full overflow-x-scroll lg:overflow-x-hidden">
            <ModalUpdateRole backgroundColorThird={prop.backgroundColorThird} textColor={prop.textColor} backgroundColorZoneText={prop.backgroundColorZoneText} backgroundColorUpdateButton={prop.backgroundColorUpdateButton} textColorUpdateButton={prop.textColorUpdateButton}  idRole={idRoleFromTR}/>
            <ModalDeleteRole backgroundColorThird={prop.backgroundColorThird} textColor={prop.textColor} backgroundColorZoneText={prop.backgroundColorZoneText} backgroundColorDeleteButton={prop.backgroundColorDeleteButton} textColorDeleteButton={prop.textColorDeleteButton}  idRole={idRoleFromTR}/>
            <table className="text-center w-full border border-black" style={{backgroundColor:prop.backgroundColorThird}}>
                <thead>
                    <tr>
                        <th className="border text-2xl" style={{color:prop.textColor}} colSpan={4}>Les rôles</th>
                    </tr>
                    <tr className="border" style={{color:prop.textColor}}>
                        <th className="border">Nom de Role</th>
                        <th className="border">Code couleur</th>
                        <th className="border">Modifier</th>
                        <th className="border">Supprimer</th>
                    </tr>
                </thead>
                <tbody>
                    {roleInfo.map((role, index)=>{
                        return (          
                            <tr key={index}>
                                <td className="border" style={{color:role.colorRole, fontWeight:"bold"}}>{role.nameRole}</td>
                                <td className="border">{role.colorRole}</td>
                                <TrModal backgroundColorUpdateButton={prop.backgroundColorUpdateButton} backgroundColorDeleteButton={prop.backgroundColorDeleteButton} textColorDeleteButton={prop.textColorDeleteButton} textColorUpdateButton={prop.textColorDeleteButton} idRole={role.id} setProp={setIdRoleFromTR}/>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </section>
    )
}