"use client"
import { useEffect, useState } from "react";
import { ContentNewTopic } from "./component";
import { useSearchParams } from "react-router-dom";

export default function NewTopic() {

    const [token, setToken] = useState('')


    

    
    useEffect(()=> {
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
                    <ContentNewTopic/>
                ) : null
                
            }
        </main>
    )
}