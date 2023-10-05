'use client'
import { getAllCateg } from "@/api/categ";
import { useEffect, useState } from "react";
import ModalUpdateCateg from "./modalUpdate";
import ModalDeleteCateg from "./modalDelete";

export function TrModal(params: any) {

    function OpenModalEditer() {
        
        params.setProp(params.idCateg)
        const buttonModifier = document.querySelector('#blackScreenEditerCateg')
    buttonModifier ?
    buttonModifier.style.display = "flex" : null

    const testForm = document.querySelector('#testForm')
    testForm ?
    testForm.style.display = "block" : null

    const testInput = document.querySelector('#testInput')
    testInput ?
    testInput.style.display="block" : null
    }

    function OpenModalSupprimer() {
        
        params.setProp(params.idCateg)
        const buttonSupprimer = document.querySelector('#blackScreenSupprimerCateg')
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


export default function AllCateg(prop: any) {
    const [allCateg, setAllCateg] = useState([])


    const [idCategFromTR, setIdCategFromTR] = useState('')

    function getAllTheCateg() {
        getAllCateg()
        .then((res)=>{
            setAllCateg(res)
            console.log(res)
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    useEffect(()=>{
        getAllTheCateg()
    },[])

    return (
        <section className="w-full overflow-x-scroll lg:overflow-x-hidden ">
            <ModalUpdateCateg backgroundColorThird={prop.backgroundColorThird} textColor={prop.textColor} backgroundColorZoneText={prop.backgroundColorZoneText} backgroundColorUpdateButton={prop.backgroundColorUpdateButton} textColorUpdateButton={prop.textColorUpdateButton}  idCateg={idCategFromTR}/>
            <ModalDeleteCateg backgroundColorThird={prop.backgroundColorThird} textColor={prop.textColor} backgroundColorZoneText={prop.backgroundColorZoneText} backgroundColorDeleteButton={prop.backgroundColorDeleteButton} textColorDeleteButton={prop.textColorDeleteButton}  idCateg={idCategFromTR}/>
            <table className="w-full border border-black text-center" style={{backgroundColor:prop.backgroundColorThird}}>
                <thead>
                    <tr>
                        <th className="text-2xl border" style={{color:prop.textColor}} colSpan={4}>Toutes les categories</th>
                    </tr>
                    <tr className="border" style={{color:prop.textColor}}>
                        <th className="border">Nom de Categorie</th>
                        <th className="border">Nombre de message</th>
                        <th className="border">Modification</th>
                        <th className="border">Suppression</th>
                    </tr>
                </thead>
                <tbody>
                    {allCateg.map((categ, index)=>{
                        return (
                            <tr className="border" style={{color:prop.textColor}} key={index}>
                                <td className="border">{categ.nameCategorie}</td>
                                <td className="border">{categ.coms.length + categ.posts.length}</td>
                                <TrModal backgroundColorUpdateButton={prop.backgroundColorUpdateButton} backgroundColorDeleteButton={prop.backgroundColorDeleteButton} textColorDeleteButton={prop.textColorDeleteButton} textColorUpdateButton={prop.textColorDeleteButton} idCateg={categ.id} setProp={setIdCategFromTR}/>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </section>
    )
}