'use client'

import ContentActu from "./client-component"




// import { getAllPost } from "@/api/post";
 



export default function Accueil() {
    
    
    return (
        
        <main className=" flex flex-col items-center w-12/12">
            <h2 className="text-white" style={{fontSize:"3vh"}}>Accueil : Actualité</h2>
            <section className="w-11/12">
                
                <ContentActu/>
                
            </section>
        </main>
        )
    } 