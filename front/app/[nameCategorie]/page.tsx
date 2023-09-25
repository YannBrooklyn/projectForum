'use client'
import { useParams } from "next/navigation";
import { ButtonNewTopic, PresPost } from "./component";
import { getCateg } from "@/api/categ";
import { useEffect, useState } from "react";
import { getSet } from "@/api/setting";

export default function Categorie() {
    const idCategorie = useParams().nameCategorie
    const [categ, setCateg] = useState('')
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
    const [nameForum, setNameForum] = useState('')
    const [iconeLikeFalse, setIconeLikeFalse] = useState('')
    const [iconeLikeTrue, setIconeLikeTrue] = useState('')
    const [iconeDeletePost, setIconeDeletePost] = useState('')
    const [iconeUpdatePost, setIconeUpdatePost] = useState('')


    async function getTheCateg(){

        await getCateg(idCategorie)
        .then((res)=>{
            console.log(res)
            setCateg(res.data.categorie)
        })
        .catch((error)=>{
            console.log(error)
        })
    }   


    async function designSetting(){

        await getSet(2)
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
            setNameForum(res.data.setting.nameForum)
            setIconeUpdatePost(res.data.setting.iconeUpdatePost)
            setIconeDeletePost(res.data.setting.iconeDeletePost)
            setIconeLikeTrue(res.data.setting.iconeLikeTrue)
            setIconeLikeFalse(res.data.setting.iconeLikeFalse)
        })
        .catch((error)=>{
            console.log(error)
        })
    } 
    
   
   


   
    
    useEffect(()=>{
       getTheCateg()
       designSetting()
    },[])
    

    return (
        <main className="w-12/12 flex justify-center items-center">

                 <section className="w-11/12 flex flex-col justify-center items-center">
            {categ !== null && categ !== undefined && idCategorie == categ.id ?
            (  
                <>
                    <ButtonNewTopic textColorGeneralButton={textColorGeneralButton} backgroundColorGeneralButton={backgroundColorGeneralButton}/>
                    <br/>
                    <section style={{width:"100%"}}>
                        
                        <h4 className="text-center h-14 w-12/12 border-solid border border-black sm:h-14 md:h-14 lg:h-14 xl:h-14 2xl:h-14" style={{color:generalTextColor, backgroundColor:backgroundColorCadre}}>Topics</h4>
                        
                        <PresPost backgroundColorCategorie={backgroundColorCategorie} textColor={generalTextColor}/> 
                    </section>
                </>
            ) : (
                <div className=" h-full w-full flex flex-col items-center justify-center gap-8" style={{color:generalTextColor}}>
                    <h1 className="text-5xl bold">Verification</h1>
                    <h3 className="text-2xl">Veuillez patientez quelques instant...</h3>
                </div>
            )}
            </section>
        </main>
    );
}


