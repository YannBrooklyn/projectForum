'use client'
import { useEffect, useState } from "react"
import Banner from "./component/banner"
import  {Confidentialite} from "./component/confidentialite"
import jwt_decode from "jsonwebtoken"
import { getSet } from "@/api/setting"


export default function Parametre() {

    const [generalTextColor, setGeneralTextColor] = useState('')
   
    const [textColorUpdateButton, setTextColorUpdateButton] = useState('')
   
    const [backgroundColorFirst, setBackgroundColorFirst] = useState('')
    const [backgroundColorSecond, setBackgroundColorSecond] = useState('')
    
    const [backgroundColorUpdateButton, setBackgroundColorUpdateButton] = useState('')
    const [backgroundColorZoneText, setBackgroundColorZoneText] = useState('')
    const [backgroundColorThird, setBackgroundColorThird] = useState('')
    

    async function designSetting(){

        await getSet()
        .then((res)=>{
            setGeneralTextColor(res.data.setting.generalTextColor)
     
            setTextColorUpdateButton(res.data.setting.textColorUpdateButton)
            setBackgroundColorFirst(res.data.setting.backgroundColorFirst)
            setBackgroundColorSecond(res.data.setting.backgroundColorSecond)
           
            setBackgroundColorUpdateButton(res.data.setting.backgroundColorUpdateButton)
            setBackgroundColorZoneText(res.data.setting.backgroundColorZoneText)
            setBackgroundColorThird(res.data.setting.backgroundColorThird)
            
        })
    }

    function OpenBanniere() {
        const mySectionPP = document.getElementById('sectionPP')
        const mySectionBanner = document.getElementById('sectionBanner')
        const mySectionConfid = document.getElementById('sectionConfid')

        if (mySectionBanner.style.display === "none") {
            mySectionBanner.style.display = "block";
            mySectionPP.style.display = "none";
            mySectionConfid.style.display = "none";
        }
    }

    function OpenPP() {
        const mySectionPP = document.getElementById('sectionPP')
        const mySectionBanner = document.getElementById('sectionBanner')
        const mySectionConfid = document.getElementById('sectionConfid')

        if(mySectionPP.style.display === "none") {
            mySectionPP.style.display = "block";
            mySectionBanner.style.display = "none";
            mySectionConfid.style.display = "none"
        }
    }

    function OpenConfid() {
        const mySectionPP = document.getElementById('sectionPP')
        const mySectionBanner = document.getElementById('sectionBanner')
        const mySectionConfid = document.getElementById('sectionConfid')
        
        
        if (mySectionConfid.style.display === "none") {
            mySectionConfid.style.display = "block"
            mySectionBanner.style.display = "none";
            mySectionPP.style.display = "none";
        } 
    }
    const [token, setToken] = useState('')

    useEffect(()=>{
        designSetting();
        const dataToken = localStorage.getItem('tokenUser')
        dataToken ?
        setToken(dataToken) : null

        if (!localStorage.tokenUser) {
            window.location.href="/"
        }
    },[])


    return(
        <main>
            {token ? 
                (
                    <section className="w-full h-auto flex flex-col justify-center items-center" style={{color:generalTextColor}}>
                        <h1 className="font-bold text-3xl">Parametre Compte</h1>
                        <div className="flex flex-col  w-11/12 h-full md:w-4/6 lg:w-3/6" style={{backgroundColor:backgroundColorThird}}>
                            <div className="flex border-none justify-evenly" style={{backgroundColor:backgroundColorFirst}}>
                                <button className="border border-black" onClick={OpenBanniere} style={{backgroundColor:backgroundColorSecond, color:generalTextColor}}>Banniere</button>
                                <button className="border border-black" onClick={OpenPP} style={{backgroundColor:backgroundColorSecond, color:generalTextColor}}>Photo de Profil</button>
                                <button className="border border-black" onClick={OpenConfid} style={{backgroundColor:backgroundColorSecond, color:generalTextColor}}>Confidentialité</button>
                            </div>
                            <Banner backgroundColorZoneText={backgroundColorZoneText} textColor={generalTextColor} backgroundColorUpdateButton={backgroundColorUpdateButton} textColorUpdateButton={textColorUpdateButton}/>
                            <Confidentialite backgroundColorZoneText={backgroundColorZoneText} textColor={generalTextColor} backgroundColorUpdateButton={backgroundColorUpdateButton} textColorUpdateButton={textColorUpdateButton} />
                        </div>
                    </section>
                ) : null}
        </main>
        
    )
}



