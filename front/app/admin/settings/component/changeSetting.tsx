"use client"

import { changeSet, getAllSet } from "@/api/setting"
import { useEffect, useState } from "react"



export default function ChangeSetting(prop: any) {
    const [allSet, setAllSet] = useState([])
    const [setting, setSetting] = useState('')
    
    async function theAllSet() {

        
        await getAllSet()
        .then((res)=>{
            setAllSet(res.settings)
        })
    }
    
    async function handleChangeSet(event: any) {
        const data = {
            token: localStorage.tokenUser
        }
        event.preventDefault();
        await changeSet(data, setting)
        
       
        
    }

    useEffect(()=>{
        theAllSet()
    },[])
    return (
        <form action="" onSubmit={handleChangeSet} method="put">

        <select style={{color:prop.textColor, backgroundColor:prop.backgroundColorZoneText}} value={setting}  onChange={(b) => setSetting(b.target.value)} name="" id="">
            <option  style={{color:prop.textColor, backgroundColor:prop.backgroundColorZoneText}} value="0">Selectionnez un paramètre</option>
                {allSet.map((theSet, index)=>{
                    
                    return (
                        <option style={{color:prop.textColor, backgroundColor:prop.backgroundColorZoneText}} key={index} value={theSet.id}>{theSet.nameSetting}</option>
                        )
                    })}
        </select>

        <button>Changer</button>
        </form>
    )
}