'use client'
import { getAllTheme } from "@/api/theme";
import { useEffect, useState } from "react";
import ModalUpdateTheme from "./modalUpdateTheme";
import ModalDeleteTheme from "./modalDeleteTheme";

export function TrModal(params: any) {

    function OpenModalEditer() {
        
        params.setProp(params.idTheme)
        const buttonModifier = document.querySelector('#blackScreenEditerTheme')
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
        
        params.setProp(params.idTheme)
        const buttonSupprimer = document.querySelector('#blackScreenSupprimerTheme')
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


export default function AllTheme(prop: any) {
    const [allTheme, setAllTheme] = useState([])


    const [idThemeFromTR, setIdThemeFromTR] = useState('')

    function getAllTheTheme() {
        getAllTheme()
        .then((res)=>{
            setAllTheme(res)
            console.log(res)
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    useEffect(()=>{
        getAllTheTheme()
    },[])

    return (
        <section className="w-full overflow-x-scroll lg:overflow-x-hidden ">
            <ModalUpdateTheme backgroundColorThird={prop.backgroundColorThird} textColor={prop.textColor} backgroundColorZoneText={prop.backgroundColorZoneText} backgroundColorUpdateButton={prop.backgroundColorUpdateButton} textColorUpdateButton={prop.textColorUpdateButton}  idTheme={idThemeFromTR}/>
            <ModalDeleteTheme backgroundColorThird={prop.backgroundColorThird} textColor={prop.textColor} backgroundColorZoneText={prop.backgroundColorZoneText} backgroundColorDeleteButton={prop.backgroundColorDeleteButton} textColorDeleteButton={prop.textColorDeleteButton}  idTheme={idThemeFromTR}/>
            <table className="w-full border border-black text-center" style={{backgroundColor:prop.backgroundColorThird}}>
                <thead>
                    <tr>
                        <th className="text-2xl border" style={{color:prop.textColor}} colSpan={4}>Tous les Themes</th>
                    </tr>
                    <tr className="border" style={{color:prop.textColor}}>
                        <th className="border">Nom de Theme</th>
                        <th className="border">Nombre de catégorie</th>
                        <th className="border">Modification</th>
                        <th className="border">Suppression</th>
                    </tr>
                </thead>
                <tbody>
                    {allTheme.map((theme, index)=>{
                        return (
                            <tr className="border" style={{color:prop.textColor}} key={index}>
                                <td className="border">{theme.nameTheme}</td>
                                <td className="border">{theme.categories.length}</td>
                                <TrModal backgroundColorUpdateButton={prop.backgroundColorUpdateButton} backgroundColorDeleteButton={prop.backgroundColorDeleteButton} textColorDeleteButton={prop.textColorDeleteButton} textColorUpdateButton={prop.textColorDeleteButton} idTheme={theme.id} setProp={setIdThemeFromTR}/>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </section>
    )
}